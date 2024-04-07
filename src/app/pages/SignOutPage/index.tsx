import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Helmet } from 'react-helmet-async';

export function SignOutPage() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate('/', { replace: true });
  }, [signOut, navigate]);

  return (
    <>
      <Helmet>
        <title>Sign Out</title>
        <meta name="description" content="Signing out..." />
      </Helmet>
    </>
  );
}
