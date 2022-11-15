// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { login, logout, createPost } from '../../src/js/api/index';

Cypress.Commands.add('login', async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add('logout', () => {
  logout();
});

Cypress.Commands.add('createPost', async (title, body, media, tags) => {
  let post = await createPost(title, body, media, tags);
  return post;
});
