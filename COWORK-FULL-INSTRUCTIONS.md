# Full Instructions for Cowork: Lauren's Digital Planner

Paste this into Cowork to build the complete interactive planner artifact:

---

Create an interactive HTML5 artifact for **Lauren's Digital Planner** — a comprehensive command center dashboard that coordinates her 21-member council and pulls live data.

## Design & Layout

- **Header**: "Lauren's Digital Planner" with "📍 Bowling Green, KY" location
- **Navigation**: Horizontal tab bar with 9 sections
- **Color Scheme**: Professional (purples, greens, blues for different domains)
- **Responsive**: Works on desktop and mobile
- **Dark mode friendly**: Use CSS variables for colors

## The 9 Tabs

### 1. TODAY (Default Tab)
**Purpose**: Your entire day at a glance. Reduce decision fatigue.

**Content** (top to bottom):
1. **Brain Dump** (first) — textarea, min-height 80px
   - Placeholder: "What's on your mind? Dump it here..."
   - Auto-save to localStorage

2. **Annabel's Briefing** (smaller card, purple gradient)
   - **Buttons**: "🔄 Refresh" | "Clear"
   - **Content**: 
     - 📋 Morning Summary (1-2 sentences)
     - 🚩 Urgent Actions (2-3 bullets)
     - 📌 Today's Focus (2-3 bullets)
   - Auto-load from localStorage or fetch from Claude API

3. **Council Suggests** (orange gradient card)
   - Shows council input on priorities
   - Load from localStorage

4. **Recommended Focus** (blue gradient card)
   - Top 3 focus areas for today
   - Load from localStorage

5. **Today's Events** (2-col grid)
   - Pull from Google Calendar (today only)
   - Show time, title, calendar type

6. **Unread Email** (2-col grid)
   - Pull from Gmail (unread, today)
   - Show from, subject, time

7. **iMessages**
   - Pull recent messages
   - Show from, message snippet, time

### 2. WEEK
**Purpose**: See the week ahead and manage FlyLady zones.

**Content**:
1. **Top Row** (2-col side-by-side):
   - **Week Range**: Mon - Sun dates
   - **Current Zone**: Which FlyLady zone this week (Zone 1-5), with pip indicators (●●●●○)

2. **Inbox Section** (from Gmail/Calendar)
   - "From your inbox" header
   - Email/calendar cards

3. **7-Day Grid** (main feature)
   - 7 columns (Sun-Sat)
   - Each day shows:
     - Day name + date
     - Daily theme (Monday: "Planning & Paperwork", etc.)
     - 3-4 events for that day
     - Non-Negotiables checkboxes (strikethrough when checked)
   - Persist checkbox state in localStorage

### 3. HOME
**Purpose**: Home management, FlyLady, routines, meals.

**Content**:
1. **Current FlyLady Zone** card
   - Zone name + tasks for this week

2. **Morning & Evening Routines** (2-col)
   - Checklist items
   - Persist checked state

3. **FlyLady This Week** card
   - Tasks for current zone
   - Checkboxes

4. **Home Notes** textarea
   - "Home tasks, repairs, projects..."
   - Auto-save

5. **Meal Planning & Groceries** (clickthrough buttons)
   - Button: "📋 Meal Plan" → Opens modal with meal-plan textarea
   - Button: "🛒 Grocery List" → Opens modal with grocery-list textarea
   - Both modals have close button (×)
   - Both auto-save to localStorage

### 4. WORK
**Purpose**: Work tasks, projects, events.

**Content**:
1. **Work Events Today**
   - Pull from KYNORML calendar
   - Show time, title

2. **Work Tasks** (add/delete)
   - Input field + add button
   - List with checkboxes
   - Persist in localStorage

3. **Project Links** (add/delete)
   - Name input + URL input + add button
   - List with clickable links
   - Persist in localStorage

4. **Work Notes** textarea
   - Auto-save to localStorage

### 5. HEALTH
**Purpose**: Health appointments, medications, mental health tracking.

**Content**:
1. **Upcoming Health Appointments**
   - Pull from calendar (filter for doctor, therapy, dental, etc.)

2. **Medications** textarea
   - "Medications, dosages, schedules..."
   - Auto-save

3. **Mental Health Notes** textarea
   - "Mood, therapy notes, reflections..."
   - Auto-save

4. **Health Goals** (add/delete list)

