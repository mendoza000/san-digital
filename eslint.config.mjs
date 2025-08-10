import { FlatCompat } from "@eslint/eslintrc"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	prettierConfig,
	{
		plugins: {
			"unused-imports": unusedImports,
			prettier: prettierPlugin,
		},
		rules: {
			// Prettier como regla de ESLint
			"prettier/prettier": "error",
			// Marcar console.log como error
			"no-console": "error",
			// Marcar variables no utilizadas como error
			"no-unused-vars": "off", // Desactivamos la regla base
			"@typescript-eslint/no-unused-vars": "error",
			// Marcar imports no utilizados como error
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},
]

export default eslintConfig
