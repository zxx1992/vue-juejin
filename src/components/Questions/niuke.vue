<template>
    <div>123</div>
</template>
<script>
export default {
	name: "niuke",
    methods: {
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
		onCheck() {
			console.log(luckysheet.getluckysheetfile(), "luckysheet.getAllSheets()[0]")
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
			console.log(arr,"arr")
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
			if (n == 0){
				return m;
			};
			return this.getGongyueshu(n, m%n); 
		},
		miwenjiexi() {
			let obj = {
				0: ["0"],
				1: ["1"],
				2: ["a","a","a"],
				3: ["a","a","a"],
				4: ["a","a","a"],
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