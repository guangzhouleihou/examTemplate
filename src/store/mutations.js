import TYPE from './mutation-types'
import { STORAGE } from '../config/env'
let { SET_TOKEN, SET_HAS_LOGIN, SET_USER_INFO, LOGOUT } = {...TYPE}
export default {
  // 设置token
  [SET_TOKEN] (state, payload) {
    state.token = payload
    // STORAGE.setItem('token', payload)
  },
  // 设置登录态
  [SET_HAS_LOGIN] (state, payload) {
    state.hasLogin = payload
  },
  // 设置用户信息
  [SET_USER_INFO] (state, payload) {
    state.userInfo = payload
  },
  // 退出登录
  [LOGOUT] (state) {
    // 清除token
    state.token = ''
    STORAGE.removeItem('token')
    // 清除登录态
    state.hasLogin = false
    // 清除用户信息
    state.userInfo = {}
  }
}
