# Planner Backend Setup

The digital planner needs a backend server to connect to real data sources. This guide walks you through getting it running.

## Architecture

```
┌─────────────────────────────────────┐
│  Planner (GitHub Pages)             │
│  https://lauren2329.github.io/...   │
└────────────┬────────────────────────┘
             │ fetch() calls
             ▼
┌─────────────────────────────────────┐
│  Backend Server (localhost:3001)    │
│  - /api/briefing (Claude)           │
│  - /api/gmail (Gmail)               │
│  - /api/imessages (iMessages)       │
│  - /api/calendar (Google Calendar)  │
└────────────┬────────────────────────┘
             │
      ┌──────┴──────┬────────┐
      ▼             ▼        ▼
   Claude API   Gmail API  Calendar API
```

## Step 1: Install Dependencies

```bash
cd /home/user/second-brain
npm install
```

This installs:
- `express` - Web server
- `cors` - Cross-origin support (for planner to call backend)
- `@anthropic-ai/sdk` - Claude API
- `googleapis` - Gmail & Calendar (prepared for future use)
- `dotenv` - Environment variables

## Step 2: Set Up Environment

Copy the example env file:
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```env
# Get from https://console.anthropic.com/
ANTHROPIC_API_KEY=sk-ant-...

# For Gmail/Calendar (optional for now)
GOOGLE_API_KEY=AIza...

# Server settings
PORT=3001
BACKEND_URL=http://localhost:3001
```

### Getting Your Anthropic API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Click "API Keys" in the sidebar
3. Click "Create Key"
4. Copy and paste into `.env`

## Step 3: Run the Backend

```bash
npm start
```

You should see:
```
✅ Planner backend running on http://localhost:3001
📍 API endpoints:
   POST /api/briefing - Annabel's briefing
   POST /api/gmail - Gmail emails
   POST /api/imessages - iMessages
   POST /api/calendar - Calendar events
   GET /api/health - Health check
```

## Step 4: Test the Connection

### Test Annabel's Briefing

```bash
curl -X POST http://localhost:3001/api/briefing \
  -H "Content-Type: application/json" \
  -d '{
    "brainDump": "I need to finish the grant proposal",
    "events": [],
    "todayDate": "Wednesday, June 18, 2025"
  }'
```

You should get back a JSON response with Annabel's briefing.

### Test Health Check

```bash
curl http://localhost:3001/api/health
```

## Step 5: Use the Planner

1. Open your planner: https://lauren2329.github.io/second-brain/digital-planner-final.html
2. Backend must be running locally (steps above)
3. When you load the planner, it will try to fetch data from `http://localhost:3001`

## Troubleshooting

**"Annabel connection lost. Backend not running?"**
- Make sure `npm start` is running
- Check that backend is on `http://localhost:3001`

**"Gmail unavailable — backend not running"**
- Same as above; backend must be running

**"CORS error in browser console"**
- This is expected; the .env or configuration might not be set correctly

**ANTHROPIC_API_KEY not loading**
- Make sure `.env` file is in the repo root (`/home/user/second-brain/.env`)
- Make sure you have the `dotenv` package (`npm install dotenv`)

## Optional: Gmail & Calendar Integration

Once basic setup works, you can add real Gmail and Calendar data:

1. Get Google API credentials from [console.cloud.google.com](https://console.cloud.google.com)
2. Add `GOOGLE_API_KEY` to `.env`
3. Uncomment the Gmail/Calendar code in `planner-backend.js`
4. The backend will fetch real data instead of stubs

For now, the stubs are useful for testing the planner layout.

## Running on Phone

### Local Network
If your phone is on the same WiFi:
1. Get your computer's local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Update the planner's backend URL from `http://localhost:3001` to `http://YOUR_IP:3001`
3. Access planner on phone: `https://lauren2329.github.io/second-brain/digital-planner-final.html`
4. Backend will call `http://YOUR_IP:3001`

### Remote Deployment (Advanced)
To access from anywhere:
1. Deploy backend to a service like Vercel, Heroku, or AWS
2. Update the planner to call the remote backend URL
3. Update CORS in backend if needed

## What's Connected

✅ Annabel's Briefing (Claude API)
🔲 Gmail (stub data for now)
🔲 iMessages (stub data for now)
🔲 Google Calendar (stub data for now)

The stubs return sample data so the UI displays correctly while you're testing.
