/*
 * @Author: linmingyu
 * @Date: 2023-11-16 17:08:29
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-19 16:43:21
 * @Description: file content
 */

import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序内测登录接口 /login/wxMin/simple

export const postLoginWxSimpleAPI = (phoneNumber: string) => {
  return http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  })
}