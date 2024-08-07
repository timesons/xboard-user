// API地址
window.routerBase = 'https://www.gjtq.net/'
window.settings = {
  // 站点名称
  title: (window.location.host.search('dogvpn') != -1) ? "小狗VPN" : (window.location.host.search('dogrun') != -1) ? "小狗快跑" : ((window.location.host.search('gjtq') != -1) ? "狗急跳墙" : ((window.location.host.search('dogssl') != -1)) ? "小狗加速": ((window.location.host.search('hidemytail') != -1)) ? "HideMyTail" : "XXX"),
  // 站点描述
  description:  (window.location.host.search('gjtq') != -1) ? '狗急跳墙(oﾟ▽ﾟ)o欢呼~-GJTQ!' : (window.location.host.search('dogrun') != -1) ? '小狗快跑(oﾟ▽ﾟ)o欢呼~-dogRun!' : (window.location.host.search('dogssl') != -1) ? '小狗加速(oﾟ▽ﾟ)o欢呼~-dogSSL!'  : (window.location.host.search('dogvpn') != -1) ? '小狗VPN(oﾟ▽ﾟ)o欢呼~-dogVPN!' : 'https://' + window.location.host,
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
