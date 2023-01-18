describe('Flaky test', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	it('single query commands', () => {
		// bad
		cy.get('div').contains('Home').should('be.visible')
		// better
		cy.contains('div', 'Home').should('be.visible')
	})

	it('alternate commands with assertions', () => {
		// bad
		cy.get('input').click()
		// better
		cy.get('input').should('be.visible').click()
	})
})
