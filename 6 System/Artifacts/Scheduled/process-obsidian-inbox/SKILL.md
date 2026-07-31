---
name: process-obsidian-inbox
description: Ingest and process Obsidian inbox notes into structured system
---

Scan my Obsidian inbox folder for new or unprocessed notes.

For each item:
1. Classify it as one of:
   - Task
   - Note
   - Idea
   - Reference
   - Calendar/Scheduled item

2. Take action:
   - Tasks → convert into actionable tasks with clear next steps
   - Ideas → move to ideas or projects
   - Notes → clean formatting and link to relevant topics
   - Reference → store in knowledge/wiki structure
   - Calendar items → extract dates and flag for scheduling

3. Apply:
   - Proper file naming
   - Tags
   - Internal links

4. Move processed items out of inbox into appropriate folders

5. Generate a short summary of what was processed

## Output requirements

- Always save the run's output as a markdown file in the Obsidian Inbox folder — never just report back in chat. Filename format: `📋 Inbox Processing Report YYYY-MM-DD.md`. If a report for today's date already exists (multiple runs same day), append a new dated/timestamped section to it rather than creating a duplicate file.
- Format for readability — this report gets read quickly, so structure it like a scannable dashboard, not a wall of prose:
  - Use a bolded key-value header block (Date, Status, Items Found, New Since Last Scan) at the top.
  - Use clear `##`/`###` section headers to separate Summary, Actions Taken, Outstanding Actions, and Run History.
  - Use checklist syntax (`- [ ]`) for any item requiring manual follow-up.
  - Use markdown tables for anything tabular (routing destinations, run history) — never a paragraph listing multiple files and folders.
  - Keep the Summary section to a few short sentences per item, not dense paragraphs.
  - Bold or flag anything urgent/sensitive so it stands out at a glance.