// https://wiki.n.miui.com/pages/viewpage.action?pageId=242634762#%E4%BB%A5%E4%B8%8B%E6%98%AFaiwebactivity%E7%9A%84%E6%8E%A5%E5%8F%A3
import EventEmitter from 'events'

export const isMIXiaoai = !!window.xiaoai // 是小米小爱同学环境
export const isLite = !!(
  (window.app && window.app.postData) ||
  (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postData)
) // 是小爱 lite 环境

const eventCenter = new EventEmitter()
eventCenter.setMaxListeners(3000)

const liteIdCounterObj = {
  id: 0,
}

// ------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------通用 bridge 封装------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------

/**
 * 关闭 webview
 */
export function closePage(): void {
  if (isMIXiaoai) {
    MIXiaoaiSafelyCall('close')()
  } else if (isLite) {
    liteCommonUtil('closeWebView')
  }
}

/**
 * 获取 app 版本信息，返回一个数字，数字比较大小即可得到当前的版本号是否符合要求
 *
 * ------------------------------------------MIUI------------------------------------------
 * v4.11
 * 30 ---- 4 ---- 011 ---- 000
 * v4.10
 * 30 ----- 4 ---- 010 ---- 000
 * v4.1
 * 30 ----- 4 ---- 001 ---- 000
 * v5.0
 * 30 ----- 5 ---- 000 ---- 000
 * v5.1
 * 30 ----- 5 ---- 001 ---- 000
 * ------------------------------------------Lite------------------------------------------
 * v2.8.3
 * 10 ----- 2 ---- 008 ---- 003
 *
 * @return Promise<number> 版本号 MIUI 305003000、Lite 102008003
 */
export function getAppVersion(): Promise<number> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      const version = MIXiaoaiSafelyCall('getAppVersion', 0)('com.miui.voiceassist')
      resolve(version)
    } else if (isLite) {
      liteCommonUtil('appVersion').then((value: any) => {
        resolve(value.version)
      })
    }
  })
}

/**
 * 调起小爱执行 query
 *
 * @param queryText {string} 要执行的 query
 */
export function makeQuery(queryText: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      MIXiaoaiSafelyCall('query')(queryText)
    } else if (isLite) {
      liteCommonUtil('queryAction', { queryText })
    }
  })
}

type shareParamsType = {
  /**
   * 分享的标题
   */
  title: string
  /**
   * 分享的 url
   */
  url: string
  /**
   * 分享的小 icon 地址
   */
  iconUrl: string
  /**
   * 分享的描述
   */
  description: string
}

/**
 * 处理分享
 */
export function showShareDialog(params: shareParamsType): Promise<any> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      window.onShareResult = function(result: any) {
        // result.a 当前有三种状态：1成功，2取消，3失败
        // result.b 表示从哪里分享出来的，当前有：wx(微信),wx-moments（朋友圈）
        resolve(result.b)
      }
      MIXiaoaiSafelyCall('shareLink')(params.title, params.url, params.description, params.iconUrl)
    } else if (isLite) {
      liteCommonUtil('showShareDialog', {
        title: params.title,
        url: params.url,
        iconUrl: params.iconUrl,
        description: params.description,
      }).then((value: any) => {
        // value = {id: xx, from: xx}
        // from => wx、wx-moments、weibo、qq
        resolve(value.from)
      })
    }
  })
}

/**
 * 获取用户信息
 *
 * @return Promise<Object>
 * -------------------------MIUI-------------------------
 * // 未登录时（其他字段没有）
 * `deviceId`: string
 * `peeked`: boolean
 * `sid`: string
 *  登录时新增
 * `serviceToken`: string
 * `cUserId`: string
 * `userId`: string
 * `security`: string
 * `slh`: string
 * `ph`: string
 * -------------------------Lite-------------------------
 * `cUserId`: string 没登录时为 ''
 * `deviceId`: string 一直会有
 * `is_login`: string 没登录时为'false'，登录了为 'true'
 * `serviceToken`: string 没登录为 ''
 * `userId`: string 没登录时为 ''
 */
export function getUserInfo(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      const userInfo = MIXiaoaiSafelyCall('getUserInfo')()
      resolve(JSON.parse(userInfo))
    } else if (isLite) {
      resolve(liteCommonUtil('getUserInfo'))
    } else {
      resolve({
        deviceId: '',
      })
    }
  })
}

/**
 * 判断用户是否已经登录
 *
 * @return Promise<boolean> 是否登录了
 */
export function hasLogginedIn(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      const userInfo = JSON.parse(MIXiaoaiSafelyCall('getUserInfo')())
      resolve(typeof userInfo.userId === 'string')
    } else if (isLite) {
      liteCommonUtil('getUserInfo').then((data: any) => {
        resolve(data.is_login === 'true')
      })
    }
  })
}

/**
 * 驱动页面跳转前往登录页面
 *
 * @return null
 */
export function goToLogin(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      MIXiaoaiSafelyCall('startActivity')(
        'intent:#Intent;action=com.xiaomi.account.action.XIAOMI_ACCOUNT_LOGIN;launchFlags=0x14000000;package=com.xiaomi.account;end'
      )
    } else if (isLite) {
      liteCommonUtil('login')
    }
  })
}

/**
 * 获取请求时的鉴权 authorization
 *
 * @return Promise<string>
 */
export function getAuthorization(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isMIXiaoai) {
      const authorization = MIXiaoaiSafelyCall('getDeviceToken')()
      resolve(authorization)
    } else if (isLite) {
      liteCommonUtil('getAuthorization').then((data: any) => resolve(data.authorization))
    }
  })
}

// 接收lite端的消息
window.postData = (jsonStr: string) => {
  // "{"appVersion":{"id":"123456","version":101009001,"versionName":"1.9.1"}}"
  try {
    const res = JSON.parse(jsonStr)
    Object.keys(res).forEach(action => {
      const value = res[action]
      eventCenter.emit(`lite/${action}/${value.id}`, value)
    })
  } catch (e) {
    console.log('window.postData', e, jsonStr)
  }
}

/**
 * lite 通用工具函数
 * @param reqParams {object} 除id外的其他需要传递的参数
 * @param action {string} action 例如 getUserInfo、showShareDialog 等
 */
export function liteCommonUtil(action: string, reqParams?: Object) {
  const params = reqParams ? reqParams : {}
  return new Promise((resolve, rej) => {
    const reqJsonStr = JSON.stringify({
      [action]: {
        id: String(liteIdCounterObj.id),
        ...params,
      },
    })
    eventCenter.once(`lite/${action}/${liteIdCounterObj.id}`, resolve)
    liteIdCounterObj.id++
    LiteSafelyPostData(reqJsonStr)
  })
}

/**
 * Lite 传数据
 */
export function LiteSafelyPostData(dataStr: string) {
  window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.postData &&
    window.webkit.messageHandlers.postData.postMessage(dataStr)
  window.app && window.app.postData && window.app.postData(dataStr)
}

/**
 * MIUI 小爱调用接口
 * @action {string} 需要调用的接口 xiaoai[action]()
 * @defaultValue any 如果该 bridge 不存在的时候默认值
 */
export function MIXiaoaiSafelyCall(action: string, defaultValue?: any) {
  return function(...args: any[]) {
    if (window.xiaoai && window.xiaoai[action]) {
      return window.xiaoai && window.xiaoai[action] && window.xiaoai[action](...args)
    } else {
      return defaultValue
    }
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------通用 bridge 封装------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
