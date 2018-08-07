/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 生存哈希值http，例如 http://localhost:8888/#/test
 * imgBaseUrl: 图片所在域名地址
 * _import: 只有在正式环境下才使用懒加载，解决了困扰多事的rebuild慢问题
 * POSITIVE_INTEGER: 检验正整数
 * PWD_RRGULAR：验证6-10位密码正则
 */

const API_PATH = '/proxy-api'
const baseUrl = ''
const imgBaseUrl = ''
const routerMode = 'hash'
const PHONEREG = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
const FIXPHONEREG = /^(0\d{2,3}-|\s)?\d{7,8}$/
const EMAILREG = /^\w+([-+.´]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const POSITIVE_INTEGER = /^[1-9]\d*$/
const PWD_RRGULAR = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
const FILE_ACCEPT = 'application/pdf, application/msword, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const STORAGE = sessionStorage
export {
  STORAGE,
  API_PATH,
  baseUrl,
  imgBaseUrl,
  routerMode,
  PHONEREG,
  FIXPHONEREG,
  EMAILREG,
  POSITIVE_INTEGER,
  PWD_RRGULAR,
  FILE_ACCEPT
}
