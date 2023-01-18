describe('Cookies', () => {
	beforeEach(() => {
		cy.clearCookies()
		cy.visit('/')
	})

	it('get cookies', () => {
		cy.getCookies().should('be.empty')
	})

	it('set cookies', () => {
		cy.setCookie('foo', 'bar')
		cy.getCookie('foo').should('have.property', 'value', 'bar')
	})
})
