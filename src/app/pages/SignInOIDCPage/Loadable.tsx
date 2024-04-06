/**
 * Asynchronously loads the component for SignInOIDCPage
 */

import { lazyLoad } from 'utils/loadable';

export const SignInOIDCPage = lazyLoad(
  () => import('./index'),
  module => module.SignInOIDCPage,
);
