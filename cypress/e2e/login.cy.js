describe('Login', () => {
  it('successfully logs in', () => {

    cy.guiLogin()
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
  it('not successfully password incorrect', () => {
    const username = Cypress.env('USER_EMAIL')

    cy.visit('/login')
    cy.get('#email').type(username)
    cy.get('#password').type('password', { log: false })
    cy.contains('button', 'Login').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Incorrect username or password.')
    })
  })
})
