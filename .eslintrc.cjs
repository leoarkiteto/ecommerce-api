module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:prettier/recommended"
	],
	overrides: [
		{
			env: {
				"node": true
			},
			files: [
				".eslintrc.{js,cjs}"
			],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "tsconfig.json"
	},
	plugins: [
		"@typescript-eslint"
	],
	rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
          {
              "": "never",
              js: "never",
              jsx: "never",
              ts: "never",
              tsx: "never",
              mjs: "never",
              cjs: "never",
          }
      ]
  }
};
