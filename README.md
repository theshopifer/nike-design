# Nike Design — High-Performance Interactive Showcase

> **High-performance Nike e-commerce experience featuring 3D clothes rail conveyor, shoe orbit 360, interactive runway lookbook, and mobile video stories.**

A pixel-perfect recreation of the [Nike Design Storefront](https://nike-makknzjs.myshopify.com/), meticulously rebuilt with interactive 3D elements, native web components, dynamic client-side shopping cart with free shipping meter, live predictive search, and zero-error Vercel deployment.

---

## ⚡ Highlights & Key Features

- **📱 Full-Screen Mobile Stories**:
  - Circular Instagram/TikTok-style story bubbles with video previews.
  - Interactive full-screen story player modal with multi-segment animated progress bars.
  - Video playback with ambient motion, sound muting/unmuting, tap navigation (previous/next/hold to pause).
  - Floating quick-buy card with size selector and instant add-to-cart.

- **🧥 3D Scene Rail / Conveyor Clothes Rack (`Hand Rail Pro`)**:
  - Interactive hanging clothes rack with realistic physics and sway simulation.
  - Drag scrolling and momentum navigation.
  - 3D hover rotation and garment inspection modal with Front/Back angle toggle, size selector (`S`, `M`, `L`, `XL`), and instant cart addition.

- **👠 The Runway Lookbook**:
  - Six curated high-fashion looks (*The City Edit*, *Gallery Opening*, *Studio Day*).
  - Interactive glowing hotspot pins (`1`, `2`, `3`) placed on models' garments.
  - Tap any pin to reveal the floating "In this look" product card with pricing and instant purchase options.

- **👟 Shoe Orbit 360 (`Shoe Atelier`)**:
  - Interactive 360-degree turntable rotating through multi-angle photography in real-time.
  - Draggable circular wheel dial with smooth rotation physics.
  - Detail inspection modal with zoom and specifications.

- **🛒 Slide-Out Cart Drawer**:
  - Real-time cart state management (`localStorage` persistence).
  - Dynamic Free Shipping progress meter ($150 threshold).
  - Item rows with product thumbnails, size indicators, quantity stepper (`-`/`+`), and remove button.
  - Interactive Checkout modal with address input, payment methods (Credit Card, Apple Pay, PayPal), and simulated order confirmation.

- **🔍 Live Predictive Search**:
  - Modal search overlay with live filtering across the product catalog.
  - Instant results for shoes, hoodies, blazers, and apparel with quick-add actions.

- **🚀 100% Vercel Edge Ready**:
  - Optimized static asset delivery with zero server dependencies.
  - Zero build errors on Vercel deployment.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 with Modern CSS Custom Properties, ES2022 Modules
- **Components**: Native Custom Elements (`<theme-drawer>`, `<runway-section>`, `<mobile-shop-stories>`)
- **State Management**: Client-side Cart & Catalog Controller (`store-controller.js`)
- **Build & Server**: Node.js static build system (`build.js`) & zero-dependency dev server (`serve.js`)
- **Hosting**: Vercel (`vercel.json` with SPA routing and asset caching)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/theshopifer/nike-design.git
cd nike-design
```

### 2. Start the local server
```bash
npm run dev
# or
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Builds the production-ready distribution into the `dist/` directory in milliseconds with zero errors.

---

## 🌐 Deploy to Vercel

This repository is pre-configured with `vercel.json` for one-click deployment.

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `theshopifer/nike-design` repository.
4. Click **Deploy** (No special environment variables or settings required).

---

## 📦 Project Structure

```
nike-design/
├── public/
│   └── assets/              # Stylesheets, theme components, and store controller
│       ├── theme_styles.css
│       ├── store-controller.js
│       └── ...
├── build.js                 # Production build script for Vercel
├── index.html               # Main application storefront
├── package.json             # NPM scripts and metadata
├── serve.js                 # Zero-dependency local dev server
├── vercel.json              # Vercel deployment configuration
└── README.md                # Documentation
```

---

## 👤 Author

- **GitHub**: [@theshopifer](https://github.com/theshopifer)
- **Email**: [theshopifer@gmail.com](mailto:theshopifer@gmail.com)

---

## 📄 License

MIT License © 2026 theshopifer
