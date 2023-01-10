describe('CRUD operations related to posts', () => {
	const postBody = {
		title: 'test title post',
		body: 'test title body',
	}

	beforeEach(() => {
		cy.visit('/posts')
	})

	it('create post', () => {
		// open create post modal
		cy.findByRole('button', { name: /create post/i }).click()
		// type to title input
		cy.findByLabelText(/title/i).type(postBody.title)
		// type to body input
		cy.findByLabelText(/body/i).type(postBody.body)
		// click on submit button
		cy.get('form').within(() => {
			cy.findByRole('button', { name: /create/i }).click()
		})
		// post created toast should be visible
		cy.findByText(/post created/i).should('exist')
		// post should be visible in the list
		cy.findAllByText(postBody.title).first().should('exist')
	})

	it('delete post', () => {
		cy.findByRole('button', { name: /create post/i }).click()
		// type to title input
		cy.findByLabelText(/title/i).type(postBody.title)
		// type to body input
		cy.findByLabelText(/body/i).type(postBody.body)
		// click on submit button
		cy.get('form').within(() => {
			cy.findByRole('button', { name: /create/i }).click()
		})
		cy.findAllByRole('button', { name: /delete post/i })
			.last()
			.click()
		cy.findByText(/post deleted/i).should('exist')
		cy.findByText(postBody.title).should('not.exist')
	})

	it('update post', () => {
		cy.visit('/posts/26')
		cy.findByRole('button', { name: /update post/i }).click()
		cy.findByLabelText(/title/i).clear().type('updated title')
		cy.findByLabelText(/body/i).clear().type('updated body')
		cy.get('form').within(() => {
			cy.findByRole('button', { name: /update/i }).click()
		})
		cy.findByText(/post updated/i).should('exist')
		cy.findByText('updated title').should('exist')
		cy.findByText('updated body').should('exist')

		cy.visit('/posts')
		cy.findByText('updated title').should('exist')
	})
})
