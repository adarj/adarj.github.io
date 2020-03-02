/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Main Heading displays correctly', () => {
    cy.get('[data-cy=title]').contains('AKIL DARJEAN');
    cy.get('[data-cy=subtitle]').contains('SOFTWARE DEVELOPER');
  });

  it('About Me displays correctly', () => {
    cy.get('[data-cy=about-me-heading]').contains('ABOUT ME');
  });

  it('Experience displays correctly', () => {
    cy.get('[data-cy=experience-heading]').contains('EXPERIENCE');
  });
});
