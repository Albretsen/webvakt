import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getHashParamValue } from '../../../utils/parsing';
import { useAuthSignIn } from '../../../hooks/useAuthSignIn';
import { toast } from 'react-toastify';
import PacmanLoader from 'react-spinners/PacmanLoader';

export function SignInOIDCPage() {
  const { authenticate, isLoading, error } = useAuthSignIn();

  const handleSignIn = async token => {
    try {
      await authenticate(token);
      toast.success('Signed in successfully');
    } catch (error) {
      toast.error('Sign in failed.');
    }
  };

  useEffect(() => {
    handleSignIn(getHashParamValue(window.location.hash, 'id_token'));
  });

  return (
    <>
      <Helmet>
        <title>SignInOIDC</title>
        <meta name="description" content="SignInOIDC Page" />
      </Helmet>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        {true ? (
          <PacmanLoader color="#4A3AFF" />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Signing in...</p>
        )}
      </div>
    </>
  );
}
