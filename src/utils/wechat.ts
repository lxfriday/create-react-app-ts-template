/**
 * 微信鉴权的代码
 */

import { AxiosResponse } from 'axios'
import { request } from './request'

type wechatAuthorizeDataType = {
  signature: string
  appId: string
  nonceStr: string
  timestamp: string
}

export function getWechatAuthorized(): Promise<wechatAuthorizeDataType> {
  return request({
    method: 'GET',
    url: `/mico/api/open/sns/wechat/authorized?url=${encodeURIComponent(location.href)}`,
  }).then((res: AxiosResponse) => {
    console.log(res)
    if (res.data.code === 0) {
      return res.data.result
    }
    return null
  })
}
