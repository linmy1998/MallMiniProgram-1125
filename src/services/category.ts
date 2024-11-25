/*
 * @Author: linmingyu
 * @Date: 2023-11-14 16:27:05
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-14 16:33:55
 * @Description: file content
 */
import { http } from "@/utils/http"
// 分类列表 
export const getCategoryTopAPI = () => {
  return http({
    method: 'get',
    url: '/category/top',
  })
}