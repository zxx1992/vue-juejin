<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-11-24 09:53:00
 * @Description: github面试题目
-->
<template>
	<div>
		{{minVal}}
		<Button @click="onGetIndex">GITHUB</Button>
		<checkboxInput v-model="githubVal"></checkboxInput>
	</div>
</template>
<script>
import checkboxInput from './checkboxInput.vue'
export default {
	components: {
		checkboxInput
	},
	name: "github",
	data() {
		this.arr = [10, 21, 0, -7, 35, 7, 9, 23, 18]
		return {
            minVal: null,
			result: null,
			githubVal: "githubVal"
		}
	},
	methods: {
		onFocus() {
			console.log("github")
		},
		onGetIndex() {
			this.githubVal = "githubVal-edit"
			// 方法一
            this.minVal = this.arr[0];
            this.result = 0;
			for (let i = 0; i < this.arr.length; i++) {
                let curVal = this.arr[i];
                if (curVal > 0 && curVal < this.minVal) {
                    this.minVal = curVal;
                    this.result = i;
                }
			}
			console.log(this.minVal,this.result, "val")
			// for (let [index, val] of this.arr.entries()) {
			// 	if (val == this.minVal) {
			// 		console.log(index, "index")
			// 	}
            // }
            
			// 方法二

			// let min = this.arr[0];//
			// let result = 0;
			// this.arr.map((item, index) => {
			// 	if (item > 0 && item < min) {
			// 		min = item;
			// 		result = index;
			// 	}
			// });
			// console.log(result, "resul")
			// return result;
        },
        
	}
}
</script>
// point: 
//  v-model的使用：
// 1 父组件a引用了子组件b
// 2 a 和b对数据data都会操作
// 原理：
// 相当于 :value="value"  @input="inputValue = argument[0]"