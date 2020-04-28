import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal';
import vSelect from 'vue-select';
import VueRouter from 'vue-router';
import router from "./router";
import { VTooltip } from 'v-tooltip'
Vue.config.productionTip = false
Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true
})

Vue.directive('tooltip', VTooltip)

Vue.component('v-select', vSelect)

Vue.use(VueRouter);


var vueInstance = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

document.addEventListener('DOMContentLoaded', function () {
  window.vueInstance = vueInstance
}, false);

document.onkeypress = function (e) {
  e = e || window.event;
  if (e.key == 'x') {
    debugger;
  }
}