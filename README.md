Here is a comprehensive `README.md` for your project, based on the code provided.

---

# IT Course Enrollment App

A modern, cyberpunk-themed web application designed for an intensive IT training program. This project features a React-based frontend built with TypeScript and Vite, including an interactive AI assistant to help international students with the enrollment process.

## 🚀 Features

* **AI Enrollment Assistant**: Integrated chat interface that communicates with an AI backend to collect student details (name, email, interests) and guide them through enrollment.
* **Cyberpunk UI Design**: A distinct "Launch Your IT Career" aesthetic utilizing neon green/cyan colors (`#00ff9d`, `#646cff`), glow effects, and futuristic fonts (`Orbitron`, `Rajdhani`).
* **Responsive Layout**: Built with Tailwind CSS to ensure a seamless experience across desktop and mobile devices.
* **Interactive Components**: Custom-built, reusable components including Cards, Buttons, and Inputs.

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) (v18)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `clsx` and `tailwind-merge` for class utility management.
* **Icons**: [Lucide React](https://lucide.dev/)
* **Linting**: ESLint

## 📂 Project Structure

```text
src/
├── assets/         # Static assets (images, SVGs)
├── components/     # Reusable UI components (Button, Card, Input, Icon)
├── lib/            # Utility functions (cn for class merging)
├── App.tsx         # Main application logic and UI layout
├── App.css         # Component-specific styles
├── index.css       # Global styles and theme definitions
├── main.tsx        # Application entry point
└── vite-env.d.ts   # Vite type definitions

```

## ⚡ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18 or higher recommended)
* npm (or yarn/pnpm)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/swarpya/it-course-app.git
cd it-course-app

```


2. **Install dependencies:**
```bash
npm install

```



### Running the App

Start the development server with hot module replacement (HMR):

```bash
npm run dev

```

The application will typically run at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build

```

This will compile your project into the `dist` directory, ready for deployment.

### Previewing Production Build

To locally preview the production build:

```bash
npm run preview

```

## 🔧 Configuration

* **Tailwind CSS**: Configured in `tailwind.config.js` and `postcss.config.js`.
* **Vite**: Settings can be modified in `vite.config.ts`. Alias `@` is set to resolve to the `src` directory.
* **TypeScript**: Rules defined in `tsconfig.json` and `tsconfig.app.json`.

## 👤 Author

**Swaroop Ingavale**

* Email: swaroopingavale73@gmail.com

---

*Made with ❤️ in Canada*
