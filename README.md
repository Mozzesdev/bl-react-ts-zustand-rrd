# Boilerplate Moderno: React, Vite, TypeScript, Zustand y Tailwind CSS

Este es un boilerplate robusto y listo para producción construido con un stack tecnológico moderno, diseñado para un desarrollo rápido, escalable y con una excelente experiencia para el desarrollador.

## ✨ Características

- **Framework**: React 19
- **Bundler**: Vite
- **Lenguaje**: TypeScript
- **Gestión de Estado**: Zustand (con patrón de slices)
- **Enrutamiento**: React Router DOM
- **Estilos**: Tailwind CSS 4
- **Cliente HTTP**: Axios (con interceptores para tokens y errores)
- **Linting**: ESLint
- **Testing**: Vitest y React Testing Library

## 🚀 Cómo Empezar

### Prerrequisitos

- Node.js (v18 o superior)
- pnpm (o puedes usar npm/yarn)

### Instalación

1.  **Clona el repositorio** (o usa este boilerplate):
    ```bash
    git clone <tu-repositorio>
    cd <tu-repositorio>
    ```

2.  **Instala las dependencias**:
    ```bash
    pnpm install
    ```

3.  **Configura las variables de entorno**:
    Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y ajusta la URL de la API si es necesario.
    ```bash
    cp .env.example .env
    ```

4.  **Ejecuta el servidor de desarrollo**:
    ```bash
    pnpm dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila la aplicación para producción.
- `pnpm lint`: Ejecuta el linter para revisar el código.
- `pnpm test`: Ejecuta las pruebas.
- `pnpm preview`: Previsualiza la build de producción localmente.

## 🏛️ Estructura del Proyecto


src
├── components         # Componentes reutilizables (UI)
│   ├── common         # Componentes genéricos (botones, inputs, etc.)
│   └── layout         # Componentes de estructura (Header, Footer, Layout)
├── lib                # Librerías y clientes externos (ej. apiClient)
├── pages              # Componentes que representan páginas/rutas
├── routes             # Configuración de enrutamiento
├── services           # Lógica de negocio y llamadas a la API
├── store              # Gestión de estado global (Zustand)
│   └── slices         # Divisiones del store por funcionalidad
├── test               # Configuración y archivos de testing
├── types              # Definiciones de tipos de TypeScript
├── App.tsx            # Componente raíz de la aplicación
├── main.tsx           # Punto de entrada de la aplicación
└── index.css          # Estilos globales


## 🔑 Autenticación

El boilerplate incluye un flujo de autenticación completo:

- **Estado de Autenticación**: Gestionado con Zustand en `store/slices/auth.slice.ts`.
- **Persistencia**: El token de sesión se guarda en `localStorage` para mantener al usuario autenticado entre visitas.
- **Rutas Protegidas**: El componente `routes/ProtectedRoute.tsx` restringe el acceso a ciertas rutas solo para usuarios autenticados.
- **Página de Login**: Un formulario de ejemplo en `pages/LoginPage.tsx`.
- **Simulación de API**: El archivo `services/auth.service.ts` simula una API de login para que puedas probar el flujo sin un backend real.

## ✅ Testing

La configuración de testing está lista para usar con **Vitest** y **React Testing Library**.

- **Configuración**: Definida en `vite.config.ts` y `src/test/setup.ts`.
- **Para crear una prueba**: Crea un archivo con la extensión `.test.tsx` (ej. `MiComponente.test.tsx`) dentro de la misma carpeta que el componente que quieres probar.