### 6. FINANCE
**Purpose**: Bills, financial tracking.

**Content**:
1. **Upcoming Bills** (add/delete list)
   - Amount, due date, auto-save

2. **Finance Notes** textarea
   - Auto-save

### 7. FAMILY
**Purpose**: Family member tracking and individual pages.

**Content**:
1. **Family Member Cards** (grid, clickable)
   - Lauren (you) → Opens modal with individual page
   - Matthew → Opens modal
   - Benjamin → Opens modal
   - Lillian → Opens modal
   - Colin → Opens modal
   
   Each modal shows:
   - Name + emoji
   - Notes textarea (auto-save)
   - Events tracker
   - Close button

### 8. PETS
**Purpose**: Pet tracking and individual pages.

**Content**:
1. **Pet Cards** (grid, clickable)
   - Danny → Opens modal with individual page
   - Meadow → Opens modal
   - Kiki → Opens modal
   - Walter → Opens modal
   - Sox → Opens modal
   - Gandolf → Opens modal
   - Spooky → Opens modal
   - Princess → Opens modal
   
   Each modal shows:
   - Pet name + emoji
   - Notes textarea (auto-save)
   - Health/care tracking
   - Close button

### 9. AI COUNCIL
**Purpose**: See all 21 council members organized by domain.

**Content**:
1. **Council Grid** (organized sections)

   **Devoted to Lauren** (5 members)
   - Annabel (📚) — Personal Assistant & Librarian
   - Sylvia (💚) — Wellness Coach
   - Prudence (💰) — Personal Finance Manager
   - Vera (⚖️) — Legal Advisor
   - Sage (🧘) — Counselor

   **Home — Coordinated by Martha** (6 members)
   - Martha (🏠) — Housekeeper
   - Mary (👩‍🍼) — Nanny
   - Penny (🎩) — Butler
   - Dolly (🤠) — Ranch Hand
   - Imogen (🎨) — Interior Designer
   - Harriet (📖) — Tutor

   **Work — Coordinated by Victoria** (10 members)
   - Victoria (💼) — Chief of Staff
   - Dot (📊) — CPA
   - Roxanne (📈) — Sales Manager
   - Sterling (🎯) — Consultant
   - Vivienne (📢) — Marketing Director
   - Greta (💵) — Grant Writer
   - Fiona (🤝) — Community Organizer
   - Cleo (✍️) — Content Creator
   - Constance (📧) — Head of Correspondence
   - Ada (⚙️) — Systems Manager

2. **Council Notes** textarea
   - Auto-save to localStorage

## Data Sources

**Real-time pulls** (use available MCP tools/APIs):
- ✅ Gmail: unread emails for today
- ✅ Google Calendar: events (KYNORML calendar + Personal calendar)
- ✅ iMessages: recent messages
- ✅ Claude API: Annabel's morning briefing coordination

**Local storage** (persist on device):
- Brain dump (daily, resets at midnight)
- Task lists
- Notes (all textareas)
- Checkbox states (non-negotiables, routines)
- Family member notes
- Pet notes
- Meal plan, grocery list

## Key Features

1. **Daily Reset**: Brain dump and task lists reset at midnight
2. **Persistent Checkboxes**: Non-Negotiables, routines, tasks persist until manually reset
3. **Modal Overlays**: Family and pet pages open as full-screen overlays with close buttons
4. **Auto-save**: All textareas save to localStorage on input
5. **Tab Navigation**: Clicking tabs switches views seamlessly
6. **Responsive Grid**: 2-column layout on desktop, 1-column on mobile
7. **Color-coded**: Different domains have different accent colors
8. **Smooth UX**: Loading states, clear empty states, intuitive buttons

## Styling Notes

- Use CSS Grid and Flexbox
- Card-based design with subtle borders and shadows
- Gradient backgrounds for briefing cards (purple, orange, blue)
- Consistent spacing and typography
- Font: System fonts (SF Pro, -apple-system, Segoe UI)
- Accent colors: Purple (#6c63ff), Orange (#d97706), Blue (#0369a1), Green (#2caa6e)

## Technical Requirements

- Vanilla JavaScript (no frameworks required)
- localStorage API for persistence
- fetch() for API calls
- CSS Grid + Flexbox for layout
- Mobile-responsive
- Works in browser (no build step needed)

---

Build this as a **single HTML artifact** that can be opened and used immediately.
