describe('My First Test', () => {
  it('Goes to home and expect home string to exists', () => {
    cy.visit('http://127.0.0.1:5173')
    cy.findByRole('link', { name: /posts/i }).should('exist')
  })
})
