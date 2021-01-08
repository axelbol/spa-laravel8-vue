require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('comments-index', require('./components/Comments/Index.vue').default)

const app = new Vue({
  el: '#app'
});