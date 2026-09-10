# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
beenet-computer
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ beenet-logo.png
├─ README.md
├─ src
│  ├─ api
│  ├─ App.jsx
│  ├─ components
│  │  ├─ layout
│  │  │  └─ common
│  │  │     ├─ Container.jsx
│  │  │     ├─ Footer.jsx
│  │  │     ├─ Header.jsx
│  │  │     └─ LogoCoin.jsx
│  │  └─ ui
│  │     ├─ Accordion
│  │     │  ├─ Accordion.jsx
│  │     │  └─ index.js
│  │     ├─ Button
│  │     │  ├─ Button.jsx
│  │     │  └─ index.js
│  │     ├─ Card
│  │     │  ├─ Card.jsx
│  │     │  └─ index.js
│  │     ├─ index.js
│  │     ├─ Particles
│  │     │  ├─ index.js
│  │     │  └─ Particles.jsx
│  │     ├─ PriceCard
│  │     │  ├─ index.js
│  │     │  └─ PriceCard.jsx
│  │     └─ SectionTitle
│  │        ├─ index.js
│  │        └─ SectionTitle.jsx
│  ├─ config
│  │  ├─ constants.js
│  │  └─ index.js
│  ├─ data
│  │  ├─ company
│  │  │  └─ index.js
│  │  ├─ contactData.js
│  │  ├─ index.js
│  │  ├─ portfolioData.js
│  │  ├─ servicesData.js
│  │  └─ testimonialsData.js
│  ├─ features
│  │  ├─ about
│  │  │  ├─ components
│  │  │  │  ├─ DetailTentang.jsx
│  │  │  │  ├─ Keunggulan.jsx
│  │  │  │  └─ TargetKlien.jsx
│  │  │  ├─ data
│  │  │  ├─ hooks
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  ├─ contact
│  │  │  ├─ components
│  │  │  │  └─ Kontak.jsx
│  │  │  ├─ data
│  │  │  ├─ hooks
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  ├─ home
│  │  │  ├─ components
│  │  │  │  ├─ Hero.jsx
│  │  │  │  └─ Statistik.jsx
│  │  │  ├─ data
│  │  │  ├─ hooks
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  ├─ index.js
│  │  ├─ portfolio
│  │  │  ├─ components
│  │  │  ├─ data
│  │  │  ├─ hooks
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  ├─ services
│  │  │  ├─ components
│  │  │  │  ├─ DetailServices.jsx
│  │  │  │  └─ Services.jsx
│  │  │  ├─ data
│  │  │  ├─ hooks
│  │  │  ├─ index.js
│  │  │  └─ utils
│  │  └─ testimonials
│  │     ├─ components
│  │     │  └─ Testimoni.jsx
│  │     ├─ data
│  │     ├─ hooks
│  │     ├─ index.js
│  │     └─ utils
│  ├─ hooks
│  │  ├─ index.js
│  │  └─ useReducedMotion.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Home.jsx
│  │  ├─ Kontak.jsx
│  │  ├─ Layanan.jsx
│  │  ├─ Portfolio.jsx
│  │  └─ Tentang.jsx
│  ├─ store
│  ├─ styles
│  │  ├─ animations.css
│  │  └─ index.css
│  └─ utils
│     └─ ScrollToTop.jsx
├─ tailwind.config.js
├─ Tree-Structure.md
└─ vite.config.js

```