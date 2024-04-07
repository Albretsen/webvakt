import { useCallback, useState } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

export function useAuthSignIn() {
  const signIn = useSignIn();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const authenticate = useCallback(
    async token => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://localhost:32770/api/userprofile',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();

        const isSignedIn = signIn({
          auth: {
            token: token,
            type: 'Bearer',
          },
          userState: {
            givenName: userData.givenName || '',
            familyName: userData.familyName || '',
          },
        });

        if (!isSignedIn) {
          throw new Error('Failed to sign in');
        }
      } catch (error) {
        let typedError = error as Error;
        setError(typedError.message);
        throw new Error(typedError.message);
      } finally {
        setIsLoading(false);
      }
    },
    [signIn],
  );

  return { authenticate, isLoading, error };
}

export default useAuthSignIn;
