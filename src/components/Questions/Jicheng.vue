<!--
 * @Description: es6 继承
 * @Autor: zxx
 * @Date: 2021-09-18 11:12:04
 * @LastEditors: zxx
 * @LastEditTime: 2021-09-26 19:22:01
-->
<template>
  <div>
    {{ 'es6 继承' }}
    <Button @click="onNew">new 一个实例</Button>
  </div>
</template>
<script>
import { Children1 } from '../../common/constant'
export default {
  name: 'Jicheng',
  data() {
    return {}
  },
  methods: {
    onNew() {
      var child = new Children1('zxx', 'zxx2', 'red')
      console.log(
        child.toString(),
        Object.getOwnPropertyNames(child.prototypes),
        'jichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjichengjicheng'
      )
    },
  },
}
</script>
