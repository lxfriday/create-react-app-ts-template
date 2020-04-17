import qs from 'qs'
import { env } from './index'
import { uuid } from './uuid'

// 获取用户唯一标识
let cid: string
const localCid = window.localStorage.getItem('USER_UNIQUE_ID')
if (localCid) {
  cid = localCid
} else {
  const newCid = uuid()
  window.localStorage.setItem('USER_UNIQUE_ID', newCid)
  cid = newCid
}

// event_context
const UA = window.navigator.userAgent

function getDeviceType() {
  if (env.isIOS) {
    return 'ios'
  } else if (env.isXiaomi) {
    return 'miui'
  } else if (env.isAndroid) {
    return 'android'
  } else {
    return 'unknown'
  }
}

export function getEventContext() {
  const event_context = {
    event_params_event_context_device_type: getDeviceType(),
    event_params_event_context_position: window['userCurrentCity'] || null,
    event_params_event_context_cur_page: window.location.href,
    event_params_event_context_ua: encodeURI(UA),
    event_params_event_context: JSON.stringify({ cid }),
  }
  return event_context
}

const keyMap = {
  event_type: 'a',
  event_params_widget: 'b',
  event_params_timestamp: 'c',

  event_params_event_data_type: 'd',
  event_params_extend_json_from: 'e',
  event_params_extend_json_open_from: 'f',
  event_params_extend_json_dialog_id: 'g',

  event_params_event_context_device_type: 'h',
  event_params_event_context_position: 'i',
  event_params_event_context_cur_page: 'j',
  event_params_event_context_ua: 'k',
  event_params_extend_json: 'l',
  event_params_event_context: 'n',
}

const H5URL = {
  staging: '',
  preview: 'https://api-preview.ai.xiaomi.com/track/h5',
  prod: 'https://api.ai.xiaomi.com/track/h5',
}

function getENV() {
  const url = window.location.href
  if (url.indexOf('//i-staging') > 0) {
    return 'staging'
  }
  if (url.indexOf('//preview') > 0) {
    return 'preview'
  }
  if (url.indexOf('//i.ai.mi.com') > 0) {
    return 'prod'
  }
  return 'staging'
}

function getReportURL() {
  return H5URL[getENV()]
}

export function mapping(obj: any, _keyMap: any) {
  let newObj = {}
  for (const key in obj) {
    const newKey = _keyMap[key]
    if (newKey) {
      // @ts-ignore
      newObj[newKey] = obj[key]
    } else {
      // @ts-ignore
      newObj[key] = obj[key]
    }
  }
  return newObj
}

type extendJSONType = {
  result_list?: string
  template?: string
  from?: string
  activity_id?: string
  [propName: string]: any
}

type reportParamsType = {
  event_type: string
  widget: string
  event_data_type: string
  event_params_extend_json: extendJSONType
}

/**
 * 通用打点上报接口
 *
 * 使用方法：直接依据文档字段映射到上报函数的字段即可，内部已做好转换
 *
 * @link 小爱数据打点需求-H5 https://wiki.n.miui.com/pages/viewpage.action?pageId=239633814
 * @link 小爱客户端打点通用属性枚举-event_params https://wiki.n.miui.com/pages/viewpage.action?pageId=150893941
 */
export function reportBase({ event_type, widget, event_data_type, event_params_extend_json }: reportParamsType) {
  const url = getReportURL()
  if (!url) {
    console.log('staging环境不上报h5打点')
    return
  }

  const query = {
    event_type,

    // ------ event_params 部分 -----------------------------------------------------------------------------------------
    event_params_widget: widget,
    event_params_timestamp: +new Date(),
    event_params_event_data_type: event_data_type,
    event_params_extend_json: JSON.stringify(event_params_extend_json),
    event_params_extend_json_from: '',
    event_params_extend_json_open_from: '',
    event_params_extend_json_dialog_id: '',

    // ------event_context 部分-----------------------------------------------------------------------------------------
    // event_params_event_context_device_type: lotteryInfo.sys,
    // event_params_event_context_position: window['userCurrentCity'] || null,
    // event_params_event_context_cur_page,
    // event_params_event_context_ua: encodeURI(UA),
    ...getEventContext(),
    // ------event_context 部分-----------------------------------------------------------------------------------------
  }

  const queryAfterMapping = mapping(query, keyMap)
  const src = `${url}?${qs.stringify(queryAfterMapping)}`
  reportByImage(src)
}

export function reportByImage(src: string) {
  let img = new Image()
  img.onload = function() {
    // console.log('上报加载完成')
  }
  img.onerror = function() {
    // console.log('上报出错')
  }
  // console.log(src, 123)
  img.src = src
}

/**
 * 从哪个入口进入首页
 * original、wx-moments、wx、triennial_forward_homepage、triennial_forward_trailerpage、banner、qurey、wakeup_guide、miai_explore、push
 */
export function whereYouFrom() {
  const search = window.location.search
  const hash = window.location.hash
  let realQuerystring = search.indexOf('?') === -1 ? hash : search
  const { from } = qs.parse(realQuerystring.split('?')[1])
  console.log('from', from)
  let realFrom = null
  if (typeof from === 'string') {
    realFrom = from
  } else if (Array.isArray(from)) {
    // 防止微信加多个 from
    realFrom = from[0]
  }
  if (!realFrom) {
    return 'original'
  } else if (realFrom === 'singlemessage') {
    return 'wx'
  } else if (realFrom === 'timeline') {
    return 'wx-moments'
  } else if (realFrom === 'triennial_forward_homepage') {
    return 'triennial_forward_homepage'
  } else if (realFrom === 'triennial_forward_trailerpage') {
    return 'triennial_forward_trailerpage'
  } else if (realFrom === 'banner') {
    return 'banner'
  } else if (realFrom === 'qurey') {
    return 'qurey'
  } else if (realFrom === 'wakeup_guide') {
    return 'wakeup_guide'
  } else if (realFrom === 'miai_explore') {
    return 'miai_explore'
  } else if (realFrom === 'push') {
    return 'push'
  }
}
