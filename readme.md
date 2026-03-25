# CodeMeet

CodeMeet is a full-stack collaborative coding interview platform with:

- secure authentication (Clerk)
- coding session management (host + participant)
- integrated video calls and chat (Stream)
- code editor + code execution
- active/recent session dashboards

## Tech Stack

### Frontend

- React + Vite
- React Router
- TanStack Query
- Tailwind CSS + DaisyUI
- Monaco Editor
- Stream Video + Stream Chat
- Clerk React SDK

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Clerk Express middleware
- Stream Chat + Stream Video server SDK
- Inngest (user sync events)

## Project Structure

```text
CodeMeet/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## Features

- Clerk-based sign-in/sign-up
- Host can create coding sessions
- Participant can join active sessions (1 participant max)
- Session video call + chat using Stream
- Problem-based coding workspace (language switch + starter templates)
- Run code from the editor
- Active sessions and recent sessions views
- Host can end a session

## Authentication & User Sync

- Clerk handles authentication.
- Protected backend routes require authenticated users.
- Inngest functions sync Clerk users to:
  - MongoDB user collection
  - Stream users (for chat/video identity)

## API Overview

Base backend API prefix: `/api`

### Chat

- `GET /api/chat/token`  
  Returns Stream token for authenticated user.

### Sessions

- `POST /api/sessions`  
  Create a new session.
- `GET /api/sessions/active`  
  Get active sessions.
- `GET /api/sessions/my-recent`  
  Get completed sessions where current user was host/participant.
- `GET /api/sessions/:id`  
  Get session details.
- `POST /api/sessions/:id/join`  
  Join session as participant.
- `POST /api/sessions/:id/end`  
  End session (host only).

### Health

- `GET /health`

## Environment Variables

Create `.env` files for both backend and frontend.

### Backend `.env` (inside `backend/`)

```env
PORT=5001
DB_URL=mongodb://localhost:27017/codemeet
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk (required by Clerk middleware)
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend `.env` (inside `frontend/`)

```env
VITE_API_URL=http://localhost:5001/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

## Local Development

### 1) Install dependencies

From repo root:

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 2) Run backend

```bash
npm run dev --prefix backend
```

### 3) Run frontend

```bash
npm run dev --prefix frontend
```

Frontend default: `http://localhost:5173`  
Backend default: `http://localhost:5001`

## Production Build

From root:

```bash
npm run build
npm run start
```

Root scripts:

- `build`: installs frontend/backend deps and builds frontend
- `start`: starts backend server

## Data Models (Summary)

### User

- `name`
- `email` (unique)
- `profileImage`
- `clerkId` (unique)

### Session

- `problem`
- `difficulty` (`easy | medium | hard`)
- `host` (User ref)
- `participant` (User ref or `null`)
- `status` (`active | completed`)
- `callId`

## Current Functional Notes

- Video + chat collaboration is implemented.
- Session management flow is implemented.
- Code editor is currently local per client session unless explicit real-time editor sync is implemented separately (WebSocket/CRDT style).

## Troubleshooting

- **401 Unauthorized**: verify Clerk keys and login state.
- **CORS/Cookie issues**: ensure `CLIENT_URL` and `VITE_API_URL` are correct.
- **Stream errors**: check `STREAM_API_KEY`/`STREAM_API_SECRET` and Stream dashboard setup.
- **DB connection failure**: verify `DB_URL` and MongoDB service status.
- **Frontend blank due to auth**: confirm `VITE_CLERK_PUBLISHABLE_KEY`.

## License

ISC

## Repository

`https://github.com/realACO/CodeMeet`
