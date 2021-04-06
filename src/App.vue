<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import storage from './storage'
// @import './assert/scss/reset.scss'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      result : {}
    }
  },
  mounted(){
    // 发送请求
    this.axios.get('/user/login').then(
      res => {
        this.result = res;
      }
    )
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
