<!--
 * @Date: 2022-09-25 23:44:02
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-05 16:03:05
 * @FilePath: \vue3_test\src\App.vue
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
  </nav>
  <div>
    <h1>这个人的工作为：{{oneself.job}}</h1>
    <h1>这个人的工资为:{{oneself.salary}}</h1>
    <button @click="changeOneselfInfomation">点击此处为这个人换名字，为这个人，切换工资</button>
  </div>
  <router-view/>
</template>

<script>
  import {ref, reactive, provide} from 'vue'
  export default {
    setup() {
      let oneself = ref({
        job: 'ui工程师',
        salary: '28'
      })
      const changeOneselfInfomation = function() {
        oneself.value.job = '前端开发工程师',
        oneself.value.salary = '32'
      }
      console.log(oneself)
      const information = reactive({
        carline: ['奔驰', '宝马', '奥迪'],
        price: [99, 99, 99]
      })
      provide('information', information)
      return {
        information,
        oneself,
        changeOneselfInfomation
      }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
