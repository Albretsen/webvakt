import * as React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getHashParamValue } from '../../../utils/parsing';

export function SignInOIDCPage() {
  useEffect(() => {
    const id_token = getHashParamValue(window.location.hash, 'id_token');
    console.log(id_token);
  }, []);

  return (
    <>
      <Helmet>
        <title>SignInOIDC</title>
        <meta name="description" content="SignInOIDC Page" />
      </Helmet>
      <span>SignInOIDC</span>
    </>
  );
}
