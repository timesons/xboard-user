// API地址
window.routerBase = 'https://www.gjtq.net/';

// 辅助函数，用于确定站点名称
function getSiteName(host) {
  const hostToNameMap = {
    'dogvpn': '小狗VPN',
    'dogrun': '小狗快跑dogRun',
    'gjtq': '狗急跳墙GJTQ',
    'dogssl': '小狗加速dogSSL',
    'hidemytail': 'HideMyTail'
  };
  const name = hostToNameMap[host] || '默认站点';
  return name;
}

// 辅助函数，用于确定站点描述
function getSiteDescription(host) {
  const hostToDescriptionMap = {
    'gjtq': '狗急跳墙(oﾟ▽ﾟ)o欢呼~-GJTQ!',
    'dogrun': '小狗快跑(oﾟ▽ﾟ)o欢呼~-dogRun!',
    'dogssl': '小狗加速(oﾟ▽ﾟ)o欢呼~-dogSSL!',
    'dogvpn': '小狗VPN(oﾟ▽ﾟ)o欢呼~-dogVPN!'
  };
  const description = hostToDescriptionMap[host] || '这是一个默认的站点描述';
  return description;
}

// 从window.location.host中提取关键信息
const hostKey = window.location.host.split('.').reverse()[1]; // 假设子域名是我们需要的部分

window.settings = {
  // 站点名称
  title: getSiteName(hostKey),
  // 站点描述
  description: getSiteDescription(hostKey),
  assets_path: '/assets',
  // 主题色
  theme: {
    color: 'black', // 可选 default、blue、black、darkblue
  },
  // 版本号
  version: '0.1.1-dev',
  // 登陆背景
  background_url: 'https://bing.img.run/rand_1366x768.php',
  // 站点LOGO
  logo: '/assets/images/dog-logo.svg',
};