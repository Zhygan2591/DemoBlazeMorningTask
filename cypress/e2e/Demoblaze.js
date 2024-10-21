/// <reference types="cypress" />

describe('Demoblazemorning', () => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const username = `Anton${randomNumber}`;
  beforeEach(() => cy.visit('https://www.demoblaze.com/'));

  it('Should register with valid creds', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type('Qwerty123@');
    cy.get('[onclick="register()"]').click();
    cy.contains('#signInModal', 'Your registration is succesful')
      .should('be.visible');
  });
  it('Should login with valid username', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type('Qwerty123@');
    cy.get('[onclick="logIn()"]').click();
    cy.contains('#nameofuser', username)
      .should('be.visible');
  });
  it('Should not login with invalid password', () => {
    cy.contains('[href="prod.html?idp_=1"]', 'Samsung galaxy s6').click();
    cy.get('[onclick="addToCart(1)"]').click();
    cy.get('#cartur').click();
    cy.contains('td', 'Samsung galaxy s6').should('be.visible');
  });
});
