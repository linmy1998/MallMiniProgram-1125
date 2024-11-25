/*
 * @Author: linmingyu
 * @Date: 2023-11-22 15:25:35
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-22 17:03:12
 * @Description: file content
 */
import { http } from "@/utils/http"
// 获取个人信息 /member/profile
export const getMemberOrderPreAPI = () => {
  return http<any>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<any>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data: any) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<any>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}