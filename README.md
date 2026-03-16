# SnipVault - Developer Code Snippet Manager

A full-stack code snippet manager for developers to save, organize, search, and reuse code snippets.

## Badges

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite&logoColor=white)

## Features

- 💾 Save code snippets with title, language, tags, description, and code
- 🗂️ Browse snippets in a clean card layout
- 🔍 Search snippets by title or tag
- 🌈 View code with syntax highlighting
- 📋 Copy snippet code to clipboard
- 🗑️ Delete snippets instantly

## How to Run

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend URL: `http://127.0.0.1:8000`

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://127.0.0.1:5173`

---

Built with ❤️ by [Ashish Yadav]
