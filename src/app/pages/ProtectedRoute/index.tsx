import React from 'react';
import { Outlet } from 'react-router-dom';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

// Adjusted ProtectedRoute to include Outlet for nested routing
export const ProtectedRoute = () => {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingComponent}
    >
      {/* Wrap the Outlet with any additional layout or components you need */}
      <Outlet />
    </MsalAuthenticationTemplate>
  );
};

function ErrorComponent({ error }) {
  return <div>An error occurred: {error.errorMessage}</div>;
}

function LoadingComponent() {
  return <div>Loading...</div>;
}
