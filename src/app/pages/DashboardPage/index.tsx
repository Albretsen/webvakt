import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMsal } from '@azure/msal-react';

function WelcomeUser() {
  const { accounts } = useMsal();
  const username = accounts[0].username;

  return <p>Welcome, {username}</p>;
}

function signOutClickHandler(instance) {
  const logoutRequest = {
    account: instance.getAccountByHomeId(0),
    postLogoutRedirectUri: process.env.REACT_APP_BASE_URL,
  };
  instance.logoutRedirect(logoutRequest);
}

function SignOutButton() {
  const { instance } = useMsal();

  return (
    <button onClick={() => signOutClickHandler(instance)}>Sign Out</button>
  );
}

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
        <meta
          name="description"
          content="A Boilerplate application Dashboard Page"
        />
      </Helmet>
      <p>User is signed in</p>
      <WelcomeUser />
      <SignOutButton />
    </>
  );
}
