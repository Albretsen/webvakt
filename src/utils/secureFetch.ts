import { InteractionRequiredAuthError } from '@azure/msal-browser';

import { msalInstance } from 'config/MSALConfig';

interface SecureFetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
}

async function secureFetch(
  endpoint: string,
  options: SecureFetchOptions = { method: 'GET' },
  scopes: string[] = [
    'https://webvaktcom.onmicrosoft.com/c454c749-11df-4138-a7b8-1047b0241bba/user.read',
  ],
): Promise<any> {
  const accounts = msalInstance.getAllAccounts();

  if (accounts.length === 0) {
    throw new Error('No accounts detected');
  }

  let accessToken: string;
  const accessTokenRequest = {
    scopes: scopes,
    account: accounts[0],
  };

  try {
    const response = await msalInstance.acquireTokenSilent(accessTokenRequest);
    accessToken = response.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      throw new Error('Interactive authentication required');
    } else {
      console.error(error);
      throw new Error('Error acquiring access token');
    }
  }

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);
  if (options.method !== 'GET') {
    headers.append('Content-Type', 'application/json');
  }

  const fetchOptions: RequestInit = {
    method: options.method,
    headers: headers,
    body:
      options.method !== 'GET' && options.data
        ? JSON.stringify(options.data)
        : null,
  };

  const response = await fetch(
    process.env.REACT_APP_API_URL + endpoint,
    fetchOptions,
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export default secureFetch;
