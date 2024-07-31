// API地址
window.routerBase = 'https://airport404.com/'
window.settings = {
  // 站点名称
  title: (window.location.host.search('404') != -1) ? "隐身机场" : "狗急跳墙",
  // 站点描述
  description: 'https://' + window.location.host,
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', //可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  background_url: (window.location.host.search('404') != -1) ? './assets/images/404_error_checking_FI.webp' : './assets/images/background.svg',
  // 站点LOGO
  logo: '',
}
