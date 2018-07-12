import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SideBarStandard from '../sidebars/SideBarStandard.vue';
import SideBarBuild from '../sidebars/SideBarBuild.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: HomePage,
        sidebar: SideBarStandard,
      },
      name: 'HomePage',
    }, {
      path: '/build',
      components: {
        default: RobotBuilder,
        sidebar: SideBarBuild,
      },
      name: 'RobotBuilder',
    }, {
      path: '/partsinfo/browse',
      component: BrowseParts,
      name: 'BrowseParts',
      children: [
        {
          path: 'arms',
          component: RobotArms,
          name: 'BrowseArms',
        },
        {
          path: 'heads',
          component: RobotHeads,
          name: 'BrowseHeads',
        },
        {
          path: 'torsos',
          component: RobotTorsos,
          name: 'BrowseTorsos',
        },
        {
          path: 'bases',
          component: RobotBases,
          name: 'BrowseBases',
        },

      ],
    }, {
      path: '/partsinfo/:partType/:id',
      component: PartsInfo,
      name: 'PartsInfo',
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));

        next(isValidId);
      },
    }],
});
