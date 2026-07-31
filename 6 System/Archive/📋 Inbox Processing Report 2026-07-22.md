# 📋 Inbox Processing Report
**Date:** 2026-07-22
**Status:** First scan since 2026-07-17 (5-day gap)
**Items found:** ~100+ files/folders (sampled first 2 pages; older backlog likely continues beyond what's listed below)
**Run by:** Lauren's knowledge-management assistant (remote session — this run could only reach the Drive-mirrored copy of the vault Inbox, not the local vault directly; file paths below assume the mirror matches the live vault)

---

## ⚠️ Standing issue: this Inbox has not been cleared in a month

Every "Delete Now" item flagged in the **2026-06-22** report is *still sitting here, untouched*, five reports later:

- `Claude.dmg` (305 MB installer)
- `Granola - AI Notepad.dmg` (255 MB installer)
- `readme.txt` (old font install instructions)
- `vault-structure.txt` (filesystem snapshot from April — now 3+ months stale)
- `digital-planner copy.html` (duplicate of `digital-planner.html`)

Past reports note this automation has never had delete permission on vault files ("Operation not permitted"), so these need a **manual** delete on your end. Flagging again in case they're just falling through the cracks rather than being intentionally kept.

**New this run:** two additional stray items that don't belong in an Obsidian vault at all —
- `node_modules/` — a full npm dependency folder, almost certainly created by accident (some tool run with its working directory pointed at the Inbox). Worth checking size before deleting; these can be large.
- `testdir_probe/` and `.write_test` (0 bytes) — look like automation self-test artifacts, not real content.

---

## 🔴 New since 2026-07-17 — needs a routing decision

| Item | What it is | Suggested destination | Notes |
|---|---|---|---|
| `Financial Accounts.md` | Short note, financial account references | `Office/03_Finance-Admin/` | ⚠️ Sensitive — review before routing to a shared/general folder |
| `StudentLoanAttestationFillableForm.pdf` | Bankruptcy court fillable form (student loan discharge attestation) | `Home/05_Personal/Legal-Financial/` | ⚠️ Sensitive — personal legal matter |
| `Kentucky Cannabis Foundation _ Print _ Candid.pdf` | Org profile printout (Candid/GuideStar) | `Office/Entities/02_KY-NORML/Research/` | Reference material |
| `05-VMP-Funding-Package-DRAFT.docx` | Draft funding package for Verdant Management Partners | `Office/Entities/01_Verdant-Management-Partners/` | Still marked DRAFT |
| Common Good Network legal batch — `notice.pdf`, `notice (1).pdf`, `Complete_with_Docusign_Common_Good_Network_(.pdf` (3 near-identical copies incl. one in `Common Good Network, INC - Digital Signatures 2/`), `Common Good Network () [LBC] KY - Master ETABS Agreement v4.0.pdf`, `ConfirmationLetter.pdf` | Signed agreement + related notices, now fully executed | `Office/Entities/03_Common-Good-Network/Agreements/` | 3 copies of the same signed PDF — keep one, delete the rest |
| `Common Good Network Governing Documents/` + `.zip`, `Common Good Network Articles of Incorporation/` + `.zip` | Formation documents (unzipped folder *and* the original zip both present) | `Office/Entities/03_Common-Good-Network/Governance/` | Delete the `.zip` once confirmed the unzipped folder is complete |
| `Common Good Network, INC - Digital Signatures/` + `.zip`, and a second `Common Good Network, INC - Digital Signatures 2/` folder | Two separate digital-signature exports | `Office/Entities/03_Common-Good-Network/Agreements/` | Confirm both are needed — "2" folder may be a re-export duplicate |
| `Colin KSP form.pdf`, `Correct KSP form.pdf.pdf`, `KSP Envelopes.pdf` | Kentucky State Police forms for "Colin" | `Home/05_Personal/` | ⚠️ Sensitive/personal — not Lauren's own paperwork |
| `2024AnnualReport-KYGaming.pdf`, `KRS620_363(K).pdf`, `KRS238_530(K).pdf`, `DCG_LicensingHelpfulHints07_09.pdf`, `Warren County Charitable Activity and Continuity Statement.pdf`, `For office use only_.pdf`, `PowerPoint Presentation.pdf`, `application prep .pdf`, `startup-funding-template.md.pdf` | Kentucky gaming/charitable-gaming licensing research bundle | `Office/Entities/03_Common-Good-Network/Licensing-Research/` | Looks like one coherent research batch — consider one combined note |
| `harada-method-and-shohei-ohtani-v0-nywezp2sti1g1.webp` (+ duplicate `(1).webp`) | Reference image for the Harada Chart method | `Office/Entities/02_KY-NORML/Strategy/` | Delete the duplicate |
| Event/property photos — `Rogers-Hollow-with-Julio-4-1024x614.png` (+ dup), `gatheroffice.png`, `Full_Gather_Photo.png`, 6 Facebook/Instagram export photos (`74xxxxxxx…_n.jpg`) | Photo dump, likely a venue or event (Rogers Hollow) | `Office/06_Assets-Media/Photos/` | Delete the duplicate Rogers-Hollow file |
| `Mandy.png`, `IMG_8219.heic`, 2 screenshots (7/18, 7/20) | Miscellaneous personal images | `Home/05_Personal/Photos/` | |
| `golden-door-mandala.html` (+ `_1`, `_2` versions), `business-calendar.html` (+ `_1` version, here in the vault Inbox — separate from the newer copies in Drive `Downloads`) | Earlier iterations of today's build work | `Office/Entities/01_Verdant-Management-Partners/Tools/` | Keep the latest version only once you confirm which is final |
| `Inbox Triage — July 22, 2026.md` | Today's *email* inbox triage note (separate automation) | Leave in place / move to `Office/Briefings/` | Not part of this file-inbox scan — included for awareness |

---

## ⏳ Still outstanding from the 2026-07-17 report (unchanged)

Everything below was already flagged and routed in the last report but is still sitting in the Inbox — repeating for visibility rather than re-analyzing:

- **Route to vault:** `Weekly Status Report... (Processed).md`, `Verdant Management Partners - Org Structure (Processed).md` ⚠️ contains compensation data, `Bowling Green Gaming Centers - Veteran Posts.md`, `KYNORML ED Operations Handbook.docx`, `KYNORML Monthly Operations Handoff.docx`, `KY_NORML_Lean_Website_FINAL.docx`, `OPA+Pledge+of+Support.docx`, `Kentucky_OffRamp_Grant_Complete_v2.docx`, `BALANCE_REPORT.xlsx`, `KY NORML Transactions 2018-2025.xlsx`, `scholarship application.docx`, `Secure_Reference_Sheet.docx` ⚠️ sensitive
- **Duplicates to delete:** `KYNORML ED Operations Handbook copy.docx`, `KYNORML Monthly Operations Handoff copy.docx`, `Kentucky_OffRamp_Grant_Complete_v2 fresh.docx`, `digital-planner copy.html`
- **Delete now:** `Weekly Status - 2026-07-03 to 2026-07-10.md`, `Gaming Centers in BG.md`, `readme.txt`, `Claude.dmg`, `Granola - AI Notepad.dmg`, `vault-structure.txt`

---

## Run history

| Run | Date | New items | Status |
|---|---|---|---|
| ... | 2026-06-22 → 2026-07-17 | (see prior reports) | Actions largely still pending |
| Daily scan | **2026-07-22** | ~35+ new files/folders since 07-17 (Common Good Network licensing batch, Verdant Management Partners build work, personal legal doc, stray dev artifacts) | Routing suggestions above — awaiting manual move/delete (this automation still cannot delete or move vault files) |

---
*Generated by: Lauren's knowledge-management assistant, via the Google Drive mirror of the vault (no direct local filesystem access this run).*
