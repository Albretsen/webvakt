import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';

/*const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};*/

export default function Footer() {
  return (
    <Box position="relative" height="auto" overflow="hidden">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box />
        <Box />
        <Text>Opphavsrett © 2024 WebVakt | Alle rettigheter forbeholdt</Text>
      </Container>
    </Box>
  );
}

/*const socials = () => {
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Twitter'} href={'#'}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'#'}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
    </Stack>
  );
};*/
