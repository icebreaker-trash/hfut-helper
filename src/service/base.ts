import type { AjaxInstance, AjaxRequestConfig } from 'uni-ajax'
import ajax from 'uni-ajax'
import { requestConfig } from '@/shared/config/request'

const headers = {
  cookie: '',
}

export function createInstance(config: AjaxRequestConfig) {
  return ajax.create(config)
}

const baseInstance = createInstance({
  baseURL: requestConfig.baseURL,
})

baseInstance.interceptors.request.use((config: AjaxRequestConfig) => {
  config.header = {
    ...config.header,
    cookie: headers.cookie,
  }
  return config
})

baseInstance.interceptors.response.use((res) => {
  const cookies = res.cookies
  cookies.forEach((cookie) => {
    if (cookies.includes('wengine_vpn_ticketwebvpn_hfut_edu_cn')) {
      headers.cookie = cookie
    } else {
      headers.cookie = cookie
    }
  })
  return res
})

export function request(config: AjaxRequestConfig, instance: AjaxInstance<any> = baseInstance) {
  if (!config.method) {
    config.method = 'GET'
  }
  return instance(config)
}
