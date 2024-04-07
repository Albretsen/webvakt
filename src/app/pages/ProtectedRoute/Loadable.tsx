/**
 * Asynchronously loads the component for ProtectedRoute
 */

import { lazyLoad } from 'utils/loadable';

export const ProtectedRoute = lazyLoad(
  () => import('./index'),
  module => module.ProtectedRoute,
);
