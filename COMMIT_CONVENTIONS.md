# Conventional Commits - Guía de Formato

Este proyecto utiliza **Conventional Commits** para mantener un historial de cambios claro y consistente.

## Formato

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie(s) de página opcional(es)]
```

## Tipos permitidos

- **feat**: Nueva característica para el usuario
- **fix**: Corrección de un bug
- **docs**: Cambios en la documentación
- **style**: Cambios de formato que no afectan el significado del código
- **refactor**: Refactoring de código que no corrige bugs ni añade características
- **perf**: Cambios que mejoran el rendimiento
- **test**: Añadir tests faltantes o corregir tests existentes
- **chore**: Cambios en el proceso de build o herramientas auxiliares
- **ci**: Cambios en archivos de configuración de CI
- **build**: Cambios que afectan el sistema de build o dependencias externas
- **revert**: Revierte un commit anterior

## Ejemplos válidos

### Características nuevas

```bash
feat: añadir componente de login
feat(auth): implementar autenticación con Google
feat: añadir validación de formularios con react-hook-form
```

### Correcciones

```bash
fix: corregir error de validación en el formulario
fix(ui): solucionar problema de responsive en mobile
fix: resolver memory leak en el componente de usuario
```

### Documentación

```bash
docs: actualizar README con instrucciones de instalación
docs(api): añadir documentación de endpoints
```

### Refactoring

```bash
refactor: simplificar lógica del componente Header
refactor(utils): optimizar función de formateo de fechas
```

### Estilos

```bash
style: formatear código según prettier
style: corregir indentación en archivos CSS
```

### Tests

```bash
test: añadir tests para el componente Button
test(auth): implementar tests de integración
```

### Configuración

```bash
chore: actualizar dependencias
chore(deps): bump next from 15.4.5 to 15.4.6
ci: añadir workflow de GitHub Actions
build: configurar webpack para optimización
```

## Reglas importantes

1. **Usar minúsculas** para el tipo
2. **No terminar con punto** la descripción
3. **Máximo 100 caracteres** en la primera línea
4. **Usar modo imperativo** ("añadir" no "añadido")
5. **Incluir scope** cuando sea relevante (opcional)

## Commits que rompen compatibilidad

Para cambios que rompen compatibilidad, añadir `!` después del tipo:

```bash
feat!: cambiar API de autenticación
refactor!: renombrar prop 'name' a 'title' en Button
```

O incluir `BREAKING CHANGE:` en el pie de página:

```bash
feat: permitir configuración personalizada

BREAKING CHANGE: el archivo de configuración ahora debe estar en la raíz del proyecto
```
