require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('comments-index', require('./components/Comments/Index.vue').default)

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
  el: '#app'
});