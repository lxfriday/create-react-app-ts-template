import React, { Suspense, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { getWechatAuthorized, isWechat, isLocalHost } from 'src/utils'
import { wxShareInfo } from 'src/utils/constants'
import Loading from 'src/components/common/Loading'
import AppRouter from 'src/Router'

// 配置微信分享
function useConfigWxShare() {
  useEffect(() => {
    function wxShare() {
      getWechatAuthorized().then(data => {
        window.wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
        })
        window.wx.ready(function() {
          window.wx.updateAppMessageShareData({
            title: wxShareInfo.title, // 分享标题
            desc: wxShareInfo.desc, // 分享描述
            link: wxShareInfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: wxShareInfo.imgURL, // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
              // window.reportUserBehavior('thanksgiving-分享成功')
              // window.reportUserBehavior('thanksgiving-分享')
              // console.log('updateAppMessageShareData success')
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
              // window.reportUserBehavior('thanksgiving-分享')
              // console.log('updateAppMessageShareData cancel')
            },
            fail: function(res: any) {
              // window.reportUserBehavior('thanksgiving-分享')
              // console.log(res, 'updateAppMessageShareData fail')
            },
          })

          window.wx.updateTimelineShareData({
            title: wxShareInfo.title, // 分享标题
            link: wxShareInfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: wxShareInfo.imgURL, // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
              // window.reportUserBehavior('thanksgiving-分享成功')
              // window.reportUserBehavior('thanksgiving-分享')
              // console.log('updateTimelineShareData success')
            },
            cancel: function() {
              // window.reportUserBehavior('thanksgiving-分享')
              // // 用户取消分享后执行的回调函数
              // console.log('updateTimelineShareData cancel')
            },
            fail: function(res: any) {
              // window.reportUserBehavior('thanksgiving-分享')
              // console.log(res, 'updateTimelineShareData fail')
            },
          })
        })
      })
    }

    if (!isLocalHost() && isWechat() && process.env.REACT_APP_USE_WECHAT_SHARE === 'TRUE') {
      wxShare()
    }
  }, [])
}

function useConfigSentry() {
  // <script src="https://cdn.ravenjs.com/3.26.2/raven.min.js" crossorigin="anonymous"></script>
  // <script>
  //   Raven.config('https://b930084113ad4d56851f6dd0557c6589@sentry.micloud.d.xiaomi.net/130').install()
  // </script>
  useEffect(() => {
    if (process.env.REACT_APP_USE_SENTRY === 'TRUE') {
      const script = document.createElement('script')
      script.src = process.env.REACT_APP_SENRTY_SRC
      script.crossOrigin = 'anonymous'
      script.async = true
      script.onload = function onload() {
        window.Raven.config(process.env.REACT_APP_SENRTY_CONFIG_LINK).install()
      }
      document.body.append(script)
    }
  }, [])
}

const App: React.FC = () => {
  useConfigWxShare()
  useConfigSentry()
  return (
    <Suspense fallback={null}>
      <AppRouter />
    </Suspense>
  )
}

export default hot(App)
