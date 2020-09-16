<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-16 10:56:19
 * @Description: 动态组件，让页面渲染更灵活
-->
<template>
	<div>
		<component :is="roleComponent" v-if="roleComponent"></component>
	</div>
</template>

<script>
//组件
import Dialog from "./Dialog"
import string from "./string"
import texts from "./texts"
export default {
	name: "dynamic",
	//import引入的组件需要注入到对象中才能使用
	components: {
		Dialog,
		string,
		texts
	},
	data() {
		//这里存放数据
		return {
			roleComponents: {
				admin: Dialog,
				user: texts,
				hr: string
			},
			role: 'hr',//这里应该是动态获取的角色，
			roleComponent: undefined,
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {
		const { role, roleComponents } = this;
        this.roleComponent = this.roleComponents[role];
        console.log(this.roleComponent,"rolecom")
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
