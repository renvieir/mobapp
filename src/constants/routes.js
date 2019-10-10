import { lazy } from 'react';

const routes = {
  notes: {
    id: 'notes',
    path: '/',
    component: lazy(() => import('../routes/notes')),
  }
};

export const routesList = Object.values(routes);
export default routes;