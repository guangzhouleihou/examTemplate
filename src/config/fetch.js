import axios from 'axios'
import router from '@/router'
import qs from 'qs'
import store from '@/store'

// http request 拦截器
axios.interceptors.request.use((config) => {
  // token放在请求头
  if (store.state.token) {
    config.headers.token = store.state.token
  }

  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  // _.toast('错误的传参', 'fail')
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  // console.dir('router' + router)
  if (response.data.code !== 'undefined') {
    switch (response.data.code) {
      case '200':
        break
      case '401':
      case '4010':
      case '4011':
      case '4012':
        store.commit('LOGOUT')
        console.log(router)
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break
    }
    return response
  } else {
    return response
  }
}, error => {
  // console.log('error.response.......')
  if (error.response) {
    switch (error.response.data.code) {
      case '401':
      case '4010':
      case '4011':
      case '4012':
        // 返回 401 清除token信息并跳转到登录页面
        store.commit('LOGOUT')
        router.replace({
          path: 'login',
          query: {redirect: this.$router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error.response.data) // 返回接口返回的错误信息
})

// fetch 类似于 Ajax
export default function fetch (url, params, method) {
  let requestConfig = {
    method: method || 'GET',
    url: url
  }

  if (requestConfig.method === 'GET') {
    requestConfig.params = params
  } else {
    requestConfig.data = params
  }

  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
