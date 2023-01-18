describe('examples', () => {
	it('Selectors', () => {
		// get by tag
		cy.get('div')
		// get by id
		cy.get('#id')
		// get by class
		cy.get('.class.another-class')
		// get by attribute
		cy.get('input[placeholder="name"]')
		cy.get('[data-cy="data-cy"]')
		// get by role
		cy.findByRole('button', { name: /create post/i })
		// get by label
		cy.findByLabelText(/title/i)
		// get by text
		cy.findByText(/post created/i)
		cy.contains('text')
		// more...
		cy.get('div').contains('text')
		cy.get('div').find('div')
		// get the parent of the element
		cy.get('div').parent()
		cy.get('div').parents().find('div')
		// get the child of the element
		cy.get('div').children()
		// get the sibling of the element
		cy.get('div').siblings()
		// get the next sibling of the element
		cy.get('div').next()
		// get the previous sibling of the element
		cy.get('div').prev()
		// get the first element
		cy.get('div').first()
		// get the last element
		cy.get('div').last()
		// get the nth element
		cy.get('div').eq(2)
		// get from within the element
		cy.get('form').within(() => {
			cy.get('input')
		})
	})

	it('Assertions', () => {
		// assert that the element exists
		cy.get('div').should('exist')
		// assert that the element is visible
		cy.get('div').should('be.visible')
		// assert that the element is not visible
		cy.get('div').should('not.be.visible')
		// assert that the element is disabled
		cy.get('div').should('be.disabled')
		// assert that the element is not disabled
		cy.get('div').should('not.be.disabled')
		// assert that the element is checked
		cy.get('div').should('be.checked')
		// assert that the element is not checked
		cy.get('div').should('not.be.checked')
		// assert that the element is selected
		cy.get('div').should('be.selected')
		// assert that the element is not selected
		cy.get('div').should('not.be.selected')
		// assert that the element is focused
		cy.get('div').should('be.focused')
		// assert that the element is not focused
		cy.get('div').should('not.be.focused')
		// assert that the element is empty
		cy.get('div').should('be.empty')
		// assert that the element is not empty
		cy.get('div').should('not.be.empty')
		// assert that the element has the class
		cy.get('div').should('have.class', 'class')
		// assert that the element has the attribute
		cy.get('div').should('have.attr', 'data-cy')
		// assert that the element has the value
		cy.get('div').should('have.value', 'value')
		// assert that the element has the text
		cy.get('div').should('have.text', 'text')
		// assert that the element has the html
		cy.get('div').should('have.html', 'html')
		// assert that the element has the data
		cy.get('div').should('have.data', 'data')
		// assert that the element has the id
		cy.get('div').should('have.id', 'id')
		// assert that the element has the length
		cy.get('div').should('have.length', 2)
		// assert that the element has the length greater than
		cy.get('div').should('have.length.greaterThan', 2)
		// assert that the element has the length greater than or equal to
		cy.get('div').should('have.length.gte', 2)
		// assert that the element has the length less than
		cy.get('div').should('have.length.lessThan', 2)
		// assert that the element has the length less than or equal to
		cy.get('div').should('have.length.lte', 2)
		// assert that the element has the length between
		cy.get('div').should('have.length.within', 2, 4)
		// assert that the element has the length not between
		cy.get('div').should('have.length.not.within', 2, 4)
		// assert that the element is equal
		cy.get('div').should('eq', 2)
	})

	it('debug', () => {
		// debug the element
		cy.get('div').debug()
		// debug the element with the message
		cy.get('div').debug({
			log: true,
		})
	})

	it('types of waits', () => {
		// wait for the element to be visible
		cy.get('div').should('be.visible')
		// wait for the element to be visible
		cy.get('div').wait(1000)
		// wait for the element to be visible
		cy.get('div').wait('@request')
		// wait for the element to be visible
		cy.get('div').wait(['@request', '@request2'])
		// with timeout
		cy.get('div', { timeout: 10000 })
	})

	it('inputs, checkboxes, ranges, selects', () => {
		// type into the element
		cy.get('input').type('text')
		// type into the element with the options
		cy.get('input').type('text', { delay: 100 })
		// clear the element
		cy.get('input').clear()
		// clear the element with the options
		cy.get('input').clear({ force: true, log: true, timeout: 10000 })
		// check the element
		cy.get('input').check()
		// uncheck the element
		cy.get('input').uncheck()
		// range the element
		cy.get('input').invoke('val', 50).trigger('change')
		// select the option
		cy.get('select').select('option')
	})

	it('interacting with tables', () => {
		// get the table
		cy.get('table')
		// get the table body
		cy.get('table').find('tbody')
		// get the table row
		cy.get('table').find('tr')
		// get the table cell
		cy.get('table').find('td')
		// get the table cell by text
		cy.get('table').contains('td', 'text')
		// get the table cell by index
		cy.get('table').find('td').eq(2)
	})

	it('simulating drag and drop with events', () => {
		// drag the element
		cy.get('div').trigger('mousedown', { which: 1 })
		// move the element
		cy.get('div').trigger('mousemove', { which: 1, pageX: 100, pageY: 100 })
		// drop the element
		cy.get('div').trigger('mousemove').trigger('mouseup')
	})
})
