<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 11:00:20
 * @Description: 
-->
<template>
	<div>
		<Button @click="onHandleStr">将二维数组转为一维</Button>
		{{string}}---{{repeatNum}}---{{repeatNum2}}
		{{userInfo.name}}
		<functionVue :avatar="avatar"></functionVue>
		<css :author="author" v-show="false"></css>
		{{curModel}}
		<checkboxInput v-model="curModel" v-on:focus.native="onFocus" @hook:mounted="doSomething"></checkboxInput>
	</div>
</template>
<script>

import { store } from '../../store/store'

import functionVue from './functionVue.vue'
import css from './css.vue'
import checkboxInput from './checkboxInput.vue'
import { Person } from "../../common/constant"
export default {
	components: {
		functionVue,
		css,
		checkboxInput,
	},
	name: "string",
	data() {
		return {
			curModel: "",
			author: new Person("xx", "xz"),
			string: '1233568993215468',
			repeatNum: 0,
			repeatNum2: 0,
			avatar: require('../../assets/avator.png')
		}
	},
	mounted() {
		console.log("父mounted")
	},
	created() {
		console.log("父created")
	},
	computed: {
		userInfo() {
			return store.userInfo
		}
	},
	methods: {
		doSomething() {
			console.log('父组件监听到 mounted 钩子函数 ...');
		},
		onFocus() {
			console.log("string")
		},
		onHandleStr() {
			// 去重 1
			let arr = this.string.split('')
			let newaRR = []
			for (let i = 0; i < arr.length; i++) {
				if (newaRR.includes(arr[i])) {
					break;
				} else {
					newaRR.push(arr[i])
				}
			}
			this.repeatNum = newaRR.length
			// 去重 2
			this.repeatNum2 = [...new Set(this.string)].length;
		}
	}
}
</script>

