<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 11:00:20
 * @Description: 
-->
<template>
  <div>
    <Button @click="onHandleStr">将二维数组转为一维</Button>
    {{ string }}---{{ repeatNum }}---{{ repeatNum2 }}
    {{ userInfo.name }}
    <functionVue :avatar="avatar"></functionVue>
    <css :author="author" v-show="false"></css>
    {{ curModel }}
    <checkboxInput
      v-model="curModel"
      v-on:focus.native="onFocus"
      @hook:mounted="doSomething"
    ></checkboxInput>
  </div>
</template>
<script>
import { store } from "../../store/store";

import functionVue from "./functionVue.vue";
import css from "./css.vue";
import checkboxInput from "./checkboxInput.vue";
import { Person } from "../../common/constant";

import { promise, getJSON, ColorPoint } from "../../common/api.js";
export default {
  components: {
    functionVue,
    css,
    checkboxInput,
  },
  name: "string",
  data() {
    return {
      curModel: "",
      author: new Person("xx", "xz"),
      string: "1233568993215468",
      repeatNum: 0,
      repeatNum2: 0,
      avatar: require("../../assets/avator.png"),
      url: "https://edoc.clinicalservice.cn/edoc/license/info",
    };
  },
  mounted() {
    console.log("父mounted");
  },
  created() {
    console.log("父created");
  },
  computed: {
    userInfo() {
      return store.userInfo;
    },
  },
  methods: {
    // es6 常用的新语法
    doSomething() {
      // let ,const  块级作用域，无变量提升概念
      console.log("父组件监听到 mounted 钩子函数 ...");
      let [a, b, c] = [5, 6, 7];
      if (true) {
        let [a, b, c] = [10];
      }
      console.log(a, "a");

      // 对象的解构赋值
      let { bar, foo } = { foo: "aaa", bar: "bbb" };
      console.log(bar, foo, "222");

      // map, set
      const m = new Map();
      const o = { p: "hello world" };
      m.set(o, "constent");
      console.log(m, m.get(o), "mmm");

      // 类数组对象
      var obj = {
        0: "a",
        1: "b",
        2: "c",
        length: 3,
      };

      // for...in循环主要是为遍历对象而设计的，不适用于遍历数组
      for (let key in obj) {
        console.log(key, "key");
      }
      // 转为数组
      var objArr = Array.from(obj);
      console.log(objArr, "objArr");
      // 适用于数组，有Generator 接口
      for (let val of objArr) {
        console.log(val, "valval");
      }

      // class
      let cp = new ColorPoint(28, 8, "green"); //ColorPoint {x: 28, y: 8, color: "green"}
      console.log(cp, "cp");
    },
    onFocus() {
      console.log("string");
    },
    onHandleStr() {
      this.onGetFetch();
      this.onGetPromise();
      this.onGetAJAX();
      this.onSort();
      // 去重 1
      let arr = this.string.split("");
      let newaRR = [];
      for (let i = 0; i < arr.length; i++) {
        if (newaRR.includes(arr[i])) {
          break;
        } else {
          newaRR.push(arr[i]);
        }
      }
      this.repeatNum = newaRR.length;
      // 去重 2
      this.repeatNum2 = [...new Set(this.string)].length;
    },
    //  fetch 请求
    onGetFetch() {
      promise
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onGetPromise() {
      // 新建一个promise实例
      let promise = new Promise(function (resolve, reject) {
        console.log("promise"); // 1
        resolve();
      });
      // then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
      promise.then(function () {
        console.log("resolved"); // 3
      });

      console.log("hi nihaoa"); // 2
    },
    onGetAJAX() {
      // getJSON(this.url).then(function (json) {
      // 	console.log(json, "json");
      // }, function (error) {
      // 	console.log(error);
      // })

      getJSON(this.url)
        .then(function (post) {
          console.log(post, "post");
          //commentURL
          return getJSON(post.commentURL);
        })
        .then(
          function (comments) {
            console.log("resolved: ", comments);
          },
          function (err) {
            console.log("rejected: ", err);
          }
        );
    },

    // 排序
    onSort() {
      let a = [1, 2, 3, 4, 5, 3, 6];
      //   冒泡排序：时间复杂度o(n*n)  时间复杂度为o(n)?
      //   for (let i = 0; i < a.length - 1; i++) {
      //     for (let j = 0;j<a.length - 1 - i; j++) {
      // 		if (a[j] === 3) {
      // 			[a[j], a[j+1]] = [a[j+1], a[j]];
      // 		}
      // 	}
	  //   }
	//   快排:但是不是在原数组上面
	let left = [], right = []
      for (let i = 0; i < a.length; i++) {
        if (a[i] === 3) {
			right.push(a[i])
 		} else {
			 left.push(a[i])
		 }
	  }
	  let aa = [...left, ...right];

      //   o(1)
      //   let len = a.length;
      //   for (let i = 0; i < len; i++) {
      //     for (let j = len - 1; j > i; j--) {
      //       if (a[j - 1] === 3) {
      //         let temp = a[j - 1];
      // 		a[j - 1] =  a[j];
      // 		a[j] = temp;
      //       }
      //     }
      //   }

      console.log(a, aa, "a");
    },
  },
};
</script>

// point: 
// let const 块级作用域 无变量提升 
// 变量的解构赋值
// 数据类型 map set
// promise: 所有同步的操作执行完才会执行，将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数


// 排序