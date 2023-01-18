const LoginPage = {
	userInput: '#user_login',
	passwordInput: '#user_password',
	submitButton: 'input[name="submit"]',
	tabs: {
		account_summary_tab: '#account_summary_tab',
		account_activity_tab: '#account_activity_tab',
		transfer_funds_tab: '#transfer_funds_tab',
	},
	error: '.alert.alert-error',

	visit() {
		cy.visit('http://zero.webappsecurity.com/login.html')
	},

	login(email: string, password: string) {
		cy.get(this.userInput).type(email)
		cy.get(this.passwordInput).type(password)
		cy.get(this.submitButton).click()
	},

	validateLoginPage() {
		cy.get(this.userInput).should('be.visible')
		cy.get(this.passwordInput).should('be.visible')
		cy.get(this.submitButton).should('be.visible')
	},

	validateErrorLogin() {
		cy.get(this.error).should('be.visible')
	},

	validateSuccessfulLogin() {
		cy.get(this.tabs.account_summary_tab).should('be.visible')
		cy.get(this.tabs.account_activity_tab).should('be.visible')
		cy.get(this.tabs.transfer_funds_tab).should('be.visible')
	},
}

export const loginPage = Object.freeze(LoginPage)
