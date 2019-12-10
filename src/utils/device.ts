/**
 * 和环境相关的逻辑代码
 */

// 是否是微信环境
export function isWechat() {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > -1) {
    return true
  }
  return false
}

export function isLocalHost() {
  const origin = window.location.origin
  if (origin.indexOf('localhost') > -1 || origin.indexOf('10.234') > -1) {
    return true
  }
  return false
}

function getEnv() {
  const UA = window.navigator.userAgent
  // 避免匹配到微信或者小米浏览器
  const UA2 = UA.replace(/MicroMessenger/g, '').replace(/XiaoMi\/MiuiBrowser/g, '')
  let isXiaomi: boolean = false,
    isAndroid: boolean = false,
    isIOS: boolean = false

  if (/(HM|Redmi|Mi)/gi.test(UA2) || /2013022|2014011|2014501|tiare|TBD|raphael|monet|POCO F1\/POCO PHONE F1/.test(UA2)) {
    isXiaomi = true
    isAndroid = true
  } else if (UA2.match(/iPhone|iPad|iPod/i)) {
    isIOS = true
  } else {
    isAndroid = true
  }

  const isQQ = /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(UA) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(UA)

  const browser = {
    isAndroid,
    isIOS,
    isXiaomi,

    isQQ,
    isSafari: /iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(UA),
    isWb: UA.match(/weibo/i) ? true : false,
    isWx: UA.match(/micromessenger/i) ? true : false,
    // isAndroidChrome: (UA.match(/Chrome\/([\d.]+)/) || UA.match(/CriOS\/([\d.]+)/)) && isAndroid && !isQQ,
  }
  return browser
}

// 获取当前浏览器和操作系统的环境
export const env = getEnv()
