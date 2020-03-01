/// <reference types="cypress" />

describe('Main Heading', () => {
  it('displays correctly', () => {
    cy.visit('/');
    cy.get('[data-cy=title]').contains('Akil Darjean');
    cy.get('[data-cy=subtitle]').contains('Software Developer');
  });
});
