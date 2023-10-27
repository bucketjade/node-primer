/* globals cy */

describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Fall CS courses', () => {
    cy.visit ('/');cy.get('[data-cy=course]').should('contain', 'Fall CS');
  });

  it('shows Winter courses when Winter is selected', () => {
    cy.visit ('/');
    cy.get('[data-cy=Winter]').click();
    cy.get('[data-cy=course]').should('contain' ,'Winter');
  });

  // only if logged on:
  it('opens edit form when edit button is clicked', () => {
    cy.visit ('/');
    cy.get('[data-cy=editF111]').click();
    cy.get('[data-cy=page-title]').should('contain', 'Edit Course');
  })
});