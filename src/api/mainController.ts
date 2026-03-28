// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** health GET /api/hello/health */
export async function healthUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/hello/health', {
    method: 'GET',
    ...(options || {}),
  })
}
