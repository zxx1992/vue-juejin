<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-14 09:45:24
 * @Description: 
-->
<template>
	<div>
		{{granSun}}{{name}}
		<el-dialog title="提示" :visible.sync="visible" width="30%" v-on="$listeners">
			<!-- <span>内容区域</span> -->
			<!--内容区域的默认插槽-->
			<slot name="content" :users="users" :sexs="sexs"></slot>
			<span slot="footer">
				<el-button @click="onCancel">取消</el-button>
				<el-button type="primary" @click="onConfirm">确定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
export default {
	name: "Dialog",
	props: {
		name: String
	},
	data() {
		return {
			visible: true,
			users: [
				{ name: "1", age: 12 },
				{ name: "2", age: 13 },
				{ name: "3", age: 14 },
			],
			sexs: [0, 1, 2],
			granSun: ""
		}
	},
	methods: {
		onCancel() {

		},
		onConfirm() {

		}
	},
	created() {
		this.granSun = this.$attrs.age
		console.log(this.$attrs, "attrs")
	}
}
</script>