import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Prices from 'app/components/FrontPageComponents/Prices/Prices';
import { Spacer } from '@chakra-ui/react';

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>PricingPage</title>
        <meta
          name="description"
          content="A Boilerplate application PricingPage"
        />
      </Helmet>
      <div className="container" style={{ overflowX: 'hidden' }}>
        <Spacer mt={'90px'} />
        <Prices />
      </div>
    </>
  );
}
