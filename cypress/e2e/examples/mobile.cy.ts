describe('Mobile', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('mobile view', () => {
		cy.viewport('iphone-8')
		cy.get('div').contains('Home').last().should('be.visible')
	})
})
