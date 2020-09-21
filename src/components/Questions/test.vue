<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-15 16:31:44
 * @Description: 
-->
<template>
	<div class='container-wrapper'>
		<span>{{userInfo.name}}</span>
		<span>{{userInfo.sex}}</span>
		<span v-if="userInfo.officialAccount">{{userInfo.officialAccount}}</span>
		<Button @click="handleAdd">添加</Button>
		<!-- list -->
		<ul>
			<li v-for="item in list" :key="item">
				{{ item }}
			</li>
		</ul>
        <!-- dateList -->
		<ul>
			<li v-for="item in dateList">
				{{ item.date | formatDate }}
			</li>
		</ul>
	</div>
</template>

<script>
//组件
// import { dayjs } from 'dayjs'
export default {
	name: "test",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		//这里存放数据
		return {
			userInfo: {
				name: "cc",
				sex: "男"
			},//对象
            list: ['张三', '李四'],//数组
            dateList: [
                {date:Date.now()}
            ]
		};
    },
    filters: {
        formatDate(value) {
            // 这里获取不到this,
            var dayjs = require('dayjs');
            return dayjs().format('YYYY-MM-DD')
        }
    },
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {

	},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {

	},
	activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
	//方法集合
	methods: {
		handleAdd() {
			// this.userInfo.officialAccount = '前端有的玩'
			this.userInfo = {
				...this.userInfo,
				officialAccount: '前端有的玩'
			}
			// this.$forceUpdate();

			this.list.splice(0, 1, 'zxx')
		}
	},
}
</script>
// points:
// 这里点击按钮，数据没有响应，是因为数据响应是通过使用object.definePrototype监听对象的每一个键的getter,setter方法实现的，但通过这种方法只能监听到已有属性，新增属性是无法监听的。
// 解决办法
// 1 提前在data中定义好
// 2 直接替换掉整个对象：比如  this.userInfo = {...this.userInfo, officialAccount: "前端有的玩"}
// 3 使用set: this.$set(this.userInfo, 'officialAccount', '前端有的玩')
// 4 使用$forceUpdate(不建议使用)

// 对于数组
// 数组的方法：push
// pop
// shift
// unshift
// splice
// sort
// reverse可以触发数据响应;vue通过劫持这些方法，对这些方法进行包装变异来实现的。

// 过滤器
// 过滤器的设计适用于文本转换，跟上下文没啥关系；如果需要上下文联系，可以考虑computed;

// 提高Vue渲染性能，了解一下Object.freeze
// 只是渲染数据，这时候我们就可以通过Object.freeze来优化性能
// 因为vue实例，data对象中的所有property加入到vue的响应式系统中，当这些property的值发生改变时，视图就会产生响应，即匹配更新为新的值，但是这个过程实际上是比较消耗性能的
// 所以对于对于一些有大量数据，但只是展示的界面来说，并不需要将property加入到响应式系统中，可以使用Objec.freeze