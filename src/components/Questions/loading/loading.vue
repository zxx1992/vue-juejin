<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-17 13:56:55
 * @Description: loading
-->
<template>
	<div v-show="visible">
		<Spin>
			<Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
			<p class="custom-loading-text">{{text}}</p>
		</Spin>
	</div>
</template>
<script>
export default {
	name: "loading",
	data() {
		return {
			text: '',
			visible: false
		}
	}
	// props: {
	// 	visible: {
	// 		type: Boolean,
	// 		default: false
	// 	},
	// 	text: {
	// 		type: String,
	// 		default: ''
	// 	}
	// },
}
</script>
<style>
.demo-spin-icon-load {
	animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
	from {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.demo-spin-col {
	height: 100px;
	position: relative;
	border: 1px solid #eee;
}
</style>