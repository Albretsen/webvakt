import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

export function DashboardPage() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? (
    <>
      <Helmet>
        <title>Dashboard Page</title>
        <meta
          name="description"
          content="A Boilerplate application Dashboard Page"
        />
      </Helmet>
    </>
  ) : null;
}
