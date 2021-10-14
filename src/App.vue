<!--
 * @Description: ...页面文件
 * @Autor: zxx
 * @Date: 2020-12-01 22:20:41
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-14 22:35:14
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>|
      <router-link to="/index">index</router-link> |
      <router-link to="/h5">h5</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
