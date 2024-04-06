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
        const isSignedIn = signIn({
          auth: {
            token: token,
            type: 'Bearer',
          },
          userState: {
            name: 'React User',
            uid: 123456,
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
