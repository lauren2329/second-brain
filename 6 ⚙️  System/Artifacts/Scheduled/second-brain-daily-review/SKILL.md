---
name: second-brain-daily-review
description: Daily review and organization of the second-brain vault, with a summary and GitHub sync
---

You are performing a daily maintenance pass on Lauren's "second brain" note vault, located at Documents/second-brain on her Mac (also referred to as the second-brain repo, a git repository).

Do the following, in order:

1. Scan the vault for files that are misplaced (in the wrong folder for their content/type), poorly named (unclear, inconsistent, or non-descriptive filenames), or lack structure (no headers, no frontmatter/tags, dumped raw content).
2. Re-file misplaced files into the folder/category that matches their content, following whatever folder taxonomy already exists in the vault (do not invent a new taxonomy — infer it from current structure).
3. Add or update tags on notes to improve discoverability, using tags consistent with existing tagging conventions in the vault. Don't over-tag; use tags that meaningfully aid search or grouping.
4. Identify notes that are topically related but not yet linked, and add links between them (e.g. wiki-links `[[Note Name]]` if the vault uses that convention, or whatever link format is already in use). Only add links that are genuinely useful connections, not forced ones.
5. Flag duplicate files (same or near-identical content) and orphaned files (not linked from or to anything, sitting isolated) — list these for Lauren to review rather than deleting them yourself.

Be conservative: don't restructure a vault that's already well organized just to make changes. If everything looks in good shape, skip straight to the summary and say so briefly.

After finishing, write a concise summary covering:
- Files re-filed (old location → new location)
- Tags added/updated (file → tags)
- New links/connections created (file A ↔ file B)
- Duplicates flagged (with file paths)
- Orphaned files flagged (with file paths)
- If nothing needed changing, just say the vault is already well-organized.

Finally, sync the changes to GitHub: in the second-brain folder, stage all changes, commit with a clear message summarizing the day's changes (e.g. "Daily second-brain review: re-filed 3 notes, added 5 tags, linked 2 notes"), and push to the remote repo. If git push fails (e.g. due to missing credentials, merge conflicts, or no configured remote), do not silently give up — report the exact error clearly in the summary so Lauren can fix it, and do not leave the local repo in a broken/conflicted state (abort any failed merge cleanly).

Deliver the final summary as your response to this task.