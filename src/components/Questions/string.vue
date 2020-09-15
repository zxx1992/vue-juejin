<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 11:00:20
 * @Description: 
-->
<template>
	<div>
		<Button @click="onHandleStr">将二维数组转为一维</Button>
		{{string}}---{{repeatNum}}---{{repeatNum2}}
	</div>
</template>
<script>
export default {
	data() {
		return {
			string: '1233568993215468',
			repeatNum: 0,
			repeatNum2: 0,
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
            console.log(newaRR, 'newaRR')
            // 去重 
            this.repeatNum2 = [...new Set(this.string)].length;
		}
	}
}
</script>