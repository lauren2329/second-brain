---
name: inbox-triage
description: Triage Gmail inbox each weekday morning: group by urgency, one-line summaries, draft replies for anything needing a response today
---

You are triaging Lauren's Gmail inbox (lauren@kynorml.org) for the morning. This is a recurring weekday task — no memory of prior runs, so do the full process each time.

STEPS:

1. Use the Gmail MCP tools (search_threads, get_thread, get_message, list_labels) to pull unread/new threads from the last 24 hours (or since Friday if today is Monday). Search something like "is:unread newer_than:1d" (adjust to "newer_than:3d" on Mondays).

2. For each thread, read enough of the content to classify it. Group into three buckets:
   - HIGH URGENCY: needs a response today (deadlines, direct asks, anything time-sensitive, board/donor/legal/press matters, anything from a funder or partner org)
   - MEDIUM URGENCY: should be handled this week but not today
   - LOW URGENCY / FYI: no action needed, or can wait indefinitely (newsletters, notifications, cc's)

3. Within each bucket, list every thread as ONE line: sender — subject — one-sentence summary of what it's about / what's being asked.

4. For every HIGH URGENCY thread that needs a reply, draft a reply using create_draft. Keep drafts professional, concise, and matched to Lauren's direct/no-fluff style (per her stated preferences — no fluff, no unnecessary hedging, get to the point). Do NOT send anything — drafts only, left in the Gmail drafts folder for Lauren to review and send herself.

5. Build a final structured report with:
   - Top Priorities (max 5) — the highest-stakes items across all buckets
   - HIGH URGENCY list (one line each, note "draft ready" next to any you drafted a reply for)
   - MEDIUM URGENCY list (one line each)
   - LOW URGENCY / FYI list (one line each)
   - Any items where information was missing/ambiguous and you need Lauren's input before drafting a reply — flag these explicitly rather than guessing

Keep the whole report tight, bulleted, and scannable — no long paragraphs, no motivational filler. This is an operational briefing, not a conversation.

6. DELIVERY: Post the final report to Slack using slack_send_message with channel_id "U082P86A6SU" (this is a DM to Lauren herself — sending to her own user_id opens/uses her DM). Format the message with Slack markdown (bold headers, bullet lists). This is the primary delivery channel — Lauren wants all work notifications routed to Slack rather than just the in-app chat summary.