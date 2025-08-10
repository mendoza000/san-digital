# San Digital

⚠️ **CÓDIGO PROPIETARIO - TODOS LOS DERECHOS RESERVADOS** ⚠️

**AVISO LEGAL**: Este proyecto está bajo una licencia propietaria restrictiva. Ver [LICENSE](./LICENSE) para términos completos.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Development Tools

This project is configured with a comprehensive development environment:

### Code Quality & Formatting

- **ESLint**: Linting with TypeScript support and custom rules
- **Prettier**: Code formatting with tabs (4 spaces width)
- **EditorConfig**: Consistent coding styles across editors

### Git Hooks & Commit Validation

- **Husky**: Git hooks automation
- **Lint-staged**: Run linters on staged files
- **Commitlint**: Conventional commit message validation

### Available Scripts

```bash
# Development
bun run dev          # Start development server with Turbopack

# Code Quality
bun run lint         # Run ESLint
bun run lint:fix     # Fix ESLint errors automatically
bun run format       # Format all files with Prettier
bun run format:check # Check if files are formatted
bun run type-check   # TypeScript type checking
bun run check-all    # Run all checks (types + lint + format)

# Build & Start
bun run build        # Build for production
bun run start        # Start production server

# Commits
bun run commit       # Interactive commit with conventional format
bun run commitlint   # Validate last commit message
```

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/). See [COMMIT_CONVENTIONS.md](./COMMIT_CONVENTIONS.md) for detailed guidelines.

**Examples:**

```bash
feat: add user authentication
fix: resolve login button styling issue
docs: update README with setup instructions
```

### Pre-commit Hooks

Before each commit, the following checks run automatically:

1. **Lint-staged**: Runs ESLint and Prettier on staged files
2. **Type checking**: Verifies TypeScript types
3. **Commit message validation**: Ensures conventional commit format

### Configuration Files

- `.eslintrc.config.mjs` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `.editorconfig` - Editor configuration
- `commitlint.config.js` - Commit message rules
- `.husky/` - Git hooks
- `.vscode/` - VS Code workspace settings

## 📁 Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable components
├── lib/          # Utility functions
└── styles/       # Global styles
```

## 🎯 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Forms**: React Hook Form
- **Database**: Supabase
- **UI Components**: shadcn/ui

## 📝 Contributing

1. Clone the repository
2. Install dependencies: `bun install`
3. Create a feature branch: `git checkout -b feat/your-feature`
4. Make your changes (hooks will run automatically on commit)
5. Push and create a Pull Request

### Code Style

- Use **tabs** for indentation (4 spaces width)
- Follow **conventional commits** for messages
- Run `bun run check-all` before pushing
- All files must pass ESLint and Prettier checks

## 🚫 No Console Logs

Console statements (`console.log`, `console.warn`, etc.) are treated as **errors** in this project. Use proper debugging tools instead.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## 🚫 Licencia

**CÓDIGO PROPIETARIO - TODOS LOS DERECHOS RESERVADOS**

Este software es propiedad exclusiva de mendoza000. Está PROHIBIDO:

- Usar este código para cualquier propósito
- Copiar, modificar, distribuir o crear trabajos derivados
- Usar como referencia o inspiración para otros proyectos

Ver el archivo [LICENSE](./LICENSE) para los términos legales completos.

**Si no acepta estos términos, NO está autorizado a acceder o usar este código.**
