<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import storage from './storage'
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
    this.axios.get('/user/logout').then(
      (res) => {
        this.result = res;
      }
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
