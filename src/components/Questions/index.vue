<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 10:35:11
 * @Description: 
-->
<template>
	<div>
		<timeVue></timeVue>
		<arr></arr>
		<string></string>
		<texts></texts>
		<!-- <Promise></Promise> -->
		<Dialog></Dialog>
		<propCom :name="name" :age="age"></PropCom>
		<vModel v-model="text"></vModel>
		<customModel :active="true" @change="change"></customModel>
		<dynamic></dynamic>	
		<hookEvent></hookEvent>	
		<observalbeVue></observalbeVue>
		<timeFormat></timeFormat>
	</div>
</template>
<script>
// import Time from './time'
// import Arr from './arr'
// import String from './string'
// import Texts from './texts'
// import Promise from './promise'
// import PropCom from './propCom'
export default {
	name:"index",
	// components: {
	// 	Time,
	// 	Arr,
	// 	String,
	// 	Texts,
	// 	Promise,
	// 	PropCom
	// },
	data() {
		return {
			name: "我是父的name",
			age: "我是父的age",
			text:"",
			text2:"",
		}
	},
	methods: {
		change() {
			console.log("ccc")
		}
	}
}
</script>
// Points:
//inheritAttrs： 默认情况下vue会把父作用域的不被认作 props 的特性绑定 且作为普通的 HTML 特性应用在子组件的根元素上，如果不希望作用则使用inheritAttrs:false。
//$attrs： 父子孙多级传参，孙需要父的元素，可以不用每级props,用$attrs获取。