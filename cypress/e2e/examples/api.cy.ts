describe('Api', () => {
	beforeEach(() => {
		cy.visit('/posts')
	})

	it('should work', () => {
		cy.request('https://jsonplaceholder.cypress.io/users')
			.its('body')
			.should('have.length', 10)
	})

	it('get posts and have length > 1', () => {
		cy.request('GET', 'http://localhost:3000/api/posts').then(
			(response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.length.gt(1)
			}
		)
	})

	it.only('testing error', () => {
		cy.request({
			url: 'https://pokeapi.co/api/v2/3534',
			failOnStatusCode: false,
		}).then((response) => {
			expect(response.status).to.eq(404)
			expect(response.body).to.be.equal('Not Found')
		})
	})
})
