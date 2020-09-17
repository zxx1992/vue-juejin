<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-17 10:58:41
 * @Description: 小项目还用Vuex?用Vue.observable手写一个状态管理吧
-->
<template>
	<div class='container-wrapper'>
		{{userInfo.name}}
	</div>
</template>

<script>
//组件
import { store, mutations } from '../../store/store'
export default {
	name: "observalbeVue",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {

		};
	},
	//监听属性 类似于data概念
	computed: {
		userInfo() {
			return store.userInfo
		}
	},
	//监控data中的数据变化
	watch: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {
		mutations.setUserInfo({
			name: '子君'
		})
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
// points: 
// 在前端项目中，有许多数据需要在各个组件之间进行传递共享，这时候就需要有一个状态管理工具，一般情况下，我们都会使用Vuex，
// 但对于小型项目来说，就像Vuex官网所说：“如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex”。
// 这时候我们就可以使用Vue2.6提供的新API Vue.observable手动打造一个Vuex
// observice: 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
// 返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景
