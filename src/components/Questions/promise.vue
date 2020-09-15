<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-09 10:45:21
 * @Description: 
-->
<template>
	<div>
		<Button @click="onPromise1">onPromise1</Button>
		<Button @click="onPromise2">onPromise2</Button>
		<Button @click="onPromise3">onPromise3</Button>
		<Button @click="onPromise4">onPromise4</Button>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		// 链式调用中，只有前一个 then 的回调执行完毕后，跟着的 then 中的回调才会被加入至微任务队列
		onPromise1() {
			Promise.resolve()
				.then(() => {
					console.log("then1");
					Promise.resolve().then(() => {
						console.log("then1-1");
					});
				})
				.then(() => {
					console.log("then2");
				});
		},
		// 每个链式调用的开端会首先依次进入微任务队列。
		onPromise2() {
			let p = Promise.resolve();
			p.then(() => {
				console.log("then1");
				Promise.resolve().then(() => {
					console.log("then-1");
				});
			}).then(() => {
				console.log("then-2");
			});

			p.then(() => {
				console.log("then3");
			});
		},
		// then 每次都会返回一个新的 Promise，此时的 p 已经不是 Promise.resolve() 生成的，而是最后一个 then 生成的，因此 then3 应该是在 then2 后打印出来的。
		// 顺便我们也可以把之前得出的结论优化为：同一个 Promise 的每个链式调用的开端会首先依次进入微任务队列。

		onPromise3() {
			let p = Promise.resolve().then(() => {
				console.log("then1");
				Promise.resolve().then(() => {
					console.log("then1-1");
				});
			}).then(() => {
				console.log("then2");
			});

			p.then(() => {
				console.log("then3");
			});
		},
		onPromise4() {
			Promise.resolve()
				.then(() => {
					console.log("then1");
					Promise.resolve()
						.then(() => {
							console.log("then1-1");
							return 1;
						})
						.then(() => {
							console.log("then1-2");
						});
				})
				.then(() => {
					console.log("then2");
				})
				.then(() => {
					console.log("then3");
				})
				.then(() => {
					console.log("then4");
				});
        },
        // 接下来我们把 return 1 修改一下，结果可就大不相同啦
		onPromise4() {
			Promise.resolve()
				.then(() => {
					console.log("then1");
					Promise.resolve()
						.then(() => {
							console.log("then1-1");
							return Promise.resolve();
						})
						.then(() => {
							console.log("then1-2");
						});
				})
				.then(() => {
					console.log("then2");
				})
				.then(() => {
					console.log("then3");
				})
				.then(() => {
					console.log("then4");
				});
		}
	}
}
</script>