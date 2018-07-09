import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'HomePage',
    }, {
      path: '/build',
      component: RobotBuilder,
      name: 'RobotBuilder',
    }, {
      path: '/partsinfo/:partType/:id',
      component: PartsInfo,
      name: 'PartsInfo',
    }],
});
