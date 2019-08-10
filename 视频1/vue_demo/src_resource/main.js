import Vue from 'vue'
import App from './app'
import VueResource from 'vue-resource'


Vue.config.productionTip = false;

Vue.use(VueResource);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
