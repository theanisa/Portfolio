# MongoDB Fullstack Setup TODO

## 1. Restructure Files
- [ ] Move all React/Vite/frontend files to frontend/
- [ ] Delete root clutter (create_images.ps1, images/, public/, scripts/, docs/)
- [ ] Keep root package.json updated

## 2. Backend Setup
- [ ] Create backend/package.json (express, mongoose, etc.)
- [ ] Create backend/server.js (MongoDB connect, /health)
- [ ] Create backend/.env (user fills MONGO_URI)

## 3. Root Config
- [ ] Update root package.json (workspaces, scripts)
- [ ] Add proxy in frontend/vite.config.js

## 4. Install & Run
- [ ] cd frontend && npm install
- [ ] cd backend && npm install
- [ ] npm run dev (starts both)

## 5. Test
- [ ] Backend: http://localhost:3001/health
- [ ] Frontend: http://localhost:5173
- [ ] MongoDB connected ✓

