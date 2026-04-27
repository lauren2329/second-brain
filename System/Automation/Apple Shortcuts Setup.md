---
title: Apple Shortcuts Setup
date: 2026-04-23
type: note
status: active
tags: [automation]
---

## Apps Built

Five native macOS apps live in `~/Applications/`. Each calls a shell script in this folder and opens the result in Obsidian.

| App | What it does | Siri phrase |
|-----|-------------|-------------|
| Brain Dump.app | Prompts for text → captures to today's Brain Dump note | "Open Brain Dump" |
| Daily Note.app | Creates today's daily note if needed, opens it | "Open Daily Note" |
| New Meeting.app | Prompts for name → creates meeting note | "Open New Meeting" |
| New Idea.app | Prompts for name → creates idea note | "Open New Idea" |
| Weekly Review.app | Generates this week's review note | "Open Weekly Review" |

## Shell Scripts

The apps call these scripts. Edit them here — the apps pick up changes automatically.

| Script | Purpose |
|--------|---------|
| `capture.sh` | Appends timestamped line to today's Brain Dump |
| `daily_note.sh` | Creates `Planner/Daily Journal Notes/YYYY-MM-DD.md` |
| `new_meeting.sh` | Creates `Office/Whiteboard/Meetings/YYYY-MM-DD Name.md` |
| `new_idea.sh` | Creates `Office/Whiteboard/Ideas/YYYY-MM-DD Name.md` |
| `weekly_review.sh` | Creates `Planner/Daily Journal Notes/Weekly Review YYYY-MM-DD.md` |

## Siri Usage

Say: **"Hey Siri, open [App Name]"**
- "Hey Siri, open Brain Dump" → dialog pops, type or dictate
- "Hey Siri, open Daily Note" → today's note opens in Obsidian
- "Hey Siri, open New Meeting" → dialog pops for meeting name
- "Hey Siri, open New Idea" → dialog pops for idea name
- "Hey Siri, open Weekly Review" → review note created and opened

## Dock Setup (recommended)

1. Open Finder → go to `~/Applications/`
2. Drag each app to your Dock
3. One-click capture from anywhere on the desktop

## Spotlight

All five apps appear instantly in Spotlight (Cmd+Space → type "Brain", "Daily", etc.)

## Share Sheet (capture from any app)

To capture text from Safari, Notes, Mail, etc. without switching apps:
1. Open **Shortcuts** app
2. New shortcut → Add action: **Run Shell Script**
3. Shell: `/bin/bash` | Script:
   ```
   bash "/Users/laurenbratcher/Documents/Obsidian Vault/laurenMAC/System/Automation/capture.sh" "$*"
   ```
4. At top of shortcut → enable **Receive input from: Share Sheet**
5. Name it **Brain Dump** → Options → pin to Menu Bar

## Apple Reminders Integration

Create a list called **Vault Inbox** in Reminders for time-sensitive tasks.
- Siri: "Remind me to [X] at [time]" → goes to Vault Inbox
- During daily note review: move done/scheduled items into vault

## Apple Calendar Integration

When you schedule a meeting in Calendar, trigger "New Meeting" shortcut manually (or via Siri) to create the matching note. Use the Calendar event title as the meeting name.
