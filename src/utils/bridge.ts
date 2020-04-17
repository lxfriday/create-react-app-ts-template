import { shareCfg } from './constants'
import { env } from './device'
import {
  liteCommonUtil,
  closePage,
  getAppVersion,
  makeQuery,
  showShareDialog,
  getUserInfo,
  hasLogginedIn,
  goToLogin,
  getAuthorization,
  isMIXiaoai,
  isLite,
  MIXiaoaiSafelyCall,
} from './xiaoaiBridge'

export {
  liteCommonUtil,
  closePage,
  getAppVersion,
  makeQuery,
  showShareDialog,
  getUserInfo,
  hasLogginedIn,
  goToLogin,
  getAuthorization,
  isMIXiaoai,
  isLite,
}

/**
 * 小爱同学版本号规则：https://wiki.n.miui.com/pages/viewpage.action?pageId=218082205
 * 版本是否符合要求
 */
export function versionValid() {
  return new Promise<boolean>((resolve, reject) => {
    if (isMIXiaoai) {
      const version = MIXiaoaiSafelyCall('getAppVersion', 0)('com.miui.voiceassist')
      resolve(version >= 305004000)
    } else if (isLite) {
      liteCommonUtil('appVersion').then((value: any) => {
        console.log('lite version info', value)
        if (env.isIOS) {
          // IOS  2.8.3
          console.log('is ios')
          resolve(value.version >= 102008003)
        } else {
          console.log('is android')
          // android  2.8.3
          resolve(value.version >= 102008030)
        }
      })
    }
  })
}

/**
 * query 升级小爱
 */
export function queryUpgrade() {
  return makeQuery('升级小爱')
}

// 分享
export function handleShare() {
  return showShareDialog({
    title: shareCfg.title,
    url: shareCfg.link,
    iconUrl: shareCfg.iconURL,
    description: shareCfg.desc,
  })
}
