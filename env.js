// 定义域名映射关系
const DOMAIN_BRANDS = {
  'dogvpn': 'DogVPN',
  'dogrun': 'DogRun',
  'gjtq': '狗急跳墙GJTQ',
  'dogssl': 'DogSSL',
  'hidemytail': 'HideMyTail',
  'grassvpn': 'GrassVPN'
};

// 获取当前域名品牌
const currentHost = window.location.host;
const currentBrand = Object.entries(DOMAIN_BRANDS)
  .find(([key]) => currentHost.includes(key))?.[1] || '狗急跳墙VPN';

// 获取描述文案
const getDescription = (brand) => {
  if (brand === '狗急跳墙GJTQ') return '狗急跳墙VPN(oﾟ▽ﾟ)o欢呼~-GJTQ!';
  return `Unblock All Websites With ${brand}!!!`;
};

// API地址
window.routerBase = 'https://airport404.com/';

window.settings = {
  title: currentBrand,
  description: getDescription(currentBrand),
  assets_path: '/assets',
  theme: {
    color: 'black',
  },
  version: '0.1.1-dev',
  background_url: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/gjtq-bg.gif',
  logo: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/gjtq-logo.png',
  favicon: 'https://pub-7b2c70e035c9410197966e5e06a22b02.r2.dev/favicon.ico',
  copyright: 'Copyright 2017-2024 All Rights Reserved'
};