import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoMain from '@/views/TodoMain';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TodoMain,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
