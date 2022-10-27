<!--
 * @Date: 2022-09-25 23:44:02
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-05 15:22:45
 * @FilePath: \vue3_test\src\views\AboutView.vue
-->
<template>
  <div>
    <h1>这里演示了一个点击鼠标后展示鼠标坐标的效果</h1>
    <h2>鼠标的横向坐标为: {{ point.pointX }}</h2>
    <h2>鼠标的纵向坐标为: {{ point.pointY }}</h2>
    <provideAndinjectTestVue></provideAndinjectTestVue>
  </div>
</template>
<script>
import provideAndinjectTestVue from "./provideAndinjectTest.vue";
import getAndShowPoint from "@/hook/point";
export default {
  components: {
    provideAndinjectTestVue,
  },
  setup() {
    let point = getAndShowPoint();
    return {
      point,
    };
  },
};
</script>