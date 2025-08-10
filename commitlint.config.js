module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // Nueva característica
				"fix", // Corrección de bug
				"docs", // Cambios en documentación
				"style", // Cambios de formato (sin afectar el código)
				"refactor", // Refactoring de código
				"perf", // Mejoras de rendimiento
				"test", // Añadir o corregir tests
				"chore", // Tareas de mantenimiento
				"ci", // Cambios en CI/CD
				"build", // Cambios en el sistema de build
				"revert", // Revertir cambios
			],
		],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"scope-case": [2, "always", "lower-case"],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"header-max-length": [2, "always", 100],
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [2, "always"],
	},
}
