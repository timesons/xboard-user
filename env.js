// API地址
window.routerBase = 'https://gjtq.net/'
window.settings = {
  // 站点名称
  title: (window.location.host.search('dogvpn') != -1) ? "dogVPN" : (window.location.host.search('dogrun') != -1) ? "dodRun" : ((window.location.host.search('gjtq') != -1) ? "狗急跳墙" : ((window.location.host.search('dogssl') != -1)) ? "dogSSL" : ((window.location.host.search('hidemyself') != -1)) ? "HideMySelf" : ((window.location.host.search('hidemytail') != -1)) ? "HideMyTail" : "XXX"),
  // 站点描述
  description:  (window.location.host.search('gjtq') != -1) ? '狗急跳墙(oﾟ▽ﾟ)o欢呼~-gjtq' : 'https://' + window.location.host,
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', //可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  background_url: 'https://bing.img.run/rand_1366x768.php',
  // 站点LOGO
  logo: '/assets/images/dog-logo.svg',
}
