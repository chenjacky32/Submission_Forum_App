/**
 * skenario Test
 * -should display login page correctly
 * -should display alert when email is empty
 * -should display alert when password is empty
 * -should display alert when email or password is wrong
 * -should display Rootpage when username and password correct
 * -should logout page correctly
 */

describe('Login Page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // login tanpa isi email
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // isi email
    cy.get('input[placeholder="Email"]').type('root111@gmail.com');

    // login tanpa isi password
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email or password is wrong', () => {
    // isi email
    cy.get('input[placeholder="Email"]').type('root111@gmail.com');

    // isi password
    cy.get('input[placeholder="Password"]').type('asalasalan');

    // klik login
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email or password" is wrong');
    });
  });

  it('should display Rootpage when username and password correct', () => {
    // isi email
    cy.get('input[placeholder="Email"]').type('root111@gmail.com');

    // isi password
    cy.get('input[placeholder="Password"]').type('root111');

    // klik login
    cy.get('button').contains(/^Login$/).click();

    // verifikasi bahwa elemen Rootpage akan dimunculkan
    cy.get('.navigation__avatar__item').should('be.visible');

    // periksa apakah avatar muncul dengan benar
    cy.get('.navigation__avatar__item img')
      .should('have.attr', 'src')
      .should('not.be.empty');

    // periksa apakah nama dan email user muncul dengan benar
    cy.get('.navigation__avatar__name p').first().should('contain.text', 'Jacky');
    cy.get('.navigation__avatar__name p').eq(1).should('contain.text', 'root111@gmail.com');

    // periksa apakah tombol logout muncul
    cy.get('button[aria-label="logout"]').should('be.visible');
  });

  it('should logout page correctly', () => {
    // ambil dari custom command
    cy.login('root111@gmail.com', 'root111');

    // Logout diklik
    cy.get('button[aria-label="logout"]').click();

    // validasi
    cy.get('#login').should('be.visible');
  });
});
