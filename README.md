![App Logo](https://tuning.themerex.net/wp-content/uploads/2024/07/img-002-copyright.jpg)

# Car Detailing Service — Frontend

Modern frontend application for a **Car Detailing Service** website built with **React, Vite, HeroUI and Tailwind CSS**.
The project provides a scalable UI foundation with clean architecture, reusable components and consistent code formatting.

---

## Overview

This project is designed as a frontend foundation for a car detailing business.
It focuses on performance, maintainability, and developer experience.

Key goals:

* Clean component architecture
* Reusable UI components
* Modern styling with Tailwind
* Fast development workflow with Vite
* Consistent code formatting with Biome

---

## Tech Stack

* **Vite** — fast development server and build tool
* **React** — UI library
* **HeroUI v3** — component library
* **Tailwind CSS v4** — utility-first styling
* **TypeScript** — type safety
* **Biome** — formatter and linter

---

## Project Structure

```bash
src/
  components/     # Reusable UI components
  layouts/        # Layout components (Navbar, Footer, etc.)
  pages/          # Application pages
  styles/         # Global styles
  config/         # App configuration
  types/          # TypeScript types
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd car-detailing-service
```

### 2. Install dependencies

```bash
npm install
```

---

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

---


## Available Scripts

### Start development server

```bash
npm run dev
```

Runs Vite in development mode with hot reload.

---

### Build production version

```bash
npm run build
```

This command:

1. Runs TypeScript type checking
2. Builds optimized production bundle

Output folder:

```bash
dist/
```

---

Formats all project files using Biome.

Equivalent to:

```bash
npx biome format . --write
```

---

### Fix lint and formatting issues

```bash
npm run fix
```

Automatically fixes:

* formatting
* lint issues
* import order

---

## Code Formatting

This project uses **Biome** for formatting and linting.

To format the entire project:

```bash
npm run format
```

Example:

```css
:root {
  --background: #050505;
  --foreground: #ffffff;
}
```

---

## Recommended VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome"
}
```

---

The vercel link:

[Open app](https://car-detailing-service.vercel.app/)

## License

MIT License
