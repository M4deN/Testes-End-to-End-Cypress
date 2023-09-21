describe('Login', () => {
  it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.guiLogin()
    cy.wait('@getNotes')
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
  it('not successfully password incorrect', () => {

    cy.guiLogin(Cypress.env('USER_EMAIL'), 'PasswordIncorrect')
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Incorrect username or password.')
    })
  })
})
