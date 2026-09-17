# 🌍 GeoScroll

> **Vertical Doomscrolling Micro-Learning Feed for Geology Competitive Exams (GATE, CSIR-NET, UPSC Geology / Combined Geo-Scientist)**

Live Deployment: **[https://mazhar-in.github.io/geoscroll/](https://mazhar-in.github.io/geoscroll/)**

---

## ✨ Features

- 📱 **TikTok / Reels Doomscrolling:** Fullscreen vertical snap feed (`100dvh`) with touch swipe, wheel, and keyboard navigation (`J`/`K`, `ArrowDown`/`ArrowUp`, `Space`).
- 🎯 **Interactive 1-Tap MCQs:** Immediate visual feedback with emerald glow, celebratory confetti on correct answers, and official GATE/CSIR-NET distractor breakdown rationale.
- 🗺️ **Full 9-Topic Syllabus Hierarchy:** Instant subtopic filtering spanning all 9 domains of competitive geology.
- 🌟 **50 High-Yield Cards on "Origin of Solar System & Earth":** CAIs, CI Chondrites, Nebular Condensation Sequence, Theia Giant Impact, Hf-W core segregation, Goldschmidt's classification, and Jack Hills Hadean zircons.
- 📖 **Deep-Dive Revision Sheets:** Slide-up notes with formulas, thermodynamic proofs, and exam traps.
- 💡 **ELI5 Explainers:** Intuitive mental models and analogies to demystify complex geology physics.
- 🔊 **Web Audio Synthesizer:** 100% offline, zero-asset audio chimes for correct and wrong answers.
- 💾 **100% Offline & Serverless:** All progress, streaks, and bookmarks sync directly to `localStorage`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/mazhar-in/geoscroll.git

# Navigate into the project
cd geoscroll

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Building for Production

```bash
npm run build
```

The production-ready bundle will be output to the `dist/` directory.

---

## 🌐 GitHub Pages Deployment

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`). 

Whenever code is pushed to the `main` branch:
1. GitHub Actions automatically installs dependencies.
2. Builds the Vite production bundle with the `/geoscroll/` base path.
3. Deploys directly to **GitHub Pages**.

To enable GitHub Pages in your repository settings:
1. Go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.

---

## 📚 Syllabus Structure

1. 🌍 **The Planet Earth** (Origin, Internal Structure, Radiometric Dating, Volcanism, Earthquakes, Magnetism, Isostasy, Plate Tectonics)
2. 🏔️ **Geomorphology** (Weathering, Drainage Patterns, Fluvial, Glacial, Karst, Aeolian)
3. 🗺️ **Structural Geology** (Dip/Strike, Rule of V's, Stereonets, Folds, Fault Dynamics)
4. 🦕 **Paleontology** (Trilobites, Brachiopods vs Bivalves, Gondwana Flora, Vertebrates)
5. 📅 **Stratigraphy** (Dharwar, Purana Basins, Spiti/Kashmir, Gondwana, Kutch, Siwaliks)
6. 💎 **Mineralogy** (Symmetry, Miller Indices, Twinning, Extinction, Silicate Ratios)
7. 🪨 **Petrology** (Binary Systems, Bowen's Series, ACF/AKF, Barrovian Zones, Komatiites)
8. ⛏️ **Economic Geology** (Supergene Enrichment, Skarns, Indian Mineral Belts)
9. 🔧 **Applied Geology** (Darcy's Law, Hydrogeology, Dam Engineering, Remote Sensing)
