# Cibershield

Cibershield es una aplicación educativa de ciberseguridad construida con React, TypeScript y Vite. El proyecto está diseñado para ofrecer contenido interactivo sobre phishing, malware y prácticas seguras en la web.

## Qué hace esta app

- Página principal con llamada a la acción y diseño responsivo.
- Sección de malware con tarjetas informativas y contenido desplegable en móviles.
- Sección de phishing con tipos y ejercicios interactivos.
- Navegación entre páginas con React Router.
- Autenticación básica en interfaz con inicio de sesión y registro.
- Perfil de usuario y menú de usuario.
- Modales, alertas y animaciones suaves con `framer-motion` y `react-hot-toast`.

## Tecnologías usadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Hot Toast
- MUI (dependencias instaladas)

## Estructura principal

- `src/App.tsx` - punto de entrada de la aplicación.
- `src/main.tsx` - arranca Vite y React.
- `src/pages/` - páginas principales: `Home`, `Auth`, `Info`, `Training`, `User`.
- `src/components/` - componentes reutilizables como botones, modal, cards y layout.
- `src/constants/` - datos estáticos, iconos y animaciones.
- `src/entities/` - tipos y entidades de negocio.
- `src/dto/` - modelos de datos para formularios.

## Cómo ejecutar

```bash
cd Frontend
pnpm install
pnpm dev
```

Después de eso, abre el servidor local que muestre Vite, normalmente `http://localhost:5173`.

## Scripts útiles

- `pnpm dev` - inicia el servidor de desarrollo.
- `pnpm build` - genera la versión de producción.
- `pnpm preview` - vista previa del build local.
- `pnpm lint` - ejecuta ESLint.

## Notas

- El proyecto usa `pnpm` como gestor de paquetes, pero también puedes usar `npm` o `yarn` si prefieres.
- Las rutas y la navegación se manejan con `react-router-dom`.
- El contenido de la sección de phishing se carga desde datos locales en `src/constants/phishing.ts`.
- Actualmente el proyecto solo cuenta con el frontend. No hay backend implementado por el momento, ya que se priorizó la entrega rápida de la interfaz y el contenido interactivo.

## Mejoras posibles

- Conectar autenticación real con backend.
- Añadir contenido dinámico desde API.
- Crear tests unitarios y de integración.
- Ampliar el módulo de ejercicios con resultados y puntuación.
