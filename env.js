// API地址
window.routerBase = 'https://api.gjtq.net/';

// 预先检查host中是否包含特定字符串
const isDogvpn = window.location.host.includes('dogvpn');
const isDogrun = window.location.host.includes('dogrun');
const isGjtq = window.location.host.includes('gjtq');
const isDogssl = window.location.host.includes('dogssl');
const isHidemytail = window.location.host.includes('hidemytail');

window.settings = {
  // 站点名称
  title: isDogvpn ? "DogVPN" : isDogrun ? "DogRun" : isGjtq ? "狗急跳墙GJTQ" : isDogssl ? "DogSSL" : isHidemytail ? "HideMyTail" : "默认名称",
  // 站点描述
  description: isGjtq ? '狗急跳墙(oﾟ▽ﾟ)o欢呼~-GJTQ!' : isDogrun ? 'Unblock all websites with DogRun' : isDogssl ? 'Unblock all websites with DogSSL' : isDogvpn ? 'Unblock all websites with DogVPN' : isHidemytail ? 'HideMyTail::Unblock Websites with HMT' : '默认描述',
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', // 可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  background_url: '/assets/images/world-vertical-circle-light.svg',
  // 站点LOGO
  logo: '/assets/images/dog-logo.svg',
  favicon: '/assets/images/favicon.ico',
  copyright:'Copyright 2017-2024 All Rights Reserved'
};