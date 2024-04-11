import { useEffect } from 'react';
import { EventType, EventMessage } from '@azure/msal-browser';
import { msalInstance } from 'config/MSALConfig';
import secureFetch from './secureFetch';

const AuthEventComponent = () => {
  useEffect(() => {
    const handleEvent = async (event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        console.log('Login Success:', event.payload);

        try {
          const response = await secureFetch('sign-in', {
            method: 'POST',
          });
          console.log(
            'Sign-in event successfully sent to the server:',
            response,
          );
        } catch (error) {
          console.error('Failed to send sign-in event:', error);
        }
      } else if (event.eventType === EventType.LOGOUT_SUCCESS) {
        console.log('Logout Success');
      }
    };

    const callbackId = msalInstance.addEventCallback(handleEvent);

    return () => {
      if (callbackId) {
        msalInstance.removeEventCallback(callbackId);
      }
    };
  }, []);

  return null;
};

export default AuthEventComponent;
