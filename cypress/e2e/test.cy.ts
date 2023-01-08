describe('My First Test', () => {
  it('Goes to home and expect home string to exists', () => {
    cy.visit('/')
    cy.findByRole('link', { name: /posts/i }).should('exist')
  })
})

export {}
