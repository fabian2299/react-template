/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress'

// search allure for test results later

export default defineConfig({
	projectId: 'xg3282',
	e2e: {
		baseUrl: 'http://127.0.0.1:5173/',
		viewportHeight: 1080,
		viewportWidth: 1280,
		setupNodeEvents(_on, _config) {
			// implement node event listeners here
		},
	},
	retries: {
		runMode: 2,
		openMode: 0,
	},
	env: {
		credentials: {
			user: 'username',
			password: 'password',
		},
	},
})
