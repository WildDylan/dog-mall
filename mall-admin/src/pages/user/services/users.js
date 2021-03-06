import { request, config } from 'utils'

const { api } = config
const { users } = api

export function query (params) {
  return request({
    url: '/admin/user/list',
    method: 'post',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: users + '/delete',
    method: 'post',
    data: params,
  })
}
