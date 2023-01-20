import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoHome from '@/views/TodoHome';
import TodoMain from '@/views/TodoMain';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TodoHome,
  },
  {
    path: '/main',
    component: TodoMain,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
