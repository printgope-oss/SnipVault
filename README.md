<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:06b6d4&height=200&section=header&text=SnipVault&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Your%20Personal%20Code%20Snippet%20Vault&descAlignY=60&descSize=20" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=06B6D4&center=true&vCenter=true&width=600&lines=Stop+copy-pasting+from+old+projects.;Save+it.+Find+it.+Use+it.+Fast.)](https://git.io/typing-svg)

<p>
  <img src="https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" />
</p>

</div>

---

## What is this?

You know that feeling when you've written a perfect regex, or a clean auth middleware, and then two weeks later you're digging through 6 old projects trying to find it?

That's what SnipVault solves.

It's a personal code snippet manager — you save snippets with tags and a language label, and later you just search and copy. That's it. No cloud, no account, runs locally.

---

## Getting started
```bash
git clone https://github.com/ashish7802/SnipVault.git
cd SnipVault

# Backend
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Frontend (new terminal)
cd frontend
npm install && npm run dev
```

Frontend runs on `http://localhost:5173`, API on `http://localhost:8000`, and Swagger docs at `/docs`.

---

## Features

- Save snippets with a title, language, tags, and optional description
- Search by title or tag instantly
- Syntax highlighted code blocks with one-click copy
- Delete with a confirmation prompt
- Fully local — SQLite, no external services

---

## Why not just use Gists or Notes?

Gists are public by default and have no tag-based search. Notes apps don't do syntax highlighting. SnipVault is just a focused tool for one specific problem — storing and finding code you already wrote.

---

## Stack

Backend is FastAPI + SQLAlchemy on SQLite. Frontend is React 18 with Vite and TailwindCSS. Syntax highlighting via `react-syntax-highlighter`.

---

## Project structure
```
SnipVault/
├── backend/
│   └── app/
│       ├── main.py       ← routes + CORS
│       ├── models.py     ← DB models
│       ├── schemas.py    ← Pydantic schemas
│       ├── crud.py       ← DB operations
│       └── database.py   ← SQLite setup
│
└── frontend/
    └── src/
        ├── App.jsx
        ├── components/
        │   ├── SnippetForm.jsx
        │   ├── SnippetCard.jsx
        │   └── SearchBar.jsx
        └── services/
            └── api.js
```

---

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/snippets` | Create a snippet |
| GET | `/snippets` | Get all snippets |
| GET | `/snippets?search=xyz` | Search snippets |
| DELETE | `/snippets/{id}` | Delete a snippet |

---

## What's next

- [ ] Edit snippets inline
- [ ] JWT auth
- [ ] Export to GitHub Gist
- [ ] Browser extension

PRs are welcome. If you add something useful, open a PR and I'll review it.

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:0f172a&height=120&section=footer" width="100%"/>

Built by [Ashish Yadav](https://github.com/ashish7802) — drop a ⭐ if it was useful
</div>
