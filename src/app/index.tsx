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
import { Box } from '@chakra-ui/react';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { DashboardPage } from './pages/DashboardPage';

import { msalInstance } from 'config/MSALConfig';
import { MsalProvider } from '@azure/msal-react';
import AuthEventComponent from 'utils/authEvents';

import NavBar from './components/AllPageComponents/NavBar';
import Footer from 'app/components/AllPageComponents/Footer';

import { switchLanguage } from 'locales/i18n';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { Demonstrationpage } from './pages/DemonstrationPage';

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
        <AuthEventComponent />
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          textAlign={'center'}
        >
          <p>Work in progress 👷</p>
          <button
            onClick={() => {
              switchLanguage();
            }}
          >
            Change language
          </button>
          <NavBar />
          <Box flex="1" className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/demonstration" element={<Demonstrationpage />} />
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route index element={<DashboardPage />} />
                {/* EXAMPLE EXTRA PAGE (/dashboard/overview): <Route path="overview" element={<OverviewPage />} />*/}
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
        <GlobalStyle />
      </MsalProvider>
    </BrowserRouter>
  );
}
