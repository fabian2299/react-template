describe('My First Test', () => {
	it('Goes to home and expect home string to exists', () => {
		cy.visit('/posts')
		// open create post modal
		cy.findByRole('button', { name: /create post/i }).click()
		// type to title input
		cy.findByLabelText(/title/i).type('My first post')
		// type to body input
		cy.findByLabelText(/body/i).type('My first post body')
		// click on submit button
		cy.get('button[type="submit"]').click()
		// post created toast should be visible
		cy.findByText(/post created/i).should('exist')
	})
})
