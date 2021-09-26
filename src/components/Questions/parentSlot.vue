<!--
 * @Description: ...具名插槽
 * @Autor: zxx
 * @Date: 2021-09-26 15:52:40
 * @LastEditors: zxx
 * @LastEditTime: 2021-09-26 16:07:20
-->
<template>
  <div class="container">
    <!-- 具名插槽: 有时我们需要多个插槽 -->
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 不带name 默认为default -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'parentSlot',
}
</script>
