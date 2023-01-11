/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'http://127.0.0.1:5173/',
		viewportHeight: 1080,
		viewportWidth: 1536,
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// },
	},
})
