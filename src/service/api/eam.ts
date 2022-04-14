import { request } from '@/service/base'

export function getCourseListRequest() {
  return request({
    url: '/eam/coursesList',
  })
}
