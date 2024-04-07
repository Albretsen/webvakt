/**
 * Asynchronously loads the component for SignOutPage
 */

import { lazyLoad } from 'utils/loadable';

export const SignOutPage = lazyLoad(
  () => import('./index'),
  module => module.SignOutPage,
);
