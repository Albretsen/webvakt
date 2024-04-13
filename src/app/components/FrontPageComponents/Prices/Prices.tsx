import * as React from 'react';
import { Stack, Heading, Text, Image } from '@chakra-ui/react';
import styled from 'styled-components/macro';
import PriceCard from './PriceCard';
import { t } from 'utils/t';

export default function Prices() {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image
            // borderRadius="lg"
            src={'/assets/home/finger2.png'}
            alt=""
            // objectFit="cover"
            width={'500px'}
          />
        </ImageWrapper>
        <Stack mt={'5px'} direction={{ base: 'column' }}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', lg: '3xl' }}
          >
            <Text as={'span'}>Rimelige priser</Text>
          </Heading>
          <Text
            fontFamily="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            color={'gray.700'}
            maxWidth={'300px'}
          >
            Vi har en gratis pakke for testing av systemet, og 2 betalte pakker
            for de som ønsker mer.
          </Text>
        </Stack>
        <PriceCard
          name={t('pricing.free')}
          price={t('pricing.price_per_month_free')}
          features={[
            t('pricing.features.websites_1'),
            t('pricing.features.email_notification'),
            t('pricing.features.monitor_text'),
            t('pricing.features.daily_monitoring'),
          ]}
        />
        <PriceCard
          name={t('pricing.standard')}
          price={t('pricing.price_per_month_standard')}
          features={[
            t('pricing.features.websites_10'),
            t('pricing.features.email_notification'),
            t('pricing.features.monitor_whole_websites'),
            t('pricing.features.hourly_monitoring'),
            t('pricing.features.screenshot_changes'),
          ]}
        />
        <PriceCard
          name={t('pricing.pro')}
          price={t('pricing.price_per_month_pro')}
          features={[
            t('pricing.features.websites_100'),
            t('pricing.features.email_notification'),
            t('pricing.features.monitor_whole_websites'),
            t('pricing.features.technical_support'),
            t('pricing.features.css_selectors'),
            t('pricing.features.custom_http_headers'),
            t('pricing.features.per_minute_monitoring'),
            t('pricing.features.screenshot_changes'),
          ]}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 700px;
  gap: 50px;
  padding: 20px;
  flex: 1;
  align-items: stretch;
  /* overflow: hidden; */
  overflow-y: hidden;
  overflow-x: visible;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  left: -125px;
  z-index: 1;
`;
