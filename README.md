<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:06b6d4&height=200&section=header&text=SnipVault&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Your%20Personal%20Code%20Snippet%20Vault&descAlignY=60&descSize=20" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=06B6D4&center=true&vCenter=true&width=600&lines=Stop+copy-pasting+from+old+projects.;Save+it.+Find+it.+Use+it.+Fast.;Built+with+FastAPI+%2B+React+%2B+SQLite.)](https://git.io/typing-svg)

<br/>

<p>
  <img src="https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PRs-Welcome-f59e0b?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/ashish7802/SnipVault?style=for-the-badge&color=fbbf24" />
  <img src="https://img.shields.io/github/last-commit/ashish7802/SnipVault?style=for-the-badge&color=a78bfa" />
</p>

</div>

---

## 🧠 What is SnipVault?

> Developers waste hours digging through old projects, random gists, and scattered notes just to find a snippet they already wrote.
> **SnipVault fixes that.**

SnipVault is a **full-stack code snippet manager** — a personal vault where you store, tag, search, and instantly reuse your best code. Clean UI. Fast search. Zero friction.

```
╔══════════════════════════════════════════════╗
║   Save it once.  Find it in seconds.         ║
║   Syntax highlighted. Copy-ready. Always.    ║
╚══════════════════════════════════════════════╝
```

---

## 🎬 Demo

<!-- Replace with your actual GIF -->
<div align="center">
  <img src="https://via.placeholder.com/800x450/0f172a/06b6d4?text=Add+Demo+GIF+Here" width="80%" style="border-radius: 12px"/>
</div>

---

## ⚡ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/ashish7802/SnipVault.git
cd SnipVault

# 2. Start Backend
cd backend && python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# 3. Start Frontend (new terminal)
cd frontend && npm install && npm run dev
```

🟢 **Frontend** → `http://localhost:5173`  
🔵 **Backend API** → `http://localhost:8000`  
📖 **API Docs** → `http://localhost:8000/docs`

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🎯 Core
- 💾 Save snippets with title, language, tags & description
- 🔍 Instant search by title or tag
- 🌈 Syntax highlighted code blocks
- 📋 One-click copy with **"Copied!"** feedback
- 🗑️ Delete with confirmation prompt

</td>
<td width="50%">

### 🚀 Developer Experience
- ⚡ Vite HMR for blazing fast dev
- 🧩 REST API with auto-generated docs
- 🎨 Dark UI with TailwindCSS
- 📦 Clean modular architecture
- 🔌 Easy to extend & customize

</td>
</tr>
</table>

---

## 💡 Why SnipVault over Gists or Notes?

| | 📝 Notes | 🐙 GitHub Gists | ⚡ SnipVault |
|---|---|---|---|
| Search by tag | ❌ | ❌ | ✅ |
| Syntax highlighting | ❌ | ✅ | ✅ |
| Copy in one click | ❌ | ❌ | ✅ |
| Works 100% locally | ✅ | ❌ | ✅ |
| Organized with metadata | ❌ | ❌ | ✅ |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| 🐍 Backend | Python 3.10+, FastAPI, SQLAlchemy, Pydantic |
| ⚛️ Frontend | React 18, Vite, TailwindCSS, Axios |
| 🗄️ Database | SQLite (local, zero config) |
| 🎨 Highlighting | react-syntax-highlighter (oneDark theme) |

</div>

---

## 📁 Project Structure

```
SnipVault/
├── 📂 backend/
│   ├── 📂 app/
│   │   ├── 🐍 main.py        ← FastAPI app + routes + CORS
│   │   ├── 🐍 models.py      ← SQLAlchemy DB models
│   │   ├── 🐍 schemas.py     ← Pydantic request/response models
│   │   ├── 🐍 crud.py        ← Database operations
│   │   └── 🐍 database.py    ← SQLite connection setup
│   └── 📄 requirements.txt
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── ⚛️  App.jsx               ← Root component + state
│   │   ├── 📂 components/
│   │   │   ├── SnippetForm.jsx       ← Create snippet form
│   │   │   ├── SnippetCard.jsx       ← Card with syntax highlight
│   │   │   └── SearchBar.jsx         ← Search input
│   │   ├── 📂 services/
│   │   │   └── api.js                ← Axios API calls
│   │   └── 📂 utils/
│   │       └── tagUtils.js           ← Tag helpers
│   └── 📄 package.json
│
└── 📄 README.md
```

---

## 🔌 API Reference

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/snippets` | `{title, language, tags, code, description}` | Create new snippet |
| `GET` | `/snippets` | — | Get all snippets |
| `GET` | `/snippets?search=xyz` | — | Search by title or tag |
| `DELETE` | `/snippets/{id}` | — | Delete snippet by ID |

> 📖 Full interactive docs at `http://localhost:8000/docs` (Swagger UI auto-generated by FastAPI)

---

## 🗺️ Roadmap

- [x] Create / Read / Delete snippets
- [x] Search by title and tags
- [x] Syntax highlighting with copy button
- [x] REST API with Swagger docs
- [ ] ✏️ Edit snippets inline
- [ ] 🔐 User authentication (JWT)
- [ ] 🌙 Dark / Light theme toggle
- [ ] 📤 Export snippet to GitHub Gist
- [ ] 🖥️ Browser extension
- [ ] 📱 Mobile responsive improvements

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "✨ Add amazing feature"

# 4. Push and open a PR
git push origin feature/amazing-feature
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:0f172a&height=120&section=footer" width="100%"/>

**Built with ❤️ by [Ashish Yadav](https://github.com/ashish7802)**

*If this project helped you, please consider giving it a ⭐ — it means a lot!*

[![GitHub](https://img.shields.io/badge/GitHub-ashish7802-181717?style=for-the-badge&logo=github)](https://github.com/ashish7802)

</div>
