/**
 *  skenario test
 *  -should display register page correctly
 *  -should display alert when name is empty
 *  -should display alert when email is empty
 *  -should display alert when password is empty
 *  -should display alert when the email has been used
 */

describe('Register Page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    cy.get('#NameRegister').should('be.visible');
    cy.get('#EmailRegister').should('be.visible');
    cy.get('#PasswordRegister').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // klik register tanpa isi name
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // isi name
    cy.get('#NameRegister').type('root');
    // klik register tanpa isi email
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // isi name
    cy.get('#NameRegister').type('root');
    // isi email
    cy.get('#EmailRegister').type('root111@gmail.com');
    // klik register tanpa isi password
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when the email has been used', () => {
    // isi name
    cy.get('#NameRegister').type('root');
    // isi email
    cy.get('#EmailRegister').type('root111@gmail.com');
    // isi password
    cy.get('#PasswordRegister').type('root111');

    // klik register
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });
});
