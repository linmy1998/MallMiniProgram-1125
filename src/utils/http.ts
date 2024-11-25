import { useMemberStore } from "@/stores/index"

/*
 * @Author: linmingyu
 * @Date: 2023-11-06 17:39:06
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-20 15:21:11
 * @Description: file content
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: any) {
    if (!options.url.startsWith('http')) {
      options.url = `${baseURL}${options.url}`
    }
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    const profile = useMemberStore()
    options.header.Authorization = profile.profile?.token || ''
  }
}

uni.addInterceptor('request', httpInterceptor)

uni.addInterceptor('uploadFile', httpInterceptor)

interface IData<T> {
  code: string,
  msg: string,
  result: T
}

export const http = <T>(options: any) => {
  return new Promise<IData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          resolve(res.data as IData<T>)
        } else if (res.statusCode === 401) {
          const member = useMemberStore()
          member.clearProfile()
          uni.navigateTo({ url: 'pages/login/login' })
          reject(res.data.msg)
        } else {
          uni.showToast({
            icon: 'error',
            title: '请求错误'
          })
          reject(res.data.msg)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'error',
          title: '网络错误'
        })
        reject(err)
      }
    })
  })
}