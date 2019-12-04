export function isMobile() {
  return !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}

/**
 * 是qq内部打开
 * */
export function isQQ() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("qq") !== -1;
}

/**
 * 是否微信内部打开
 * */
export function isWechat() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") !== -1;
}
