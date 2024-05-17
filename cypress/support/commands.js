// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
// custom command login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://localhost:5173/login');
  cy.get('input[placeholder="Email"]').type(email);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get('button').contains(/^Login$/).click();
  cy.get('.navigation__avatar__item').should('be.visible');
});
