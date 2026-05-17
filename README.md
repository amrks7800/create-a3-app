# 🚀 Create AM3 App (`create-am3-app`)

The ultimate, zero-boilerplate starter kit for modern, high-performance web applications built with **Next.js**, **Tailwind CSS v4**, **TypeScript**, **TanStack Query**, and **Elegant Store**.

Designed to give you the most efficient, type-safe, and lightning-fast developer experience right out of the box.

---

## ✨ Features

- ⚡ **Next.js (App Router)** - Leverage modern Server Components, Suspense, and optimal routing architecture.
- 🎨 **Tailwind CSS v4** - Experience the raw speed of Tailwind's new CSS-first engine. Powered by `@tailwindcss/postcss`, it eliminates complex JS configs and puts your theme configuration exactly where it belongs: inside standard CSS.
- 🔄 **TanStack Query (React Query)** - Powerful asynchronous state synchronization, caching, and background data-fetching pre-configured.
- 📦 **Elegant Store** - Simple, robust, and lightweight client-side state management for seamless user interactions.
- 🛡️ **TypeScript** - Fully type-safe environment for building production-ready code with confidence.
- 🛠️ **Universal Scaffolding CLI** - Choose your favorite package manager (`npm`, `yarn`, `pnpm`, or `bun`) during project initialization.

---

## 🚀 Getting Started

To create a new app, simply run:

```bash
npx create-am3-app my-amazing-app
```

The interactive CLI will prompt you to select your preferred package manager (default is `pnpm`) and fully scaffold your workspace:

```bash
Which package manager do you want to use? (npm/yarn/pnpm/bun) [pnpm]: 
```

Once the CLI finishes downloading the templates and installing dependencies, you are ready to build!

---

## 🛠️ Development Commands

Within your newly created app directory, you can run the following commands:

| Command | Description |
|:---|:---|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality issues |

*(Note: Replace `npm` with `pnpm`, `yarn`, or `bun` depending on the package manager you selected during setup.)*

---

## 📁 Project Structure

Here is a quick overview of the pre-configured project files:

```text
├── bin/                 # CLI scaffolding scripts (removed in the generated app)
├── public/              # Static assets (images, icons, etc.)
└── src/
    └── app/
        ├── globals.css  # Global styles and Tailwind CSS v4 setup
        ├── layout.tsx   # Root layout with global providers configured
        ├── page.tsx     # Beautiful showcase homepage
        ├── providers.tsx# Client-side React Query & state provider wrapper
```

---

## 🎨 Tailwind CSS v4 configuration (Zero JS Config)

We have upgraded this project to **Tailwind CSS v4**, which removes the legacy `tailwind.config.js` in favor of a CSS-first approach. All theme definitions are now written directly inside [src/app/globals.css](file:///e:/projects/create-a3-app/src/app/globals.css)!

### Extends Theme Variables (e.g. Fonts)
To extend your theme, use the `@theme` directive in CSS:

```css
@import "tailwindcss";

@theme {
  --font-base: var(--ff-base);
  --font-title: var(--ff-title);
}
```

This ensures that Tailwind v4 builds your styles at the speed of light using native CSS features, keeping your bundle size tiny and build times near-instant.

---

## 🧐 Powered By

- **[Next.js Docs](https://nextjs.org/)**
- **[Tailwind CSS v4 Docs](https://tailwindcss.com/)**
- **[TanStack Query Docs](https://tanstack.com/query/latest)**
- **[Elegant Store npm](https://www.npmjs.com/package/elegant-store)**

---

*Remember, the web is a better place with your creations! Happy Hacking!* 🌟 
Created by **Amr Khalid**
