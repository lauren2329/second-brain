---
name: weekly-status-update
description: Reviews the past week's activity and drafts a short status update
---

It's Friday afternoon. Review Lauren's week and draft a short status update she can use as a personal recap.

Pull context from available connectors:
- **Google Calendar** (mcp__fdecf106-fd1a-441d-945a-78524b3ed5bb__list_events): List events from the past 7 days to see what meetings, calls, and commitments happened.
- **Gmail** (mcp__2fe12232-96a6-47f7-ad79-fac634b2ff1e__search_threads): Search threads from the past 7 days for key topics, decisions, and action items.
- **Slack** (mcp__73f82e4b-d81e-4d30-8922-ef9e178fdf07__slack_read_channel or slack_search_public): Look for recent activity, messages, or discussions involving Lauren.

Synthesize into a **short weekly status update** (under 200 words) formatted as clean Markdown (CommonMark — blank line before every heading and every list, proper `#`/`##` headers, no run-on paragraphs):

```
# Weekly Status – [date range]

## What I worked on

- [2–4 bullet points of key work, projects, or meetings]

## Progress made

- [1–3 wins or things completed]

## Up next

- [1–3 priorities or pending items heading into next week]

## Blockers / needs

- [Any blockers, or "None" if clear]

---
*Sources: [connectors actually used, e.g. Google Calendar, Gmail]*
```

Keep it crisp and factual — based only on what actually shows up in the data. If a connector is unavailable, skip it gracefully and note it in the Sources line.

Save the output as a markdown file named `Weekly Status - [date range].md` (e.g. `Weekly Status - 2026-07-10 to 2026-07-17.md`) in the Obsidian Inbox folder at `/Users/laurenbratcher/Documents/second-brain/1 📥  Inbox`. Use the Write tool directly — do not use Apple Notes for this task.