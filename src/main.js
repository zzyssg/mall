import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'

const mock = true;
if(mock){
  // 引入模块
  require('./mock/api/mock');
}

axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    let msg = res.data;
    alert('mag: ' + msg)
  }else if(res.status == 10){
    // 跳转至未登录
    window.location.href = '/#/login'
  }else{
    alert("error")
  }
})


//注册、挂载插件到Vue实例
Vue.use(VueAxios,axios)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
