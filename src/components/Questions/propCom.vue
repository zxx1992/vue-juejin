<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-15 13:14:50
 * @Description: 
-->
<template>
<div>
    {{name}}
	<Dialog v-bind="$attrs" :name="name">
		<!-- 应用场景：子组件中元素，显示在不同父组件中 -->
		<div slot="content" slot-scope="scope">
			<li v-for="(user, index) in scope.users" :key="index">{{user.name}}</li>
		</div>
	</Dialog>
</div>
</template>
<script>
import Dialog from "./Dialog"
export default {
    props: {
        name: String,
    },
	components: {
		Dialog
	}
}
</script>