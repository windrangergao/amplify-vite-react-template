import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        attributeMapping: {
          email: 'email'
        },
        scopes: ['profile','email']
      },
      callbackUrls: [
        'https://main.d1ciwlz9fphpd9.amplifyapp.com/',
        'http://localhost:5173/',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['https://main.d1ciwlz9fphpd9.amplifyapp.com/','http://localhost:3000/', 'https://mywebsite.com'],
    }
  }
});