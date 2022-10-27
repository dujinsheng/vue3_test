<template>
  <h1>{{ msg }}</h1>
  <h2>展示姓名：{{ name }}</h2>
  <h2>展示年龄：{{age}}</h2>
  <h3>展示薪水：{{job.j1.salary}}</h3>
</template>

<script>
  import {reactive, toRefs} from 'vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 28,
        },
      },
    });
    return {
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>