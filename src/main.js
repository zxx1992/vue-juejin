/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-04-03 15:22:21
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import { Button, Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(ViewUI);
// 按需引入element组件
Vue.use(Button);
Vue.use(Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
