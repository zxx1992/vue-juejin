<!--
 * @Description: es6 继承
 * @Autor: zxx
 * @Date: 2021-09-18 11:12:04
 * @LastEditors: zxx
 * @LastEditTime: 2021-09-18 11:44:02
-->
<template>
  <div>{{ 'es6 继承' }}</div>
</template>
<script>
import Children1 from '../../common/constant'
export default {
  name: 'Jicheng',
  data() {
    return {}
  },
  mounted() {
    var child = new Children1('red')
    console.log(child.toString(), 'jicheng')
  },
}
</script>
