import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Prices from 'app/components/FrontPageComponents/Prices/Prices';
import NavBar from 'app/components/AllPageComponents/NavBar';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <NavBar />
      <Prices />
    </>
  );
}
