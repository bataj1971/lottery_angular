describe('Lottery Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Lottery')
  });

      it('Login button should be initally disabled', () => {
        cy.visit('/');
        cy.get('.submit-login').should('be.disabled');
      });


    it('Select user from the list', () => {
      cy.visit('/');
      cy.get('.toggle-user-list').click();

      cy.get('.user-list');
      cy.get('.user-list .user-account').first().click();
      cy.get('.submit-login').should('be.enabled');
      cy.get('.submit-login').click();

      cy.get('.number-container');
    });
})
