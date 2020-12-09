<template>
	<div>123</div>
</template>
<script>
export default {
	name: "niuke",
	data() {
		return {

		}
	},
	mounted() {
		this.onValidString()
	},
	methods: {
		// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
		// 解题思路：
		// 使用1个堆栈即可解决，依次遍历这个字符串，
		// 如果遇到是左括号就入栈到堆栈中，如果遇到的是右括号，则从堆栈中取出栈顶的第一个左括号，比对一下这个左括号和当前遇到的右括号是否匹配，如果不匹配这认为这整个字符串无效。
		// 如果能匹配，则OK，删除这个左括号和右括号，继续往后走，继续遍历字符串中剩下的字符，只要遇到左括号就入栈，只要遇到右括号就与将栈顶的左括号出栈与之比较。
		// 一直走到字符串结束，再来检查堆栈中是否还有元素，如果还有元素，则这个字符串同样无效，如果堆栈为空，则字符串有效。

		onValidString() {
			// let str = "()[]{}";
			// let str = "{[]}";
			let str = "([)]";
			let strSplit = str.split("");
			console.log(strSplit, "strSplit");
			// 方法1
			// let stack = [];
			// for (let i = 0; i < strSplit.length; i++) {
			// 	let node = strSplit[i];
			// 	if (node == "(" || node == "{" || node == "[") {
			// 		stack.push(node)
			// 	} else {
			// 		let temp = stack.pop();
			// 		if ((temp == "(" && node == ")") || (temp == "{" && node == "}") || (temp == "[" && node == "]")) {
			// 			continue
			// 		} else {
			// 			console.log("false")
			// 			// return false;
			// 		}
			// 	}
			// }

			// 方法2
			let stackMap = new Map();
			stackMap.set('(',')');
			stackMap.set('{','}');
			stackMap.set('[',']');
			console.log(stackMap,"stackMap")
			let stack = [];
			for (let val of strSplit) {
				if (val == "(" || val == "{" || val == "[") {
					stack.push(val)
				} else {
					let temp = stack.pop();
					if (stackMap.get(temp) != val) {
						console.log("false2")
						return false
					}
				}
			}
		},
		maxVal(a, b, c) {
			let maxs = [];
			for (let j = 0; j < a; j++) {
				let arrT = b.slice(j, j + c);
				let max = 0;
				for (let i = 0; i < arrT.length; i++) {
					max += arrT[i];
				}
				maxs.push(max)
			}
			let maxSum = Math.max(...maxs);
			console.log(maxSum, "maxSum")

		},
		kaopuCar(car) {
			let carArr = car.toString().split("");
			let newCar = []
			for (let val of carArr) {
				if (val == "5") {
					val = Number(val) - 1
				}
				newCar.push(val)
			}
			console.log(newCar.join(""), "eee")
		},
		mathGame(b) {
			if (b.length == 1) {
				console.log(b[0])
			} else if (b.length == 0) {
				console.log(0)
			} else {
				let max1 = Math.max(...b);
				for (let index in b) {
					if (b[index] == max1) {
						b.splice(index, 1);
					}
				}
				let max2 = Math.max(...b);
				for (let index in b) {
					if (b[index] == max2) {
						b.splice(index, 1);
					}
				}
				let cha;
				if (max2 > max1) {
					cha = max2 - max1;
				} else {
					cha = max1 - max2;
				}
				cha != 0 && b.push(cha);
				this.mathGame(b);
			}
		},
		typesComputed(arr) {
			let c = arr[0];
			let b = arr[1];
			let newarr = arr.splice(0, 2);
			console.log(arr, newarr);
			let newArr = [];
			for (var val of arr) {
				if (val % b < c) {
					newArr.push(val % b)
				}
			}
			console.log(newArr, "arr")
		},
		// 数组去重法2
		unique() {
			let arr = [11, 22, 3, 4, 5, 6, 22, 11, 3]
			let result = [];
			let obj = {};
			if (arr.length > 0) {
				for (let i = 0; i < arr.length; i++) {
					let item = arr[i];
					if (!obj[item]) {
						result.push(item);
						obj[item] = 1;
					}
					console.log(obj, "obj")
				}
			}
			console.log(result, "result")
		},
		mingmingRandom(count, number) {
			let arr = [];
			for (let i = 0; i < count; i++) {
				let element = number;
				arr[element] = 1;
			}
			console.log(arr, "arr")
			for (let [index, elem] of arr.entries()) {
				console.log(index, elem);
			}
		},
		isNum(num) {
			if ((/(^[1-9]\d*$)/.test(num))) {

			}
		},
		// 最大公约数，最小公倍数 :辗转相除法
		getGongyueshu(m, n) {
			if (n == 0) {
				return m;
			};
			return this.getGongyueshu(n, m % n);
		},
		miwenjiexi() {
			let obj = {
				0: ["0"],
				1: ["1"],
				2: ["a", "a", "a"],
				3: ["a", "a", "a"],
				4: ["a", "a", "a"],
				5: ["0"],
				6: ["0"],
				7: ["0"],
				8: ["0"],
				9: ["0"],
			}
		}
	}
}
</script>

// point: 算法
// 1 数组和链表（）
// 2 堆栈（桶）
// 3 队列（排队买饭）