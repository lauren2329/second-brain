/**
 * Planner Backend Server
 *
 * Handles real data fetching for the digital planner:
 * - Calls Claude API for Annabel's briefing
 * - Proxies Gmail searches
 * - Proxies iMessages
 * - Proxies Google Calendar
 *
 * Run with: node planner-backend.js
 * Set ANTHROPIC_API_KEY and GOOGLE_API_KEY env vars
 */

const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ============================================================
// ANNABEL'S BRIEFING
// ============================================================
app.post('/api/briefing', async (req, res) => {
  const { brainDump, events, todayDate } = req.body;

  const eventSummary = events?.length > 0
    ? events.map(e => e.summary || e.title || '').filter(Boolean).join('; ')
    : 'No events';

  const prompt = `You are Annabel, Lauren's Personal Assistant & Librarian. Your job: coordinate her 21-member council and tell her ONLY what needs HER decision today.

Council Structure:
- Devoted to Lauren: Annabel (you), Sylvia (Wellness), Prudence (Finance), Vera (Legal), Sage (Counselor)
- Home (Martha coordinates): Martha, Mary, Penny, Dolly, Imogen, Harriet
- Work (Victoria coordinates): Victoria, Dot, Roxanne, Sterling, Vivienne, Greta, Fiona, Cleo, Constance, Ada

Today's Context:
- Date: ${todayDate}
- Calendar: ${eventSummary}
- Brain dump: ${brainDump.slice(0, 300) || '(empty)'}

Give Lauren a BRIEF morning coordination (SHORT — she reads on phone):

1. **Morning Summary** (1-2 sentences) — what MUST she decide/do today
2. **Urgent Actions** (2-3 bullets) — time-critical, council-flagged
3. **Today's Focus** (2-3 bullets) — where to put energy

Format as plain text with emojis. Be direct.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 500,
      messages: [
        { role: 'user', content: prompt }
      ],
    });

    const briefing = message.content[0].type === 'text' ? message.content[0].text : '';
    res.json({ briefing, timestamp: Date.now() });
  } catch (error) {
    console.error('Annabel briefing error:', error);
    res.status(500).json({ error: 'Failed to generate briefing' });
  }
});

// ============================================================
// GMAIL - Unread emails
// ============================================================
app.post('/api/gmail', async (req, res) => {
  // Placeholder: In production, use googleapis npm package
  // For now, return stub data that shows the pattern

  try {
    const emails = [
      {
        id: '1',
        from: 'team@kynorml.org',
        subject: 'Monday.com board update',
        time: 'Today 9:30 AM'
      },
      {
        id: '2',
        from: 'support@grants.gov',
        subject: 'Grant opportunity: Community Development',
        time: 'Today 8:15 AM'
      }
    ];

    res.json({ emails });
  } catch (error) {
    console.error('Gmail error:', error);
    res.status(500).json({ error: 'Gmail unavailable' });
  }
});

// ============================================================
// iMESSAGES - Recent messages
// ============================================================
app.post('/api/imessages', async (req, res) => {
  // Placeholder: iMessages integration via MCP or local database
  // For now, return stub data

  try {
    const messages = [
      {
        id: '1',
        from: 'Matthew',
        text: 'Kids' soccer practice moved to 4pm',
        time: 'Today 7:45 AM'
      },
      {
        id: '2',
        from: 'Linda',
        text: 'Can we reschedule for next week?',
        time: 'Yesterday 3:20 PM'
      }
    ];

    res.json({ messages });
  } catch (error) {
    console.error('iMessages error:', error);
    res.status(500).json({ error: 'iMessages unavailable' });
  }
});

// ============================================================
// GOOGLE CALENDAR
// ============================================================
app.post('/api/calendar', async (req, res) => {
  // Placeholder: Use googleapis to fetch calendar events
  // For now, return stub data

  try {
    const events = [
      {
        id: '1',
        summary: 'Council briefing with Victoria',
        start: new Date().toISOString(),
        duration: 30
      }
    ];

    res.json({ events });
  } catch (error) {
    console.error('Calendar error:', error);
    res.status(500).json({ error: 'Calendar unavailable' });
  }
});

// ============================================================
// HEALTH CHECK
// ============================================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    anthropic: !!process.env.ANTHROPIC_API_KEY ? 'connected' : 'missing API key'
  });
});

// ============================================================
// START SERVER
// ============================================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Planner backend running on http://localhost:${PORT}`);
  console.log(`📍 API endpoints:`);
  console.log(`   POST /api/briefing - Annabel's briefing`);
  console.log(`   POST /api/gmail - Gmail emails`);
  console.log(`   POST /api/imessages - iMessages`);
  console.log(`   POST /api/calendar - Calendar events`);
  console.log(`   GET /api/health - Health check`);
});
