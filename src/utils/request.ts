import Axios, { AxiosPromise } from 'axios'

type AxiosRequestData = {
  [key: string]: string
}

const axios = Axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/json',
  },
})

axios.defaults.withCredentials = true
// 请求时的拦截器
axios.interceptors.request.use(
  config => {
    // 发送请求之前做一些处理,loading...
    return config
  },
  error => {
    // 当请求异常时做一些处理
    return Promise.reject(error)
  }
)

// 请求完成后的拦截器
axios.interceptors.response.use(
  response => {
    // 返回响应时做一些处理
    // 这里的return response返回的是一个对象, 内容如下:
    // {
    //      data: { },        // 服务器提供的响应
    //      status: 200,      // 服务器响应的HTTP状态代码
    //      statusText: 'OK', // 服务器响应的HTTP状态消息
    //      headers: {},      // 服务器响应头
    //      config: {}        // axios 的配置
    // }
    return response
  },
  error => {
    // 当响应异常时做一些处理
    // 这里我们把错误信息扶正, 后面就不需要写 catch 了
    return Promise.resolve(error.response)
  }
)

type reqType = {
  method: 'GET' | 'POST'
  url: string
  data?: AxiosRequestData
  headers?: any
}

/**
 * 发起网络请求
 * @param data
 */
export default function request({ method, url, data, headers }: reqType): AxiosPromise {
  return axios({
    url,
    method,
    data,
    headers,
  })
}
