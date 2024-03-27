import * as React from 'react';
import styled from 'styled-components/macro';
import PriceCard from './PriceCard';
export default function Prices() {
  return (
    <Wrapper>
      <PriceCard
        name="Gratis"
        price="0kr"
        features={['1 nettside', 'E-post notifikasjon', 'Overvåk tekst']}
      />
      <PriceCard
        name="Standard"
        price="49kr"
        features={[
          '10 nettsider',
          'E-post notifikasjon',
          'Overvåk hele nettsider',
        ]}
      />
      <PriceCard
        name="Pro"
        price="499kr"
        features={[
          '100 nettside',
          'E-post notifikasjon',
          'Overvåk hele nettsider',
          'Hjelp av tekniker',
          'CSS selectors',
          'Egendefinerte HTTP headers',
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
  flex: 1;
  align-items: stretch;
  max-width: 900px;
`;
