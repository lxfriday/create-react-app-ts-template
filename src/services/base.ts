import qs from 'qs'
import { request, AxiosRequestData } from 'src/utils'

console.log('/abc' + qs.stringify({ a: 1, b: 2 }))

type getParamType = {
  url: string
  data?: AxiosRequestData
}

export function get({ url, data }: getParamType) {
  if (data) {
    return request({
      method: 'GET',
      url: `${url}?${qs.stringify(data)}`,
    })
  } else {
    return request({
      method: 'GET',
      url,
    })
  }
}

type postParamType = getParamType & {
  headers?: Object
}

export function post(req: postParamType) {
  return request({
    method: 'POST',
    url: req.url,
    headers: req.headers,
    data: req.data,
  })
}
