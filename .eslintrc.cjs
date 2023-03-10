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
	ignorePatterns: [
		'node_modules',
		'dist',
		'build',
		'coverage',
		'public',
		'cypress',
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'import/prefer-default-export': 0,
		'import/extensions': 0,
		'prettier/prettier': 2,
		'arrow-body-style': 0,
		'prefer-arrow-callback': 0,
		'@typescript-eslint/no-unused-vars': [
			1,
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
}
