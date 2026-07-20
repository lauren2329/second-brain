# Restore macOS Launchpad with Undye

> **Status:** Active workaround for macOS Tahoe (macOS 26)
> **Risk level:** Moderate — modifies system files, unsupported by Apple
> **Reversible:** Yes — fully reversible by re-running the script

## What This Does

[Undye (Launchpad Revived)](https://github.com/) replaces macOS Tahoe's Dock with an older Apple-signed Dock binary from an early macOS 26 beta when Launchpad still existed. It also reinstalls the Launchpad app that Apple removed.

- Uses **Apple-signed, unmodified binaries** — no code injection or patching
- Restores the paginated full-screen app grid with folder support
- Reduces Liquid Glass translucency across menus, Control Center, and system panels
- Spotlight and App Library remain available alongside Launchpad

## Prerequisites

- Personal Mac you fully own and administer
- Comfortable with Terminal and macOS Recovery
- A **current backup** (Time Machine or equivalent) — do this first
- Not for work/managed/MDM devices

---

## Step-by-Step

### 1. Download Undye

1. Go to the Undye GitHub repo (search "Launchpad Revived Undye GitHub")
2. Click **Code → Download ZIP**
3. Extract the ZIP and move the folder somewhere accessible (e.g. `~/Downloads/Undye/`)

### 2. Disable System Integrity Protection (SIP)

SIP must be temporarily disabled to allow system file modification.

**Apple Silicon:**
1. Shut down the Mac
2. Hold the **power button** until "Loading startup options" appears
3. Select **Options → Continue** to enter Recovery
4. Open **Utilities → Terminal**

**Intel Mac:**
1. Restart and immediately hold **Command + R**
2. Wait for Apple logo or spinning globe
3. Open **Utilities → Terminal**

In Recovery Terminal:
```
csrutil disable
```

Restart normally after confirmation.

### 3. Run the Undye Script

Open Terminal in macOS and navigate to the extracted folder:

```bash
cd ~/Downloads/Undye    # adjust path as needed
sudo ./launchpad
```

Enter your administrator password when prompted.

The script will:
- Replace the Dock binary
- Reinstall the Launchpad app
- Restart system services
- Print code-signing info so you can verify Apple signatures

### 4. Verify

- Launchpad should appear in the Dock or respond to its keyboard shortcut (**F4** or pinch gesture)
- Full-screen app grid with pages and folders works as before
- System UI (menus, Control Center) should appear more opaque

**Optional:** Enable **Reduce Transparency** in System Settings → Accessibility for even less translucency (independent of Undye).

> Note: Calendar and other dynamic icons appear static within Launchpad — cosmetic only.

### 5. Re-enable SIP

After confirming everything works, restart into Recovery again and run:

```
csrutil enable
```

Restart normally. Launchpad continues working with SIP re-enabled.

---

## Reverting

To undo everything and return to default macOS Tahoe:

1. Disable SIP (see Step 2)
2. Run the same script again:
   ```bash
   sudo ./launchpad
   ```
3. Re-enable SIP

---

## Caveats

| Concern | Detail |
|---|---|
| Apple support | May ask you to revert before troubleshooting unrelated issues |
| Future updates | A major macOS update could break compatibility — check before updating |
| SIP | Only needs to be disabled during install/uninstall, not ongoing |
| Managed devices | Do not use on work or MDM-managed Macs |

---

## Why Apple Removed Launchpad

Apple has been moving toward search-first navigation via Spotlight across macOS, iOS, and iPadOS — absorbing app-discovery features into a unified systemwide search. macOS Tahoe introduces an expanded Spotlight with App Library (auto-categorized, like iOS) as the replacement. Launchpad's visual grid model was deprecated in favor of this approach.

---

*Last reviewed: 2026-05-17*
