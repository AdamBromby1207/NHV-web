export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',  // Make sure this matches your .NET Core API URL
  auth0: {
    domain: 'dev-6j6tdc34alzibh6w.uk.auth0.com',
    clientId: 's8yC7B9XaDQvDV9HBi3pklPGFRlEAdJf',
    audience: 'https://api.northern.com',
    redirectUri: 'http://localhost:6004',  // Explicitly set the Angular app URL
  }
};
