import React from 'react';
import { Outlet } from 'react-router-dom';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import PacmanLoader from 'react-spinners/PacmanLoader';

export const ProtectedRoute = () => {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingComponent}
    >
      <Outlet />
    </MsalAuthenticationTemplate>
  );
};

/*function ProtectedComponent() {
  const { instance, inProgress, accounts } = useMsal();
  const [apiData, setApiData] = useState<String | null>(null);

  useEffect(() => {
    const accessTokenRequest = {
      scopes: [
        'https://webvaktcom.onmicrosoft.com/c454c749-11df-4138-a7b8-1047b0241bba/user.read',
      ],
      account: accounts[0],
    };
    if (!apiData && inProgress === InteractionStatus.None) {
      instance
        .acquireTokenSilent(accessTokenRequest)
        .then(accessTokenResponse => {
          // Acquire token silent success
          let accessToken = accessTokenResponse.accessToken;
          // Call your API with token
          callback(accessToken).then(response => {
            setApiData(response);
          });
        })
        .catch(error => {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect(accessTokenRequest);
          }
          console.log(error);
        });
    }
  }, [instance, accounts, inProgress, apiData]);

  return <p>Return your protected content here: {apiData}</p>;
}*/

function ErrorComponent({ error }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      An error occurred: {error.errorMessage}
    </div>
  );
}

function LoadingComponent() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <PacmanLoader color="#4A3AFF" />
    </div>
  );
}
