/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';

// Initialize languages
import './locales/i18n';

const queryClient = new QueryClient();

// Initialize auth storage
const authStore = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

const store = configureAppStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <AuthProvider store={authStore}>
            <QueryClientProvider client={queryClient}>
              <ToastContainer />
              <App />
            </QueryClientProvider>
          </AuthProvider>
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </ChakraProvider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
