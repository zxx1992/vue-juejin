<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-18 10:40:25
 * @Description: dayj或者miment 代替moment；dayjs只有2kb,moment有100kb
-->
<template>
<div class='container-wrapper'>{{currentTime}}</div>
</template>

<script>
//组件

export default {
  name: "timeFormat",
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    currentTime: this.dayjs(new Date).format('YYYY-MM-DD')
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
//方法集合
methods: {

},
}
</script>
