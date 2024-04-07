import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

export function SignInPage() {
  useEffect(() => {
    window.location.href =
      'https://webvaktcom.b2clogin.com/webvaktcom.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_WebVakt_Auth&client_id=c454c749-11df-4138-a7b8-1047b0241bba&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsignin-oidc&scope=openid&response_type=id_token&prompt=login';
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign in Page</title>
        <meta name="description" content="Redirecting to sign in..." />
      </Helmet>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <PacmanLoader color="#4A3AFF" />
      </div>
    </>
  );
}
