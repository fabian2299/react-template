import { loginPage } from '../../page-objects/LoginPage'

describe('Page Object Model', () => {
	beforeEach(() => {
		loginPage.visit()
	})

	it('should try to login with invalid data', () => {
		loginPage.validateLoginPage()
		loginPage.login('invalid', 'invalid')
		loginPage.validateErrorLogin()
	})

	it('should try to login with valid data', () => {
		loginPage.validateLoginPage()
		loginPage.login('username', 'password')
		loginPage.validateSuccessfulLogin()
	})

	it('should try to login using cy.env', () => {
		const user = Cypress.env('credentials').user
		const password = Cypress.env('credentials').password

		loginPage.validateLoginPage()
		loginPage.login(user, password)
		loginPage.validateSuccessfulLogin()
	})
})

describe.only('Login with fixtures', () => {
	beforeEach(() => {
		loginPage.visit()
	})

	it('should try to login with invalid data', () => {
		loginPage.validateLoginPage()
		cy.fixture('credentials').then((credentials) => {
			loginPage.login(credentials.email, credentials.password)
		})
		loginPage.validateErrorLogin()
	})

	it.only('should try to login with invalid data', () => {
		loginPage.validateLoginPage()
		cy.fixture('users').then((users) => {
			loginPage.login(users.email, users.password)
		})
		loginPage.validateErrorLogin()
	})
})
