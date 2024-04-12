import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  MdOutlineVisibility,
  MdNotificationsActive,
  MdDesktopMac,
  MdReport,
  MdSettings,
  MdHelpOutline,
} from 'react-icons/md';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  number: string;
}

const Card = ({ heading, description, icon, href, number }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'center'} spacing={2} textAlign={'center'}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'gray.100'}
          rounded={'full'}
        >
          <Text
            mt={1}
            fontWeight={500}
            fontSize={'3em'}
            fontFamily="'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          >
            {number.toString().padStart(2, '0')}
          </Text>
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text
            mt={1}
            fontSize={'sm'}
            fontFamily={
              "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          >
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Funksjonene til WebVakt
        </Heading>
        <Text
          color={'gray.700'}
          fontSize={{ base: 'sm', sm: 'lg' }}
          fontFamily={
            "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          }
          zIndex={1}
        >
          Her er et overblikk over hva du kan forvente av WebVakt! Gjerne se vår
          demonstrasjon etterpå!
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Overvåk endringer'}
            icon={<Icon as={MdOutlineVisibility} w={16} h={16} />}
            description={
              'Med WebVakt kan du overvåke tekst eller hele nettsider.'
            }
            href={'#'}
            number={'01'}
          />
          <Card
            heading={'Få notifikasjoner'}
            icon={<Icon as={MdNotificationsActive} w={16} h={16} />}
            description={
              'Når vi oppdager en endring sender vi ut en e-post. Vi kan også samle alle notifikasjonene til en ukentlig rapport.'
            }
            href={'#'}
            number={'02'}
          />
          <Card
            heading={'Enkelt grensesnitt'}
            icon={<Icon as={MdDesktopMac} w={16} h={16} />}
            description={
              'Vi har selv utviklet et dashbord med fokus på brukervennlighet. Vår plattform er lettest å bruke!'
            }
            href={'#'}
            number={'03'}
          />
          <Card
            heading={'Ukentlige rapporter'}
            icon={<Icon as={MdReport} w={16} h={16} />}
            description={
              'Om det blir litt mye med notifikasjoner for hver endring, kan vi lage en ukentlig rapport som samler alt i en e-post.'
            }
            href={'#'}
            number={'04'}
          />
          <Card
            heading={'Avanserte funksjoner'}
            icon={<Icon as={MdSettings} w={16} h={16} />}
            description={
              'For brukere som er kjent med HTML og CSS, er det mulig å manuelt legge til CSS selectorer for vilkårlige nettsider. '
            }
            href={'#'}
            number={'05'}
          />
          <Card
            heading={'Få hjelp'}
            icon={<Icon as={MdHelpOutline} w={16} h={16} />}
            description={
              'Trenger du hjelp? Våre flinke teknikere bistår med hjelp over telefon eller videomøte. '
            }
            href={'#'}
            number={'06'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
