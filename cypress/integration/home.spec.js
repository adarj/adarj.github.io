/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Hero displays correctly', () => {
    cy.get('[data-cy=title]').contains('AKIL DARJEAN');
    cy.get('[data-cy=subtitle]').contains('SOFTWARE DEVELOPER');
  });

  it('Links resolve to correct address', () => {
    cy.get('[data-cy=email-link]');
    cy.get('[data-cy=github-link]');
    cy.get('[data-cy=linkedin-link]');
  });

  it('About Me displays correctly', () => {
    cy.get('[data-cy=about-me-heading]').contains('ABOUT ME');
  });

  it('Experience displays correctly', () => {
    cy.get('[data-cy=experience-heading]').contains('EXPERIENCE');
  });
});
