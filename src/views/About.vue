<!--
 * @Description: about
 * @Autor: zxx
 * @Date: 2020-12-01 22:20:41
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-11 10:56:35
-->
<template>
  <div class="about">
    <Button @click="onChange">Change login status</Button>

    <Button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</Button>
    <component :is="currentTabComponent"></component>
  </div>
</template>
<script>
import tabhome from '../components/Questions/tabhome.vue'
import tabposts from '../components/Questions/tabposts.vue'
export default {
  mame: 'About',
  components: {
    tabhome,
    tabposts,
  },
  data() {
    return {
      currentTab: 'home',
      tabs: ['home', 'posts', 'archive'],
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab' + this.currentTab
    },
  },
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
