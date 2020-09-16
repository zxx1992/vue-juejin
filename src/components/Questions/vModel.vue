<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-15 17:19:24
 * @Description: 自定义一个v-model
-->
<template>
	<div class='custom-input'>
        <input :value="value" @input="onHandlechange"/>
    </div>
</template>

<script>
//组件

export default {
    name: "vModel",
    props: {
        value: {
            type: String,
            default: ""
        }
    },
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
		onHandlechange(e) {
			// console.log(e.target.value,"e")
			// 对外暴露一个input事件（触发父级元素的input事件） 
			this.$emit("input", e.target.value)
		}
	},
}
</script>
// points:
// 一个组件上的v-model默认是通过在组件上面定义一个名为value的props,同时对外暴露一个名为input的事件