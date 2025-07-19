# Modern Boilerplate: React, Vite, TypeScript, Zustand & Tailwind CSS

This is a robust, production-ready boilerplate built with a modern tech stack, designed for a fast, scalable, and developer-friendly development experience.

## ✨ Features

- **Framework**: React 19
- **Bundler**: Vite
- **Language**: TypeScript
- **State Management**: Zustand (with a slices pattern)
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios (with interceptors for tokens and errors)
- **Linting**: ESLint
- **Testing**: Vitest & React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or you can use npm/yarn)

### Installation

1.  **Clone the repository** (or use this boilerplate):
    ```bash
    git clone <your-repository>
    cd <your-repository>
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Set up environment variables**:
    Copy the `.env.example` file to a new file named `.env` and adjust the API URL if necessary.
    ```bash
    cp .env.example .env
    ```

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Compiles the application for production.
- `pnpm lint`: Runs the linter to check the code.
- `pnpm test`: Runs the tests.
- `pnpm preview`: Previews the production build locally.

## 🏛️ Project Structure


.
├── tests          # Testing configuration and files
├── public             # Static assets
├── src                # Application source code
│   ├── components     # Reusable UI components
│   ├── lib            # Libraries and external clients
│   ├── pages          # Components representing pages/routes
│   ├── routes         # Routing configuration
│   ├── services       # Business logic and API calls
│   ├── store          # Global state management (Zustand)
│   └── types          # TypeScript type definitions
├── .env.example       # Environment variables example
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
└── vite.config.ts     # Vite and Vitest configuration


## 🔑 Authentication

The boilerplate includes a complete and secure authentication flow:

- **Single Public Route**: The `/login` page is the only route accessible to unauthenticated users.
- **Protected Routes**: All other routes are protected. If an unauthenticated user tries to access them, they will be redirected to the login page.
- **Protected Layout**: The `Layout` (with Header and Footer) is only applied to protected routes, keeping the login page clean.
- **Authentication State**: Managed with Zustand in `store/slices/auth.slice.ts`.
- **Persistence**: The session token is saved in `localStorage` to keep the user authenticated across visits.
- **API Simulation**: The `services/auth.service.ts` file simulates a login API so you can test the flow without a real backend.

## ✅ Testing

The testing setup is ready to use with **Vitest** and **React Testing Library**, centralized in the `__tests__` folder at the project root.

- **Configuration**: Defined in `vite.config.ts` and `__tests__/setup.ts`.
- **To create a test**: Create a file with the `.test.tsx` extension (e.g., `Header.test.tsx`) inside the `__tests__` folder, replicating the `src` folder's structure.
