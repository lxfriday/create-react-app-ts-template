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

export const shareCfg = {
  title: '小爱同学限量徽章限时抢',
  desc: '小爱同学三周年纪念，探索不止，感恩有你',
  iconURL: 'https://cdn.cnbj1.fds.api.mi-img.com/aife/ai-xiaoai-3-years-fe/logo.png', // 分享的缩略图
  link: `${origin}${pathname}#/home`, // 分享的链接地址
}
