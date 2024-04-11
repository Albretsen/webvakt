/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { DashboardPage } from './pages/DashboardPage';

import { msalInstance } from 'config/MSALConfig';

import { MsalProvider } from '@azure/msal-react';

import NavBar from './components/AllPageComponents/NavBar';

import { switchLanguage } from 'locales/i18n';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <Helmet
          titleTemplate="%s - WebVakt"
          defaultTitle="WebVakt"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A WebVakt application" />
        </Helmet>
        <div className="container">
          <p>Work in progress 👷</p>
          <button
            onClick={() => {
              switchLanguage();
            }}
          >
            Change language
          </button>
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
            {/* EXAMPLE EXTRA PAGE (/dashboard/overview): <Route path="overview" element={<OverviewPage />} />*/}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle />
      </MsalProvider>
    </BrowserRouter>
  );
}
