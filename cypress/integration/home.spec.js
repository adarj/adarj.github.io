/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Main Heading displays correctly', () => {
    cy.get('[data-cy=title]').contains('AKIL DARJEAN');
    cy.get('[data-cy=subtitle]').contains('SOFTWARE DEVELOPER');
  });
});
