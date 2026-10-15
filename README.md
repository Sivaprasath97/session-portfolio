# Alex Johnson — Portfolio

A modern full-stack personal portfolio website.

## Project Structure

```
portfolio/
├── client/          # React + Vite frontend (Tailwind CSS, Framer Motion)
│   ├── public/
│   ├── src/
│   │   ├── components/   (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
│   │   ├── data.js       ← Edit this to personalize your content
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/          # Node.js + Express + MongoDB Atlas backend
│   ├── models/
│   │   └── Details.js    ← Mongoose schema (session_portfolio.details)
│   ├── routes/
│   │   └── contact.js    ← POST /api/contact, GET /api/contact
│   ├── server.js
│   ├── .env              ← MongoDB URI (do NOT commit)
│   └── package.json
│
└── .gitignore
```

## Getting Started

### 1. Start the Backend (Express + MongoDB)

```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

### 2. Start the Frontend (Vite)

```bash
cd client
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Save contact form submission to MongoDB |
| `GET` | `/api/contact` | Retrieve all submissions |
| `GET` | `/api/health` | Server health check |

## Database

- **Database**: `session_portfolio`
- **Collection**: `details`
- **Fields**: `name`, `email`, `subject`, `message`, `createdAt`, `updatedAt`

## Deploy

- **Frontend** → Vercel / Netlify (set build dir to `client/`)
- **Backend** → Railway / Render / Heroku (set start command to `node server.js`)
