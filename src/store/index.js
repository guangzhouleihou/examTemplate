import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import { STORAGE } from '../config/env'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false, // 登录态
    token: STORAGE.token, // token
    userInfo: {} // 用户信息
  },
  mutations,
  actions
})
