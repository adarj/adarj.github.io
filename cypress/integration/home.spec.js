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
    cy.get('[data-cy=email-link]')
      .should('have.attr', 'href', 'mailto:akildarjean@protonmail.com');

    cy.get('[data-cy=github-link]')
      .should('have.attr', 'href', 'https://github.com/adarj');

    cy.get('[data-cy=linkedin-link]')
      .should('have.attr', 'href', 'https://linkedin.com/in/adarj');
  });

  it('About Me displays correctly', () => {
    cy.get('[data-cy=about-me-heading]').contains('ABOUT ME');
  });

  it('Experience displays correctly', () => {
    cy.get('[data-cy=experience-heading]').contains('EXPERIENCE');
  });
});
