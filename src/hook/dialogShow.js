/*
 * @Date: 2022-10-05 16:05:53
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-05 16:57:00
 * @FilePath: \vue3_test\src\hook\dialogShow.js
 */
import { ref } from 'vue'
export default function () {
    let isShow = ref(false);
    function change() {
        isShow.value = !isShow.value;
        console.log(isShow)
    }
    return {
        isShow,
        change
    }
}