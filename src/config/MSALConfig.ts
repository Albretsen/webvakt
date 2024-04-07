import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: 'c454c749-11df-4138-a7b8-1047b0241bba',
    authority:
      'https://webvaktcom.b2clogin.com/webvaktcom.onmicrosoft.com/B2C_1_WebVakt_Auth',
    redirectUri: 'https://webvakt.com/dashboard',
    knownAuthorities: ['webvaktcom.b2clogin.com'],
    postLogoutRedirectUri: 'https://webvakt.com/',
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize();
