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
	</div>
</template>
<script>
import { store } from '../../store/store'

export default {
	name: "string",
	data() {
		return {
			string: '1233568993215468',
			repeatNum: 0,
			repeatNum2: 0,
		}
	},
	mounted() {
		// this.$emit("childMounted")
	},
	computed: {
		userInfo() {
			return store.userInfo
		}
	},
	methods: {
		onHandleStr() {
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
            // 去重 
			this.repeatNum2 = [...new Set(this.string)].length;
		}
	}
}
</script>