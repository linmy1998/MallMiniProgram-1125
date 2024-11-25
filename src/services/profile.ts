import { http } from "@/utils/http"
// 获取个人信息 /member/profile
export const getMemberProfileAPI = () => {
  return http<any>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileAPI = (data: any) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}