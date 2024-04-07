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
  //return <div>An error occurred: {error.errorMessage}</div>;
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
