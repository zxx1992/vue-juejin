<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-18 09:22:12
 * @Description: 函数式组件
-->
<template functional>
	<img :src="props.avatar ? props.avatar : 'default-avatar.png'" />
</template>

<script>
//组件

export default {
	name: "component-name",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {

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
	activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
	//方法集合
	methods: {

	},
}
</script>
// point: 
// 你的业务组件是一个纯展示且不需要有响应式数据状态的处理的，那函数式组件会是一个非常好的选择

// 函数式组件的props可以不用显示声明，所以没有在props里面声明的属性都会被自动隐式解析为prop,
// 而普通组件所有未声明的属性都被解析到$attrs里面，并自动挂载到组件根元素上面(可以通过inheritAttrs属性禁止)