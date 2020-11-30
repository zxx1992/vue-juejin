<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-11-30 09:58:15
 * @Description: 封装input组件
-->
<template>
    <input :type="type" v-model="val"/>
</template>
<script>
export default {
    name: "checkboxInput",
    props: {
        type: String,
        value: String,
    },
    data() {
        return {
            val: this.value
        }
    },
    watch: {
        value(n) {
            this.val = n;
        },
        val(n) {
            this.$emit("input", n)
        }
    }
}
</script>
// point: 
// 你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符：
// 而不需要使用this.$emit("")