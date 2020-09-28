<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 11:25:14
 * @Description: 
-->
<template>
	<div>
		<div v-if="loadingList.length>0">
			<List>
				<ListItem v-for="(item, index) in loadingList" :key="index">
					<ListItemMeta :title="item.Q" :description="item.A"></ListItemMeta>
					<a :href="item.href" target="blank">{{item.href}}</a>
				</ListItem>
			</List>
		</div>
		<p>Vue响应式原理</p>
		<List>
			<ListItem v-for="(item, index) in vueList" :key="index">
				<ListItemMeta :title="item.Q" :description="item.A"></ListItemMeta>
			</ListItem>
		</List>
		<!-- <loading :visible="visible" :text="text" v-else></loading> -->

		<Button @click="onClick">test</Button>
	</div>
</template>
<script>
// 组件 
// import loading from "../Questions/loading"
export default {
	name: "texts",
	// components: {
	// 	loading
	// },
	data() {
		return {
			visible: true,
			text: "暂无数据",
			textList: [
				{
					Q: '介绍chrome 浏览器的几个版本',
					A:
						'Chrome 浏览器提供 4 种发布版本，即稳定版(Stable)、测试版(Beta)、开发者版(Dev)和金丝雀版(Canary)。'
				},
				{
					Q: '说一下 Http 缓存策略，有什么区别，分别解决了什么问题',
					href:
						'https://github.com/lgwebdream/FE-Interview/issues/14',
					A:
						'浏览器每次发起请求时，先在本地缓存中查找结果以及缓存标识，根据缓存标识来判断是否使用本地缓存。如果缓存有效，则使用本地缓存；否则，则向服务器发起请求并携带缓存标识。根据是否需向服务器发起HTTP请求，将缓存过程划分为两个部分：强制缓存和协商缓存，强缓优先于协商缓存。'
				},
				{
					Q: '介绍防抖节流原理、区别以及应用，并用JavaScript进行实现',
					href:
						'https://github.com/lgwebdream/FE-Interview/issues/15',
					A: ''
				},
				{
					Q: '前端安全、中间人攻击',
					href:
						'https://github.com/lgwebdream/FE-Interview/issues/16',
					A: ''
				},
				{
					Q: '伪类(pseudo-classes)',
					href:
						'',
					A: ':hover :active :visited :link :visited :first-child :focus :lang'
				},
				{
					Q: '伪元素(Pseudo-elements)',
					href:
						'',
					A: '::before ::after'
				}
			],
			vueList: [
				{
					Q: 'Vue 初始化',
					href:
						'',
					A: '::before ::after'
				},
				{
					Q: '模板渲染',
					href:
						'',
					A: '::before ::after'
				},
				{
					Q: '组件渲染',
					href:
						'',
					A: '::before ::after'
				},
				{
					Q: '从 Vue 初始化，到首次渲染生成 DOM 的流程',
					href:
						'',
					A: '::before ::after'
				},
				{
					Q: '从 Vue 数据修改，到页面更新 DOM 的流程。',
					href:
						'',
					A: '::before ::after'
				},
			],
			loadingList: []
		}
	},
	methods: {
		// 防抖
		// 原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
		// 适用场景：
		// 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
		// 搜索框联想场景：防止联想发送请求，只发送最后一次输入
		debounce(func, wait) {
			// console.log(func, wait,"222")
			let timeout = null;
			return function () {
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					func.apply(this, arguments)
				}, wait)
			}
		},
		throttle(fn, time) {
			let flag = true;
			return function () {
				if (!flag) return;
				flag = false;
				setTimeout(() => {
					fn.apply(this, arguments);
					flag = true;
				}, time);
			}

		},
		onClick() {
			// loading 加载框测试
			// this.loadingList = this.textList
			// this.visible = false;
			this.throttle(this.onTest, 5000)
		},
		onTest() {
			console.log('cccc')
		},
		// 节流
		// 原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
		// 适用场景
		// 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
		// 缩放场景：监控浏览器resize
	}
}
</script>