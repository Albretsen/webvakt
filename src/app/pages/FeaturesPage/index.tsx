import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Features from 'app/components/FeaturesPage/Features';
import { Box, Image } from '@chakra-ui/react';

export function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>FeaturesPage</title>
        <meta
          name="description"
          content="A Boilerplate application FeaturesPage"
        />
      </Helmet>
      <Box position={'absolute'} mt={'-450px'} ml={'800px'}>
        <Image
          borderRadius="lg"
          src={'/assets/features/rocket.png'}
          alt="Hero Image"
          objectFit="cover"
          width={{ base: '0px', md: '300px' }}
          minW={'300px'}
        />
      </Box>
      <Box mt={'100px'}>
        <Features />
      </Box>
    </>
  );
}
