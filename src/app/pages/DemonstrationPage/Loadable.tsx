/**
 * Asynchronously loads the component for Demonstrationpage
 */

import { lazyLoad } from 'utils/loadable';

export const Demonstrationpage = lazyLoad(
  () => import('./index'),
  module => module.Demonstrationpage,
);
