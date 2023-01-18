describe('Local Storage', () => {
	beforeEach(() => {
		cy.clearLocalStorage()
		cy.visit('/')
	})

	it('get all local storage', () => {
		cy.getAllLocalStorage().should('be.empty')
	})

	it('get local storage', () => {
		cy.get('body').then(() => {
			localStorage.setItem('foo', 'bar')
		})

		cy.get('body').then(() => {
			expect(localStorage.getItem('foo')).to.equal('bar')
		})

		cy.getAllLocalStorage().then((ls) => {
			expect(ls).to.deep.equal({
				'http://127.0.0.1:5173': {
					foo: 'bar',
				},
			})
		})
	})
})
