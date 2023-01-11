module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'never',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
}
