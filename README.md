# The Juvana Times 🗞️

A New York Times-inspired interactive portfolio built with React.

## Features
- 📰 Full NYT-style front page with newspaper layout
- 📈 Interactive career stock charts (Chart.js)
- 🔤 Playable crossword puzzle about Juvana's career
- 🟩 Skill•dle — Wordle clone with tech stack words
- 📬 Contact page with full experience

## Getting Started

```bash
npm install
npm start
```

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/juvana-times",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo — Vercel auto-detects React
4. Click Deploy ✅

No configuration needed!

## Tech Stack
- React 18
- Chart.js + react-chartjs-2
- Google Fonts (UnifrakturMaguntia, Libre Baskerville, Source Serif 4)
- Pure CSS animations (no extra libraries)
# JTimes
