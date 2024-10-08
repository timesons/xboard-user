// API地址
window.routerBase = 'https://airport404.com/';

// 预先检查host中是否包含特定字符串
const isDogvpn = window.location.host.includes('dogvpn');
const isDogrun = window.location.host.includes('dogrun');
const isGjtq = window.location.host.includes('gjtq');
const isDogssl = window.location.host.includes('dogssl');
const isHidemytail = window.location.host.includes('hidemytail');

window.settings = {
  // 站点名称
  title: isDogvpn ? "DogVPN" : isDogrun ? "DogRun" : isGjtq ? "狗急跳墙GJTQ" : isDogssl ? "DogSSL" : isHidemytail ? "HideMyTail" : "狗急跳墙VPN",
  // 站点描述
  description: isGjtq ? '狗急跳墙VPN(oﾟ▽ﾟ)o欢呼~-GJTQ!' : isDogrun ? 'Unblock All Websites With DogRun!!!' : isDogssl ? 'Unblock All Websites With DogSSL!!!' : isDogvpn ? 'Unblock All Websites With DogVPN!!!' : isHidemytail ? 'Unblock All Websites With HideMyTail!!!' : 'Unblock all websites with DogVPN!!!',
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', // 可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  // background_url: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/world-vertical-circle-light.svg',
  background_url:'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/gjtq-bg.gif',
  // 站点LOGO
  logo: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/gjtq-logo.png',
  favicon: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/favicon.ico',
  copyright:'Copyright 2017-2024 All Rights Reserved'
};