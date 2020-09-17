<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-16 14:18:15
 * @Description: hookEvent
-->
<template>
	<div class='hook-event'>
        <string @hook:mounted="onHandleMounted"></string>
	</div>
</template>

<script>
//组件
import string from "./string"
export default {
	name: "hookEvent",
	//import引入的组件需要注入到对象中才能使用
	components: {
        string
    },
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
		window.addEventListener('resize', this.onHandleClick)
		// 大佬们的做法
		// 通过hook监听组件销毁钩子函数，并取消监听事件
		// $once监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。
		this.$once('hook:beforeDestroy', () => {
			window.removeEventListener('resize', this.onHandleClick)
		})

	},
	activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
	//方法集合
	methods: {
		onHandleClick() {
			console.log("做一些操作")
        },
        onHandleMounted() {
            console.log("string组件的updated钩子函数被触发")
        }
	},
	// 一般销毁事件的方法 
	// beforeDestroy() {
	// 	window.removeEventListener('resize', this.onHandleClick)
	// },
}
</script>
// points：
// 1 内部监听生命周期函数
// 在vue组件中，可以用$on, $once去监听所有的生命周期钩子函数，
// 比如：监听组件的updated钩子函数可以写成
// this.$on('hook: updated', () => {})
// 应用场景：需要销毁的函数（例如：定时器；监听的一些方法）
// 2 外部监听生命周期