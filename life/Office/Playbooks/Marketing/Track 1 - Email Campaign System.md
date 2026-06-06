---
title: Track 1 - Email Campaign System
date: 2026-06-06
type: playbook
status: active
tags: [marketing, email, kynorml, revenue]
---

## Overview

8,000 subscribers. 0% fees via Zeffy. Direct line to your warmest audience.

**The list is an advocacy list — not a donor list.** These are people who care about cannabis rights. Many are patients, consumers, and advocates who are already financially stretched. Mass donation asks underperform against this demographic.

**What works:** Transactions with a value exchange. KYCannaCon tickets. Membership (access and community, not charity). Event vendor and sponsor outreach to businesses. Directory listing offers to cannabis-adjacent businesses.

**What doesn't:** Cold donation asks to the full list. Reserve donation campaigns for matching gift moments, crisis/news events with high urgency, or deeply segmented high-engagement subsets.

Platforms: **Zeffy** (donations, ticket sales, membership) + **Action Network** (advocacy emails, list management)

---

## Campaign Types — Priority Order

| Priority | Campaign | Trigger | Revenue Stream | Frequency |
|---|---|---|---|---|
| **1** | KYCannaCon early bird tickets | Date confirmed | Ticket sales | 1x/year |
| **1** | KYCannaCon sponsor push | Date confirmed | Sponsorship revenue — upfront | 1x/year |
| **2** | Featured listing offer (businesses) | Rolling | Directory revenue — recurring | Quarterly |
| **3** | Membership drive | Annual + milestone | Recurring revenue | 2x/year |
| **4** | Matching gift campaign | Anchor donor secured | Donations (doubled) | 1–2x/year |
| **5** | Merch drop | New product / seasonal | Merch sales | As needed |
| **Low** | Standard donation ask | Crisis/urgency moment only | Donations | Use sparingly |
| **Low** | News reaction | Breaking state or national story | Engagement | As needed |

Campaigns 1 and 2 are transactions — someone gets something specific in return. Lead with those. Donations without a matching gift or crisis moment are the weakest performs against this list.

---

## Campaign 1 — Donation Ask (Send This Week)

**Subject line options (A/B test these):**
- `8 years fighting for Kentucky. Here's where we stand.`
- `Kentucky cannabis patients still need you.`
- `KYNORML is still here. Are you with us?`

**Body:**

> KYNORML has been fighting for Kentucky cannabis patients for 8 years.
>
> Through advocacy, legislation, education, and three years of KYCannaCon, we've built something real — a movement that shows up when patients need it most.
>
> Right now we need your support to keep going. If KYNORML has ever mattered to you — or to someone you know — $25 today keeps us in the fight.
>
> **[Support KYNORML — button linking to Zeffy]**
>
> Every dollar goes directly to advocacy and education for Kentucky patients.
>
> Thank you,
> Lauren Bratcher
> Executive Director, KYNORML

**Follow-up (set as automation, sends once):**
- Trigger: did not open original email
- Send: 5 days after original
- Subject: `Still time — support KYNORML`
- Body: One sentence + button. "If you missed our note earlier — KYNORML needs your support right now. $25 makes a direct difference. [Donate]"

---

## Campaign 2 — Matching Gift Campaign

Use when you have an anchor donor willing to match.

**Subject:** `[Name] will match your gift — but only until [date]`

**Body:**
> [Donor name or "A generous KYNORML supporter"] has agreed to match every donation made before [date] — dollar for dollar, up to $[amount].
>
> That means your $25 becomes $50. Your $100 becomes $200.
>
> This window closes [date]. Make your gift count twice.
>
> **[Donate Now — Zeffy link]**

---

## Campaign 3 — KYCannaCon Early Bird

Send as soon as Year 4 has a date.

**Subject:** `KYCannaCon Year 4 is happening. Early bird is open.`

**Body:**
> Four years. Kentucky's only cannabis conference is back.
>
> KYCannaCon Year 4 is happening on [date] in [location]. Early bird tickets are available now — and they won't last.
>
> As a KYNORML supporter, you get first access before tickets go public.
>
> **[Get Early Bird Tickets — link]**

---

## Campaign 4 — Directory Featured Listing Offer

> **NOTE:** Send to every business currently in the KYNORML directory. Personalize [business name]. Do not mass blast — send individually or in small batches of 10–15 at a time.

**Subject line options (A/B test these):**
- `[Business name] — upgrade your KYNORML listing`
- `Get found by more Kentucky cannabis customers`
- `Your KYNORML directory listing — one upgrade available`

**Body:**

> Hi [first name or business name],
>
> You're already in the KYNORML directory — which means customers are already finding you there. A featured listing puts you at the top, adds your logo, your direct link, and a social mention to our 8,000-subscriber list.
>
> More visibility. More customers finding you first.
>
> Featured listing: **$75/month or $750/year** (two months free on annual). Reply to this email or click below to upgrade.
>
> **[Upgrade My Listing — Zeffy link]**
>
> Thanks for being part of the Kentucky cannabis community.
> Lauren Bratcher
> Executive Director, KYNORML

---

## Campaign 5 — Membership Drive

> **NOTE:** Send after Zeffy membership tiers are live and tested. Do not send before the Zeffy page is confirmed working. See [[Zeffy Membership Setup Guide]] for pre-send checklist.

**Subject line options (A/B test these):**
- `KYNORML membership is open — here's what you get`
- `Join KYNORML as a member — $25/month`
- `Become a KYNORML member today`

**Body:**

> We just launched KYNORML membership — and we want you in.
>
> As a member, you get: community recognition, member-only legislative updates during the General Assembly session, early access to KYCannaCon tickets before they go public, and your name on the KYNORML website supporter list.
>
> This is not a donation. It's a membership — $25/month or $250/year. You're joining something.
>
> **[Become a Member — Zeffy link]**
>
> Kentucky cannabis patients need an organized community behind them. Membership makes that real.
>
> Lauren Bratcher
> Executive Director, KYNORML

**Follow-up (non-openers):**
- Trigger: did not open original email
- Delay: 5 days
- Subject: `Membership is open — don't miss it`
- Body: "KYNORML membership launched this week — $25/month, member-only updates, early KYCannaCon access. Join here: [link]"

---

## Segmentation

| Segment | Who | Used For |
|---|---|---|
| Full list | All 8k subscribers | Donation asks, news, KYCannaCon |
| Members | Paying members only | Member-exclusive updates, early access |
| Directory businesses | Businesses in the directory | Featured listing offer, sponsorship asks |
| KYCannaCon past attendees | Anyone who registered for past events | Year 4 early bird, sponsor packages |

---

## Automation Setup

**Automation 1: Donation follow-up**
- Trigger: Opened donation campaign but did not click
- Delay: 3 days
- Message: Shorter version of original ask

**Automation 2: Non-opener follow-up**
- Trigger: Did not open original campaign
- Delay: 5 days
- Message: Different subject line, same CTA

**Automation 3: New subscriber welcome**
- Trigger: New signup
- Immediate: Welcome email — who KYNORML is, what we fight for, link to directory and donation page

---

## Monthly Email Calendar Template

| Week | Campaign |
|---|---|
| Week 1 | News or education send (repurposed from national NORML or KY news) |
| Week 2 | Revenue campaign (donation, listing offer, merch, membership, or tickets) |
| Week 3 | KYCannaCon update or community story |
| Week 4 | News or education send |

One revenue-focused email per month minimum. No more than 2 per week total.

---

## Related Files

- [[KYNORML Revenue and Marketing System]]
- [[Track 4 - PR Response System]] — news emails tie directly to PR response
