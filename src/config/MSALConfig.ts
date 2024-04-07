import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: 'c454c749-11df-4138-a7b8-1047b0241bba',
    authority:
      'https://webvaktcom.b2clogin.com/webvaktcom.onmicrosoft.com/B2C_1_WebVakt_Auth',
    redirectUri: 'http://localhost:3000/dashboard',
    knownAuthorities: ['webvaktcom.b2clogin.com'],
    postLogoutRedirectUri: 'http://localhost:3000/',
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize();
