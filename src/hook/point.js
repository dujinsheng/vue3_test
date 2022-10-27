/*
 * @Date: 2022-10-03 17:47:49
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-03 17:48:27
 * @FilePath: \vue3_test\src\hook\point.js
 */
import { reactive, onMounted, onUnmounted } from 'vue'
export default function () {
    let point = reactive({
        pointX: 0,
        pointY: 0,
    });
    function getAndSetPointXY(event) {
        point.pointX = event.pageX;
        point.pointY = event.pageY;
        console.log(point.pointX, point.pointY);
    }
    onMounted(() => {
        console.log("当前页面已经挂载了");
        window.addEventListener("click", getAndSetPointXY);
    });
    onUnmounted(() => {
        window.removeEventListener("click", getAndSetPointXY);
        alert("当前页面已经卸载了");
    });
    return point
}