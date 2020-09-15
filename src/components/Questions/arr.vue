<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 10:36:51
 * @Description: flat 扁平化 
-->
<template>
<div>
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
            total: 0
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
            console.log(this.ave,"ave")
        }
    }
}
</script>