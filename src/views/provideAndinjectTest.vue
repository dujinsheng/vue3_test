<!--
 * @Date: 2022-10-05 15:15:41
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-05 17:05:12
 * @FilePath: \vue3_test\src\views\provideAndinjectTest.vue
-->
<template>
  <div style="margin-top: 50px">
    这里显示用inject接收到的祖组件中的数据{{ data }}
  </div>
  <button @click="changeDialogTrigger">点击此按钮出现手写的弹窗效果</button>
  <teleport to="body">
    <div v-if="Show" class="mask">
      <div class="dialog">
        <h1>这是一个对话框</h1>
        <h1>这个对话框应该出现在屏幕的最中央</h1>
        <br />
        <br />
        <br />
        <button @click="changeDialogTrigger">这是关闭这个对话框的按钮</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { inject } from "vue";
import dialogShow from "@/hook/dialogShow";
export default {
  name: "proviedeAndInjectTest",
  setup() {
    let data = inject("information");
    let obj = dialogShow()
    let Show = obj.isShow;
    let changeDialogTrigger = obj.change
    return {
      data,
      Show,
      changeDialogTrigger,
    };
  },
};
</script>

<style scoped>
.mask {
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.dialog {
  height: 300px;
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
}
</style>