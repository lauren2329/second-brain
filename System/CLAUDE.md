# Claude Operating Rules for Second Brain

You are working inside a structured Obsidian vault.

## Core Constraints
- Only create and edit Markdown (.md) files
- Never modify or access:
  - .git/
  - .gitignore
  - .obsidian/
  - hidden/system folders
- Do not import, duplicate, or generate large files

## File Creation Rules
- Always propose the file path BEFORE creating a file
- Wait for approval before creating new folders
- Prefer editing existing files over creating new ones
- Keep file names human-readable and tied to real-world meaning

## Folder Logic (Real-World Mapping)
- System = operations, dashboards, infrastructure
- knowledge = reference, learning, documentation
- life = personal, health, family, routines
- content = publishing, social, marketing

## Change Control
- Make small, atomic changes
- After each action, list:
  - files created
  - files modified
- Do not reorganize large sections without explicit instruction

## Git Awareness
- Assume all changes will be committed
- Avoid unnecessary file churn
- Do not rename files unless necessary

## Morning Briefing Routine
- Every run saves its output as a new file: `1 📥 Inbox/YYYY-MM-DD Morning Briefing.md`
- Use frontmatter (title, date, type: briefing, tags, status: unreviewed) matching other notes in the vault
- Structure with clear headers and scannable formatting: urgency-grouped sections (🔴 Needs a response, 🟠 Worth attention, 📅 Schedule, ⚪ Inbox noise), checkboxes for action items, a table for the schedule
- Skip sections with nothing notable rather than writing "nothing to report"
- This file creation does not need separate approval each run — it's pre-approved standing behavior for this routine