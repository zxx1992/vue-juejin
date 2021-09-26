<!--
 * @Description: about
 * @Autor: zxx
 * @Date: 2020-12-01 22:20:41
 * @LastEditors: zxx
 * @LastEditTime: 2021-09-26 20:54:30
-->
<template>
  <div class="about">
    <Button @click="onChange">Change login status</Button>
  </div>
</template>
<script>
export default {
  methods: {
    onChange() {
      this.$store.commit('setLoginstatus', { loginstatus: true })
      this.$store.dispatch('getuser', {
        userList: ['zxx', 'zxx1'],
      })
    },
  },
}
</script>
