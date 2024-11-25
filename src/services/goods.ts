/*
 * @Author: linmingyu
 * @Date: 2023-11-16 16:43:42
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-16 16:45:12
 * @Description: file content
 */
import { http } from "@/utils/http"
// 商品详情
export const getGoodsByIdAPI = (id: string) => {
  return http({
    method: 'get',
    url: '/goods',
    data: {
      id
    }
  })
}