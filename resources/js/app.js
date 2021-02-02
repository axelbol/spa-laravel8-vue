require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './components/App.vue'
import CommentsIndex from './components/Comments/Index.vue'
import CommentsCreate from './components/Comments/Create.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CommentsIndex,
    },
    {
      path: '/comments/create',
      component: CommentsCreate
    },
  ]
})

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
  el: '#app',
  components: { App },
  router
});