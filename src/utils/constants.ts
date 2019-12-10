// localstorage 相关
export const localstorageCons = {
  INFO_SUBMITTED: 'INFO_SUBMITTED',
}

// 配置微信分享
const { origin, pathname } = window.location
export const wxShareInfo = {
  title: '我是分享的标题',
  desc: '我是分享的描述',
  imgURL: 'https://cdn.cnbj1.fds.api.mi-img.com/aife/ai-thanksgiving-letter/wxshare_logo.png', // 分享的缩略图
  link: `${origin}${pathname}#/home`, // 分享的链接地址
}
