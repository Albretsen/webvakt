import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Prices from 'app/components/FrontPageComponents/Prices/Prices';
import Hero from 'app/components/FrontPageComponents/Hero/Hero';
import VideoDemonstration from 'app/components/FrontPageComponents/VideoDemonstration/VideoDemonstration';
import { Spacer } from '@chakra-ui/react';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="container" style={{ overflowX: 'hidden' }}>
        {' '}
        <Hero />
        <VideoDemonstration />
        <Prices />
      </div>
    </>
  );
}
