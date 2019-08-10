import Vue from 'vue'
import App from './app'
// 按需引入
import { Button } from 'mint-ui'
Vue.component(Button.name, Button);
Vue.config.productionTip = false;
// // 完整引入
// import MintUI from 'mint-ui'
// // 导入 MUI 的样式表
// import './lib/mui/css/mui.min.css'
// // 导入扩展图标样式
// import './lib/mui/css/icons-extra.css'
// // 导入样式表
// import 'mint-ui/lib/style.min.css'
// Vue.use((MintUI));
/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
