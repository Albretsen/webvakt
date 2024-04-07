import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Prices from 'app/components/FrontPageComponents/Prices/Prices';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <p>Version 0.0.1</p>
      <Prices />
    </>
  );
}
