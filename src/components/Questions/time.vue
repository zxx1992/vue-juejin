<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 09:56:06
 * @Description: 定时器
-->
<template>
	<div>{{clock}}</div>
</template>
<script>
export default {
	data() {
		return {
			clock: 0,
		}
	},
	methods: {
		get() {
            this.clock += 1;
		}
	},
	mounted() {
		this.mySetInterVal = setInterval(() => {this.get()}, 1000)
	},
	// 定时器摧毁
	beforeDestroy() {
		clearInterval(this.mySetInterVal)
		this.mySetInterVal = null
	}
}
</script>