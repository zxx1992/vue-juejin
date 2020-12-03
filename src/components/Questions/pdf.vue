<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-03 15:45:12
 * @Description: 
-->
<template>
	<div ref="printContent" class="magnifer">
		<Pdf :src="src"/>
	</div>
</template>
<script>
import Pdf from 'vue-pdf'
export default {
	components: {
		Pdf
	},
	name: "pdf",
	data() {
		return {
			numPages: "",
			src: "",
			fileUrl: `${window.location.origin}/xiev2.pdf`,
		}
	},
	methods: {
		onShow() {
			this.src = Pdf.createLoadingTask(this.fileUrl)
			// this.src.promise.then(pdf => {
			// 	this.numPages = pdf.numPages
			// })
		}
	}
}
</script>
//point: 
// github: 有api
// 设置加载动画，大概200M就会加载20s
