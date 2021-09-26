<!--
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-04 10:35:11
 * @Description: 
-->
<template>
  <div class="container">
    <parentSlot>
      <!-- 可以缩写 -->
      <template #header>
        <!-- <template v-slot:header> -->
        <h1>here might be a page title</h1>
      </template>
      <template v-slot:default>
        <h2>main content</h2>
      </template>
      <template v-slot:footer>
        <h2>footer</h2>
      </template>
    </parentSlot>

    <timeVue></timeVue>
    <arr></arr>
    <string></string>
    <texts></texts>
    <!-- <Promise></Promise> -->
    <Dialog></Dialog>
    <propCom :name="name" :age="age"></propCom>
    <vModel v-model="text"></vModel>
    {{ text }}
    <Jicheng></Jicheng>
    <customModel :active="true" @change="change"></customModel>
    <dynamic></dynamic>
    <hookEvent></hookEvent>
    <observalbeVue></observalbeVue>
    <timeFormat></timeFormat>
    <test></test>
    <css></css>
    <github></github>
    <pdf></pdf>
    <weituo></weituo>
    <niuke></niuke>
    <!-- 当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用
    default 可以省略 -->

    <!-- 如果有多个插槽, 基于template写法  -->

    <!-- 解构插槽 -->
    <!-- 将user 重命名为person -->
    <vue v-slot="{ user: person }">
      {{ person.firstname }}
      {{ person.age }}
    </vue>
    <!-- 这里不显示啊,有问题 -->
    <vue #default="{ user = { firstName: 'lccshidashazi' }}">
      {{ user.firstName }}
    </vue>
    <vue></vue>
    <!-- <zuoyongyuSlot></zuoyongyuSlot> -->
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      name: '我是父的name',
      age: '我是父的age',
      text: '',
      text2: '',
    }
  },
  methods: {
    change() {
      console.log('ccc')
    },
  },
}
</script>
// Points: //inheritAttrs： 默认情况下vue会把父作用域的不被认作 props 的特性绑定 且作为普通的 HTML
特性应用在子组件的根元素上，如果不希望作用则使用inheritAttrs:false。 //$attrs：
父子孙多级传参，孙需要父的元素，可以不用每级props,用$attrs获取。
