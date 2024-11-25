/*
 * @Author: linmingyu
 * @Date: 2023-11-07 10:50:14
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-07 16:05:46
 * @Description: file content
 */


import { http } from "@/utils/http"
// 首页-广告区域-小程序
export const getHomeBannerAPI = (distributionSite = "1") => {
  return http({
    method: 'get',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

// 首页-前台分类-小程序 
export const getCategoryMutliAPI = () => {
  return http({
    method: 'get',
    url: '/home/category/mutli'
  })
}

// 首页-热门推荐-小程序
export const getHotMutliAPI = () => {
  return http({
    method: 'get',
    url: '/home/hot/mutli'
  })
}

// 猜你喜欢-小程序
export const getGuessLikeAPI = (pageParams) => {
  return http({
    method: 'get',
    url: '/home/goods/guessLike',
    data: pageParams
  })
}

