# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# MyProList Frontend

A modern React + Vite + Ant Design + Tailwind CSS project management dashboard. This app allows users to manage projects and tasks, collaborate with team members, and stay notified of updates.

## Features

- User authentication (login/logout)
- Dashboard with:
  - My Projects section (cards for each project)
  - My Tasks section (cards for each task)
  - Add Project and Add Task modals
  - Task details modal (view, update status, comments)
  - Commenting system with add/remove for own comments
  - Task search by title/description
  - Notification bell with modal and mark-as-read
- Responsive, clean UI using Ant Design and Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/Gudduvaiya/teamtasker-assignment-frontend.git
  cd myprolist-frontend
  ```
2. Install dependencies:
  ```sh
  npm install
  # or
  yarn install
  ```
3. Start the development server:
  ```sh
  npm run dev
  # or
  yarn dev
  ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/screens/Home.tsx` — Main dashboard (projects, tasks, notifications)
- `src/component/` — Reusable UI components (e.g., AddCommentSection)
- `src/lib/services/APIServices.ts` — API service functions

## Customization
- Connect to your backend by updating API endpoints in `APIServices.ts`.
- Adjust Ant Design and Tailwind CSS styles as needed.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## License

MIT

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
