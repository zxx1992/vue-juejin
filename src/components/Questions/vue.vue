<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-10 16:06:25
 * @Description: 作用域插槽: 子传值到父元素
-->
<template>
  <div>
    <slot v-bind:user="user">{{ user.lastname }}</slot>
  </div>
</template>
<script>
export default {
  name: 'vue',
  data() {
    return {
      user: {
        firstname: '',
        lastname: 'xx',
      },
    }
  },
}
</script>
