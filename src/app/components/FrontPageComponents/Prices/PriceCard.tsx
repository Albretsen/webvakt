import * as React from 'react';
import styled from 'styled-components/macro';
import { CircleCheck } from 'lucide-react';
import { Button } from './GeneralUi/Button';

interface PriceCardProps {
  name: string;
  price: string;
  features: string[];
}

export default function PriceCard(props: PriceCardProps) {
  const { name, price, features } = props;
  return (
    <Wrapper>
      <div>
        <NameText>{name}</NameText>
        <div>
          <PriceText>{price}</PriceText>
          <PriceByline>/mnd</PriceByline>
        </div>
      </div>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature key={index}>
            <CircleCheck fill="#ADABC3" color="white" />
            <FeatureText>{feature}</FeatureText>
          </Feature>
        ))}
      </FeaturesContainer>
      <ButtonContainer>
        <Button>Velg pakke</Button>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 10px;
`;

const NameText = styled.h2`
  color: #170f49;
  margin: 0;
  font-weight: 900;
  font-size: 1.25rem;
`;

const PriceText = styled.span`
  color: #170f49;
  font-size: 2.5rem;
  font-weight: bold;
`;

const PriceByline = styled.span`
  color: #8d8ba7;
  font-size: 1rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Feature = styled.div`
  display: flex;
  gap: 8px;
`;

const FeatureText = styled.span`
  color: #6f6c90;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
