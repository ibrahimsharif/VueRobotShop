import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';

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
      path: '/partsinfo/browse',
      component: BrowseParts,
      name: 'BrowseParts',

    }, {
      path: '/partsinfo/:partType/:id',
      component: PartsInfo,
      name: 'PartsInfo',
      props: true,
    }],
});
