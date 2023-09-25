Cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
  cy.intercept('GET', '**/notes').as('getNotes')
  cy.visit('/signup')
  cy.get('#email').should('be.visible').type(email)
  cy.get('#password').should('be.visible').type(password, { log: false })
  cy.get('#confirmPassword').should('be.visible').type(password, { log: false })
  cy.contains('button', 'Signup').should('be.visible').click()
  cy.get('#confirmationCode').should('be.visible')
  cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
    sentTo: email
  }).then(message => {
    const confirmationCode = message.html.body.match(/\d{6}/)[0]
    cy.get('#confirmationCode').should('be.visible').type(`${confirmationCode}{enter}`)
    cy.wait('@getNotes')
  })
})

Cypress.Commands.add('guiLogin', (

  username = Cypress.env('USER_EMAIL'),
  password= Cypress.env('USER_PASSWORD')
) => {
  cy.visit('/login')
  cy.get('#email').should('be.visible').type(username)
  cy.get('#password').should('be.visible').type(password),{log:false}
  cy.contains('button', 'Login').should('be.visible').click()

})

Cypress.Commands.add('sessionLogin', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD')
) => {
  const login = () => cy.guiLogin(username, password)
  cy.session(username, login)
})