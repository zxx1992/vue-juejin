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
import loading from "./components/Questions/loading/loadingDirective.js"

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(ViewUI);
// 按需引入element组件
Vue.use(Button);
Vue.use(Dialog);


// 引入自定义的组件,全局注册
const requireComponents = require.context('./components/Questions', false, /\.vue/);

requireComponents.keys().forEach(fileName => {
  const reqcom = requireComponents(fileName).default;
  Vue.component(reqcom.name, reqcom)
})

Vue.use(loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Points:
// require.context: 全局注册自定义组件，必须有组件name