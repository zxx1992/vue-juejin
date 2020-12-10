<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-11-17 10:31:14
 * @Description: 
-->
<template>
	<div class="container-1">
		<div class="container">
			<div class="item item1">1</div>
			<div class="item item2">孙华龙 MD，PhD</div>
			<div class="item item3">3</div>
			<div class="item item4">科林利康 执行副总裁，董事/合伙人美达临床数据 总经理</div>
		</div>
		<Button @click="onClick" v-show="false">点击</Button>
		{{author}}
	</div>
</template>
<script>
import {Person,myCall} from "../../common/constant"
export default {
	props: {
		author: Person
	},
	name: "css",
	data() {
		return {

		}
	},
	methods: {
		onClick() {
			console.log(Math.max.myCall(this, 1, 2, 3, 4))
		}
	}
}
</script>
<style  scoped>
.container {
	display: flex;
	/* width: 500px; */
	/* grid-gap: 20px 20px;
	display: grid;
	grid-template-rows: 1fr 3fr;
	grid-template-columns: 1fr 3fr; */
	/* grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 50px 50px; */
}
.item {
	border: 1px solid #e5e4e9;
	text-align: center;
}
.item1 {
	flex: 1 2 auto;
	background: red;
}
.item2 {
	flex: 2;
	background: rgb(0, 225, 255);
}
.item3 {
	flex: 3;
	background: rgb(119, 0, 255);
}
.item4 {
	background: rgb(225, 0, 255);
}
.item5 {
	background: rgb(119, 0, 255);
}
.item6 {
	background: rgb(255, 153, 0);
}
.item7 {
	background: rgb(115, 255, 0);
}
.item8 {
	background: rgb(0, 255, 179);
}
.item9 {
	background: rgb(0, 162, 255);
}
</style>
// points: 
// flex-grow: 0; // 增长比例，子项合计宽度小于容器宽度，需要根据每个子项设置的此属性比例对剩下的长度进行分配
// flex-shrink: 1; // 回缩比例，子项合计宽度大于容器宽度，需要根据每个子项设置的此属性比例对多出的长度进行分配
// flex-basis: auto; // 起始大小，设置了宽度跟宽度走，没设置宽度跟内容实际宽度走


// 重绘和重排
// 重绘：颜色，背景色等一些属性发生改变
// 重排（回流）：添加，删除可见的dom,元素位置改变，元素尺寸改变（margin,padding,width,height）,浏览器窗口发生改变，文字大小， 