<!--
 * @Description: h5标签
 * @Autor: zxx
 * @Date: 2021-10-14 22:32:05
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-14 23:34:53
-->
<template>
  <div>
    <details>
      <summary><mark>Copyright</mark> 1999-2011.</summary>
      <p>- by Refsnes Data. All Rights Reserved.</p>
      <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
    </details>
    <section>
      <h1>WWF</h1>
      <p>
        The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the
        conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was
        founded in 1961.
      </p>
    </section>
    <video controls width="320" height="240" src="/video/php/friday.mp4">
      <track default kind="captions" srclang="en" src="/video/php/friday.vtt" />
      抱歉，您的浏览器不支持嵌入视频！
    </video>
    <article>
      <h1>Internet Explorer 9</h1>
      <p>Windows Internet Explorer 9(缩写为 IE9 )在2011年3月14日21:00 发布。</p>
    </article>

    <p><b>注意：</b>目前只有 Chrome 和 Safari 6 支持 dialog 标签。</p>
    <table border="1">
      <tr>
        <th>January</th>
        <th>February</th>
        <th>March</th>
      </tr>
      <tr>
        <td>31</td>
        <td>28</td>
        <td>31</td>
      </tr>
    </table>

    下载进度：
    <progress value="22" max="100"> </progress>
  </div>
</template>
<style scoped>
mark {
  background-color: red;
  color: white;
}
</style>
