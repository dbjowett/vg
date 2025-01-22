## Full Stack Project

Go backend + Vite frontend + React Native mobile app

vg/
 ├── backend/  # Go API
 ├── frontend/ # Vite React
 └── app/      # React Native

## Setup

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install
cd backend && go mod download

# Start FE, App, BE
pnpm start

# Start individually
pnpm start:backend
pnpm start:frontend
pnpm start:app
```
