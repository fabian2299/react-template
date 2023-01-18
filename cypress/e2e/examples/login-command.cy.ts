describe('Login with Custom Command', () => {
	it('should try to login with invalid data', () => {
		cy.login('invalid', 'invalid')
		cy.get('.alert.alert-error').should('be.visible')
	})
})
