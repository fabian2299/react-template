const ONE_SECOND = 1000
const FIFTEEN_SECONDS = 15 * ONE_SECOND
const THIRTY_SECONDS = 30 * ONE_SECOND
const SIXTY_SECONDS = 60 * ONE_SECOND

describe('Intercept', () => {
	beforeEach(() => {
		cy.visit('/posts')
	})

	it('review request', () => {
		cy.request('GET', 'http://localhost:3000/api/posts')
			.as('posts')
			.then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.length.gt(1)
				cy.log(response.body)
			})
	})

	it('intercept', () => {
		cy.intercept('GET', 'http://localhost:3000/api/posts').as('posts')
		// either way works
		cy.wait('@posts').then((interception) => {
			cy.log(interception as any)
		})
		cy.wait('@posts').its('response.statusCode').should('eq', 304)
	})

	it.only('intercept and force an error', () => {
		cy.intercept('GET', 'http://localhost:3000/api/posts', {
			forceNetworkError: true,
		}).as('posts')
		cy.wait('@posts').then((interception) => {
			cy.log(interception as any)
		})
		cy.findByText('Error').should('exist')
	})
})
