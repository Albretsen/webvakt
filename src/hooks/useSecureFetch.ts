import { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { useQuery, UseQueryResult } from 'react-query';
import { InteractionRequiredAuthError } from '@azure/msal-browser';

interface SecureFetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
}

/**
 * Custom hook to fetch data from a secure API using an access token obtained via MSAL.
 *
 * @param endpoint The API endpoint to fetch data from.
 * @param options Options including the HTTP method and any data for POST requests.
 * @returns Query object from react-query containing data, error, and status.
 */
function useSecureFetch(
  endpoint: string,
  options: SecureFetchOptions = { method: 'GET' },
): UseQueryResult<any, Error> {
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (inProgress === 'none' && accounts.length > 0 && !accessToken) {
      const accessTokenRequest = {
        scopes: [
          'https://webvaktcom.onmicrosoft.com/c454c749-11df-4138-a7b8-1047b0241bba/user.read',
        ],
        account: accounts[0],
      };

      instance
        .acquireTokenSilent(accessTokenRequest)
        .then(response => {
          setAccessToken(response.accessToken);
        })
        .catch(error => {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect(accessTokenRequest);
          } else {
            console.error(error);
          }
        });
    }
  }, [instance, accounts, inProgress, accessToken]);

  const fetchWithToken = async ({ queryKey }: any): Promise<any> => {
    const [_key, { endpoint, options, token }] = queryKey;
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    if (options.method !== 'GET') {
      headers.append('Content-Type', 'application/json');
    }

    const response = await fetch(endpoint, {
      method: options.method,
      headers: headers,
      body: options.method !== 'GET' ? JSON.stringify(options.data) : null,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  return useQuery<any, Error>(
    ['secureData', { endpoint, options, token: accessToken }],
    fetchWithToken,
    {
      enabled: !!accessToken,
    },
  );
}

export default useSecureFetch;
