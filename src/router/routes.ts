import Frame from '@/components/Frame.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/frames/:frameId',
    name: 'Frame',
    component: Frame,
  },
];

export default routes;
