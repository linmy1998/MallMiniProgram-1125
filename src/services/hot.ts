/*
 * @Author: linmingyu
 * @Date: 2023-11-13 15:56:08
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-13 16:00:32
 * @Description: file content
 */
import { http } from "@/utils/http"

// 热门推荐
export const getHotApI = (url: string, data?: any) => {
  return http({
    method: "GET",
    url,
    data
  })
}