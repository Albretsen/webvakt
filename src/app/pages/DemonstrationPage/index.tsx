import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import VideoDemonstrationV2 from 'app/components/DemonstrationPage/VideoDemonstrationV2';

export function Demonstrationpage() {
  return (
    <>
      <Helmet>
        <title>Demonstration</title>
        <meta
          name="description"
          content="A Boilerplate application Demonstrationpage"
        />
      </Helmet>
      <div className="container" style={{ overflowX: 'hidden' }}>
        {' '}
        <VideoDemonstrationV2 />
      </div>
    </>
  );
}
