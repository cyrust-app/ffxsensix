# 📱 Display Optimizer User Guide

Welcome to the Display Optimizer documentation. This tool utilizes a sophisticated Watchdog & Tile architecture to provide high-performance display scaling only when your game is active.

---

## 🚀 Execution Workflow

Follow these steps to safely optimize your gaming experience:

### 1. Configure Your Presets
Before launching, define your display targets in the configuration dialog:
* Select Profile: Choose between Standard, Balanced, or Pro Tuning.
* Tuning DPI: Enter your desired gameplay density (Safe range: 320 - 1200).
* Reset DPI: Enter your device's stock DPI (Default: 411) for automatic recovery.

### 2. Launching the Monitor
1. Select your target game from the dashboard.
2. Tap the Start button.
3. The app will optimize system resources (CPU/GPU) and launch the game.
4. MonitorService will appear in your notification bar, indicating that the "Watchdog" is tracking the game process (PID).

### 3. Activating via Quick Settings Tile
To prevent UI glitches during navigation, the resolution does not change automatically upon launch. You are in control:
1. Pull down your Android Quick Settings panel.
2. Add and tap the "Display Optimizer" Tile.
3. The Tile will turn Active (Blue), and the system will instantly apply your wm size and wm density targets.

### 4. Smart Auto-Restore System
This tool is built with a "Safety-First" approach:
* Process Watchdog: Once you close the game, MonitorService detects the missing PID and automatically triggers a reset via ResetReceiver.
* Manual Restoration: You can revert to stock settings at any time by toggling the Tile OFF or tapping "Restore Display" on the active notification.

---

## 🛠 Technical Architecture

| Component | Function |
| :--- | :--- |
| MonitorService | Background watchdog that tracks the Game PID in real-time. |
| Quick Settings Tile | The master switch for executing wm size and wm density shell commands. |
| ResetReceiver | The safety net that ensures the system environment is restored upon exit. |
| Shizuku Engine | Provides high-level shell access for display modification without Root. |

---

## ⚠️ Safety Information & Best Practices

* Shizuku Status: Ensure Shizuku is authorized and running; otherwise, shell commands will fail.
* Safety Range: We strictly enforce a DPI range of 320 - 1200. Values outside this range may cause SystemUI crashes.
* Locked Devices: If the Tile is toggled while the device is locked, the system will require PIN/Biometric authentication before applying changes.

---

## 📜 System Compliance
This tool uses standard Android scaling protocols via the WindowManager. It does not modify permanent system files. All changes are temporary and fully reversible.

---

### Need Assistance?
If your screen remains at a lower resolution after closing the game, simply toggle the Display Optimizer Tile in your notification panel or use the Reset button within the main app.
