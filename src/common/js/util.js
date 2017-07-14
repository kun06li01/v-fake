/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  // 包含?或者&,后面跟着非?或者& 一个或者多个,中间用=连接,等号后面跟着非?或者&,
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  let obj = {};
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substr(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let value = decodeURIComponent(tempArr[1]);
      obj[key] = value;
    });
  }
  return obj;
}
