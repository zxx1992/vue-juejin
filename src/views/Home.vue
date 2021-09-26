<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-04-03 15:22:21
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" v-show="false" />
    <Index></Index>
    {{ loginStatus }}
    {{ userList }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/components/Questions/index.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Index,
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus
    },
    userList() {
      return this.$store.state.userList
    },
  },
}
</script>
