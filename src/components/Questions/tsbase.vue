<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-28 16:03:48
 * @Description: ts基础语法
-->
<template>
	<div class='container-wrapper'>
		<Button @click="onTs">ts语法</Button>
	</div>
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
		onTs() {
			this.test(123)
		},
		// test(person: number) {
		// 	// 一些类型
		// 	let isDone: boolean = false;
		// 	let count: number = 10;
		// 	let name: string = "zxx";
		// 	let list: number[] = [1, 2, 3];
		// 	let tupleType: [string, boolean];
		// 	tupleType = ["zxx", true]
		// 	console.log(name, count, isDone, list, "list")
		// 	console.log(tupleType[0], tupleType[1])
		// 	console.log(greet(123))

		// 	// 类型断言（好比类型转换）
		// 	// 1 尖括号语法
		// 	// let someval1: any = "this is another string";
		// 	// let strlen1: number = (<string>someval1).length;
		// 	// 2 as 语法
		// 	let someval: any = "this is a string";
		// 	let strlen: number = (someval as string).length;
		// 	console.log(strlen, "len")
		// }
	},
}
</script>
