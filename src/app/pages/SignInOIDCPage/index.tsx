import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useAuthSignIn } from '../../../hooks/useAuthSignIn';
import { useNavigate } from 'react-router-dom';

export function SignInOIDCPage() {
  const { authenticate, isLoading, error } = useAuthSignIn();
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const tokenFromUrl = new URLSearchParams(hash.substring(1)).get('id_token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);

  useEffect(() => {
    const signInAutomatically = async () => {
      if (!token) {
        return;
      }
      try {
        await authenticate(token);
        toast.success('Signed in successfully');
        navigate('/dashboard', { replace: true });
      } catch (error) {
        toast.error('Sign in failed.');
      }
    };

    signInAutomatically();
  }, [token, authenticate, navigate]);

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
        {isLoading ? (
          <PacmanLoader color="#4A3AFF" />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Signing you in...</p>
        )}
      </div>
    </>
  );
}
