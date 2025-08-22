# Finboard (MERN Finance Dashboard)

A full‑stack finance dashboard built with React + TypeScript (Vite) and an Express + MongoDB backend. It visualizes KPIs, products, transactions, and provides a simple revenue prediction view.

## 🚀 Live Demo
**[View Live Demo](https://finboard-frontend.vercel.app/)**

## Tech Stack
- Frontend: React 18, TypeScript, Vite, MUI, Recharts, Redux Toolkit + RTK Query, Tailwind (utility classes)
- Backend: Node.js, Express, Mongoose, Helmet, Morgan, CORS, dotenv
- Database: MongoDB

## Monorepo Structure
- `client/` — Vite + React + TS frontend
- `server/` — Express + MongoDB backend

## Prerequisites
- Node.js 18+
- A MongoDB instance (local or hosted)

## Environment Variables
- `client/.env` (or `.env.local`)
  - `VITE_HOST_ADDRESS` — Base URL of the backend, e.g. `http://localhost:3000`
- `server/.env`
  - `MONGO_URL` — MongoDB connection string
  - `HOST` — Optional, defaults to `localhost`

Examples are provided in `client/.env.example` and `server/.env.example`.

## Setup & Run (Development)
1) Backend

macOS/Linux:
```
cd server
cp .env.example .env
# edit .env to set MONGO_URL
npm install
npm run dev             # starts Express on port 3000
```

Windows (PowerShell):
```
cd server
Copy-Item .env.example .env
# edit .env to set MONGO_URL
npm install
npm run dev             # starts Express on port 3000
```

2) Frontend

macOS/Linux:
```
cd client
cp .env.example .env    # or .env.local
# set VITE_HOST_ADDRESS to your backend URL, e.g. http://localhost:3000
npm install
npm run dev             # starts Vite (default: http://localhost:5173)
```

Windows (PowerShell):
```
cd client
Copy-Item .env.example .env   # or .env.local
# set VITE_HOST_ADDRESS to your backend URL, e.g. http://localhost:3000
npm install
npm run dev             # starts Vite (default: http://localhost:5173)
```

Open the app at: http://localhost:5173

## API Overview (Backend)
Base URL: `http://localhost:3000`

- `GET /kpi/kpis` — Returns KPI documents including totals, `monthlyData`, `dailyData`, and `expensesByCategory`.
- `GET /product/products` — Returns products with `price`, `expense`, and related transaction IDs.
- `GET /transaction/transactions` — Returns a limited list of recent transactions.

Data models are defined under `server/models/`:
- `KPI` (`server/models/KPI.js`): totals, expenses by category, monthly and daily data
- `Product` (`server/models/Product.js`): price, expense, transaction references
- `Transaction` (`server/models/Transaction.js`): buyer, amount, product references

### Optional: Seed Sample Data
A large sample dataset exists in `server/data/data.js`. To seed once:
- In `server/index.js`, locate the commented section labeled "If you want to seed data once".
- Temporarily uncomment those lines, run the server once, then re‑comment them to avoid reseeding on every start.
- Note: One of the lines drops the database. Only do this in a safe environment.

## Frontend Features
- Responsive dashboard layout (`client/src/scenes/dashboard/`)
- Theming via MUI (`client/src/theme.ts`) and global CSS (`client/src/index.css`)
- State management and data fetching with Redux Toolkit + RTK Query (`client/src/state/`)
- Charts built with Recharts
- Predictions view (`/predictions`) that computes a simple linear regression on historical monthly revenue and shows a toggleable forecast

## Scripts
Frontend (`client/package.json`):
- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check and build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint source files

Backend (`server/package.json`):
- `npm run dev` — Start Express with nodemon
- `npm start` — Start Express

## Notes
- CORS is enabled for development. For production, restrict origins and headers as needed.
- The backend listens on port `3000` by default; adjust your env and client base URL accordingly.

## Production Build

- Frontend
  - Set `VITE_HOST_ADDRESS` to your production backend URL.
  - Build: `cd client && npm run build`
  - Local preview: `npm run preview` (serves the built `dist/` folder)
  - Deploy `client/dist/` to any static host (Netlify, Vercel, S3, etc.).

- Backend
  - Ensure `server/.env` has a production `MONGO_URL`.
  - Run: `cd server && npm install --omit=dev && npm start`
  - Behind a reverse proxy (e.g., Nginx), expose port 3000 or change the port in `server/index.js` (`app.listen(3000, ...)`).
