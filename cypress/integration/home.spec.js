/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Main Heading displays correctly', () => {
    cy.get('[data-cy=title]').contains('Akil Darjean');
    cy.get('[data-cy=subtitle]').contains('Software Developer');
  });

  it('About Me displays correctly', () => {
    cy.get('[data-cy=about-me-heading]').contains('About Me');
  });

  it('Experience displays correctly', () => {
    cy.get('[data-cy=experience-heading]').contains('Experience');
  });
});
