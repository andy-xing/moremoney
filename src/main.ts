import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
window.onload = function () {
  setTimeout(function () {
    window.scroll(0, 100000);
  }, 0);
};
if (document.documentElement.clientWidth>500){
  window.alert('请使用手机打开本页面，以保证浏览效果')
}