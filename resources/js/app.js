require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSweetalert2 from "vue-sweetalert2"
Vue.use(VueSweetalert2)
import "sweetalert2/dist/sweetalert2.min.css"

import App from './components/App.vue'
import CommentsIndex from './components/Comments/Index.vue'
import CommentsCreate from './components/Comments/Create.vue'
import CommentsEdit from './components/Comments/Edit.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CommentsIndex,
      name: 'comments.index'
    },
    {
      path: '/comments/create',
      component: CommentsCreate,
      name: 'comments.create',
    },
    {
      path: '/comments/edit/:id',
      component: CommentsEdit,
      name: 'comments.edit',
    },
  ]
})

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
  el: '#app',
  components: { App },
  router
});