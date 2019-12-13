import * as base from './base'

export function getList() {
  return base.get({
    url: '/list',
  })
}
