// API地址
window.routerBase = 'https://new.gjtq.net/'
window.settings = {
  // 站点名称
  title: (window.location.host.search('404') != -1) ? console.log("Airport404") : console.log("GJTQ"),
  // 站点描述
  description: window.location.host,
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', //可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  background_url: './assets/images/background.svg',
  // 站点LOGO
  logo: '',
}
