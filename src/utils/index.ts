// n 的几率出现 true
export function nPercent(n: number): boolean {
  return Math.floor(Math.random() * 100) + 1 <= n
}

export * from './dev'
export * from './device'
export * from './request'
export * from './wechat'
export * from './constants'
