// API地址
window.routerBase = 'https://airport404.com/'
window.settings = {
  // 站点名称
  title: (window.location.host.search('ysjc') != -1) ? "隐身机场" : ((window.location.host.search('gjtq') != -1) ? "狗急跳墙" : ((window.location.host.search('tizi100') != -1)) ? "梯子100" : ((window.location.host.search('fq100') != -1)) ? "翻墙100" : ((window.location.host.search('jiasu001') != -1)) ? "加速001" : ((window.location.host.search('jiasu100') != -1)) ? "加速100" : ((window.location.host.search('kxsw100') != -1)) ? "科学上网100" :  ((window.location.host.search('hidemyself') != -1)) ? "HideMySelf" : ((window.location.host.search('hidemytail') != -1)) ? "HideMyTail" : ((window.location.host.search('hidemyass') != -1)) ? "HideMyAss" : "XXX"),
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
  background_url: 'https://bing.img.run/rand_1366x768.php',
  // 站点LOGO
  logo: '',
}
