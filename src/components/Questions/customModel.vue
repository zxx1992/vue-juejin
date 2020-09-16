<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-16 10:31:58
 * @Description: 自定义属性与事件
-->
<template>
	<div :class="['custom-switch', active && 'custom-switch-active']" @click="onHandleClick">
		<span class="custom-switch-core"></span>
	</div>
</template>

<script>
//组件
export default {
    name: "customModel",
    // 通过model可以自定义属性名和事件名
    model: {
        event: "change",
        prop: "active"
    },
    props: {
        // 定义一个名为active的属性 
        active: {
            type: Boolean,
            default: false
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
        onHandleClick() {
            this.$emit("change", !this.active)
        }
	},
}
</script>

// point: 
// 自定义属性与事件: model