/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Main Heading displays correctly', () => {
    cy.get('[data-cy=title]').contains('Akil Darjean');
    cy.get('[data-cy=subtitle]').contains('Software Developer');
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
    cy.get('[data-cy=about-me-heading]').contains('About Me');
  });

  it('Experience displays correctly', () => {
    cy.get('[data-cy=experience-heading]').contains('Experience');
  });

  it('Skills displays correctly', () => {
    cy.get('[data-cy=skills-heading]').contains('Skills');
  });

  it('Certificates displays correctly', () => {
    cy.get('[data-cy=certificates-heading]').contains('Certificates');
  });

  it('Projects displays correctly', () => {
    cy.get('[data-cy=projects-heading]').contains('Projects');
  });
});
