---
name: chatgpt-handoff-processing
description: Process today's ChatGPT/Codex handoff into the vault and archive it
---

Before processing the vault, look for today's ChatGPT/Codex handoff at:
`1 Inbox/AI Handoffs/YYYY-MM-DD ChatGPT Handoff.md` (substitute today's actual date for YYYY-MM-DD).

If the file does not exist, stop — there is nothing to process today. Do not create or fabricate a handoff file.

If it exists, treat it as source material, not automatically confirmed truth. Reconcile it with:
- Claude's activity history
- claude-mem
- existing canonical notes in the vault
- source documents referenced by the handoff

Cross-check every claim in the handoff against these sources. Note any discrepancies explicitly.

After successfully incorporating the handoff into the vault (updating/creating the relevant canonical notes and daily knowledge record):

1. Update the handoff file's status field to `processed`.
2. Add a link from the handoff file to the final daily knowledge record it fed into.
3. Move the file to:
`6 System/Archive/AI Handoffs/YYYY-MM-DD ChatGPT Handoff.md`

Do NOT archive the file if:
- processing was incomplete, or
- there are material contradictions between the handoff and other sources that remain unresolved.

In either of those cases, leave the file in place in `1 Inbox/AI Handoffs/` and clearly flag what is unresolved (either in the file itself or in your summary back to Lauren), so it can be revisited.

Report back concisely: what was found, what was reconciled/flagged, and final status (processed+archived, or left pending with reasons).