import Vue from 'vue';
import Router from 'vue-router';

import Todo from './components/todo/Todo';
import Movies from './components/movies/Movies';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo-page',
      component: Todo,
    },

    {
      path: '/movies',
      name: 'movies-page',
      component: Movies,
    }
  ]
})