import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import HelloWorld from '../components/HelloWorld.vue';
import List from '../components/list.vue';

export default new Router({
  routes: [
    {
      name: 'list',
      path: '/',
      components: {
        List
      }
    },
    {
      name: 'helloworld',
      path: '/helloworld',
      components: {
        main: HelloWorld
      }
    }
  ]
})