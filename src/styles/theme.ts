import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      '50': '#E8E5FF',
      '100': '#BDB8FF',
      '200': '#938AFF',
      '300': '#695CFF',
      '400': '#3F2EFF',
      '500': '#1500FF',
      '600': '#1100CC',
      '700': '#0C0099',
      '800': '#080066',
      '900': '#040033',
    },
    secondary: {
      50: '#e2e8f0',
      100: '#cbd5e1',
      200: '#a0aec0',
      300: '#718096',
      400: '#4a5568',
      500: '#2d3748',
      600: '#1a202c',
      700: '#171923',
      800: '#0f1115',
      900: '#08090a',
    },
    success: {
      500: '#38a169',
    },
    error: {
      500: '#e53e3e',
    },
    warning: {
      500: '#dd6b20',
    },
    info: {
      500: '#3182ce',
    },
  },
});

export default theme;
