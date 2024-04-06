import * as jwt from 'jsonwebtoken';
import * as jwksRsa from 'jwks-rsa';
import { Secret } from 'jsonwebtoken';

// Define the type for the callback function
type Callback = (
  err: jwt.VerifyErrors | null,
  isValid?: boolean,
  decoded?: object | undefined,
) => void;

// Initialize JWKS client
const client = jwksRsa({
  jwksUri: `https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com/discovery/v2.0/keys?p=your-policy-name`,
});

// Function to retrieve signing key
const getKey = (
  header: jwt.JwtHeader,
  callback: jwt.SigningKeyCallback,
): void => {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
};

// Token validation function
export const validateToken = (idToken: string, callback: Callback): void => {
  jwt.verify(
    idToken,
    getKey as Secret,
    {
      // Ensure these values match your Azure B2C tenant's configuration
      audience: 'your-audience', // Typically your Azure B2C application ID
      issuer: `https://your-tenant-name.b2clogin.com/your-tenant-id/v2.0/`,
      algorithms: ['RS256'],
    },
    (err, decoded) => {
      if (err) {
        // Token validation failed
        callback(err, false);
      } else {
        // Token is valid
        callback(null, true, decoded);
      }
    },
  );
};
