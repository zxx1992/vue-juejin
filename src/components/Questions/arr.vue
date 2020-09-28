<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 10:36:51
 * @Description: flat 扁平化 
-->
<template>
<div v-loading="visible">
    {{arr2}}
    <Button @click="onChangeArr">扁平化</Button>
</div>
</template>
<script>
export default {
    name: "arr",
    data() {
        this.arr1 = [12,[34,56],78];
        return {
            arr2: [],
            arr3: [42,24,6,6,42,57,78,27,27],
            ave: [],
            total: 0,
            visible: true,
            arrObject: [
                {name: "xx", age: 24},
                {name: "cc", age: 25},
            ],
            objIterator: {
                name:"1",
                age: 2,
                sex: "male"
            }
        }
    },
    methods: {
        onChangeArr() {
            this.arr2 = this.arr1.flat();
            for (let i =0;i<this.arr3.length; i++) {
                this.total +=this.arr3[i];
            }
            let arr0 = [], total1 = 0;
            for (let i =0;i<this.arr3.length; i++) {
                arr0.push(this.arr3[i])
                total1 += this.arr3[i]
                if (total1 === this.total/3) {
                    this.ave.push(arr0);
                    arr0 = []
                }
            }
            this.visible = false
            console.log(this.ave,"ave")
            // for...of  遍历数组
            // for (let v of this.arrObject) {
            //     console.log(v, v.name, "")
            // }
             // for...in  遍历数组
            for (let key in this.arrObject) {
                console.log(key, "")
            }

            // 给对象添加iterator接口，使用for of 遍历 
            this.objIterator[Symbol.iterator] = function() {
                const keys = Object.keys(this);
                console.log(keys, this,"this")
                let index = 0;
                return {
                    next: () => {
                        return {
                            value: this[keys[index++]],
                            done: index > keys.length
                        }
                    }
                }
            }
            // console.log(this.objIterator,"objiter")
            for (let v of this.objIterator) {
                console.log(v, "objIterator")
            }

            // 数组去重:indexOf 跟include同理
            const newArr = [];
            for (let v of this.arr3) {
                if (!newArr.includes(v)) {
                    newArr.push(v)
                }
            }
            console.log(newArr,"newArr")
        }
    }
}
</script>
// points: 
// 1 for (let of)  可以直接拿到键值；具备iterator接口的可使用，比如数组原生就具备
// 2 for (let in ) 拿到键
// 3  数组去重