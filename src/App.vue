<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import storage from './storage'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{

    }
  },
  mounted(){
    //key 必须是字符串
    // storage.setItem('a',2);
    storage.setItem('user',{name:'li',age:3});
    // storage.clear('user');
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
