# WuWa Config File Setup Tool (P42 Toolkit)

Browser-based toolkit for generating and deploying Wuthering Waves UE config files for Android and PC. The project is static-only and is designed for GitHub Pages or any simple static file host.

## Features

| Feature | Description |
| --- | --- |
| Config Generator | Generates `Engine.ini`, `DeviceProfiles.ini`, `GameUserSettings.ini`, and optional PC `Input.ini` files. |
| Android Presets | Performance, Balanced, High, and Ultra presets with Android device-profile generation. |
| PC Presets | Windows-focused config generation with graphics, streaming, mouse, and latency options. |
| Client.log Detection | Parses uploaded logs for GPU, RAM, API, Android version, active profile, render scale, and quality settings. |
| Smart Brain | Recommends presets from local data and optional Firebase-backed feedback logic. |
| Bot Assistant | Offline-style assistant page for UE4/WuWa commands and setup help. |
| Visual Guide | Gallery and visual reference page for Wuthering Waves assets. |
| PWA Support | Includes `manifest.json`, `sw.js`, `.nojekyll`, and a custom `404.html`. |

## Project Structure

```text
.
├── index.html                  # Main toolkit / Android setup page
├── config-gen.html             # Config generator UI
├── bot.html                    # Bot assistant
├── wuwa-visuals.html           # Visual gallery / guide
├── 404.html                    # GitHub Pages 404 page
├── manifest.json               # PWA manifest
├── sw.js                       # Service worker
├── .nojekyll                   # Keeps GitHub Pages from Jekyll-processing files
├── LICENSE                     # MIT license
├── assets/
│   ├── css/
│   │   ├── style.css           # Shared styles
│   │   └── config-gen.css      # Generator styles
│   ├── js/
│   │   ├── script.js           # Shared page behavior
│   │   ├── config-gen.js       # Generator, log parser, download logic
│   │   └── p42brain.js         # Smart Brain recommendation/feedback logic
│   └── images/
│       ├── characters/         # Character images used by the generator showcase
│       └── visual-showcase/    # Visual gallery images
├── data/
│   ├── brain-data.json         # Local Smart Brain GPU/profile data
│   ├── cvar_knowledge.json     # CVar knowledge database
│   ├── presets.json            # Preset data/reference
│   └── reference/              # Setup notes and command references
├── docs/
│   └── session-logs/           # Local archived session notes
└── samples/
    ├── Client.log              # Example log for parser testing
    ├── Engine.ini              # Example generated config
    └── android/
        ├── performance/
        ├── balanced/
        ├── high/
        └── ultra/
```

## Quick Start

Open directly:

```text
index.html
```

Recommended local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

There is no build step, package manager, bundler, or backend.

## Development Checks

Run syntax checks after JavaScript changes:

```bash
node --check assets/js/config-gen.js
node --check assets/js/p42brain.js
node --check assets/js/script.js
```

For generator changes, manually test:

- Android preset generation: Performance, Balanced, High, Ultra
- PC preset generation
- ZIP download
- `Client.log` upload and detected-info display
- Generated `Engine.ini`, `DeviceProfiles.ini`, and `GameUserSettings.ini`

## External Runtime Dependencies

The app is static, but some pages load third-party browser assets:

| Dependency | Used By | Purpose |
| --- | --- | --- |
| JSZip CDN | `config-gen.html` | ZIP file download generation |
| Firebase compat CDN | `config-gen.html` / `p42brain.js` | Optional Smart Brain feedback/storage |
| Google Fonts | `config-gen.html`, `bot.html` | UI typography |

If those URLs are unavailable, core static pages may still open, but ZIP downloads, Firebase feedback, or fonts may not work as intended.

## Android Usage

Requirements:

- Termux
- Shizuku
- `rish`
- `rish_shizuku.dex`

Typical setup:

```bash
termux-setup-storage
cd ~/storage/downloads/P42
cp rish rish_shizuku.dex /data/data/com.termux/files/usr/bin/
chmod +x /data/data/com.termux/files/usr/bin/rish*
```

Common game config path:

```text
/storage/emulated/0/Android/data/com.kurogame.wutheringwaves.global/files/UE4Game/Client/Client/Saved/Config/Android/
```

Common log path:

```text
/storage/emulated/0/Android/data/com.kurogame.wutheringwaves.global/files/UE4Game/Client/Client/Saved/Logs/Client.log
```

The main page includes copy buttons for backup, delete, deploy, restore, and log-copy commands.

## PC Usage

Common config path:

```text
Wuthering Waves/Wuthering Waves Game/Client/Saved/Config/WindowsNoEditor/
```

Common log path:

```text
%LocalAppData%/Wuthering Waves/Saved/Logs/Client.log
```

PC output may include:

- `Engine.ini`
- optional `Input.ini` for mouse smoothing fixes

## Android Device Profile Generation

`DeviceProfiles.ini` generation changes depending on uploaded log state:

| Mode | Behavior |
| --- | --- |
| `Client.log` uploaded | Uses detected SoC/GPU or selected game profile, then inherits from the chosen preset tier. |
| No log + manual profile | Uses the selected GPU/SoC profile. |
| No log + auto preset | Uses one compact fallback preset profile. |

Preset base profiles:

| Preset | Base profile |
| --- | --- |
| Performance | `Android_Low` |
| Balanced | `Android_Mid` |
| High | `Android_VeryHigh` |
| Ultra | `Android_ultra` |

The generator intentionally avoids making every Android GPU profile inherit from `Android_VeryHigh`.

## Smart Brain

Smart Brain is the recommendation layer used by the config generator. It can:

- detect GPU family and tier
- detect Vulkan availability or failure
- detect active device profile
- warn about low memory, texture bias, reduced LOD, OOM, hitches, and forbidden CVars
- suggest a preset
- fill the detected-info panel from uploaded `Client.log`

Local data lives in:

- `data/brain-data.json`
- `data/cvar_knowledge.json`
- `data/presets.json`

Firebase logic in `assets/js/p42brain.js` is optional runtime behavior. The project does not require a backend server.

## Important CVars

| CVar | Purpose |
| --- | --- |
| `fx.KuroUseGPUParticles=0` | Mobile crash/stability fix. |
| `r.HZBOcclusion=1` | Helps with cave/white artifact issues. |
| `r.Kuro.AutoCoolEnable=1` | Enables thermal protection behavior. |
| `r.Kuro.GraphicsQuality.ThirdPartyUltraEnable=1` | Unlocks Ultra option where supported. |
| `r.Kuro.MaxFPS.ThirdParty120=1` | Unlocks higher FPS option where supported. |
| `r.SceneColorFringeQuality=0` | Disables chromatic aberration. |
| `r.VSync=0` | Reduces input latency. |

Known forbidden or risky CVars are tracked in the generator and Smart Brain data. The generated configs should avoid entries known to be blocked or unstable.

## Deployment

This repository can be served directly through GitHub Pages:

1. Push the repository to GitHub.
2. Enable Pages for the branch/folder that contains `index.html`.
3. Keep `.nojekyll` so GitHub Pages serves all static files as-is.

No Python, Node, or server-side runtime is available on GitHub Pages. Keep all functionality browser-side.

## Security Notes

- Do not commit API secrets, private logs, device identifiers, or personal data.
- Full user logs should not be committed.
- Local session exports belong under `docs/session-logs/`, which is ignored by git.
- Review generated config behavior before sharing presets widely.

## License

This project is released under the MIT License. See [LICENSE](LICENSE).

## Community

- YouTube: `@Player42_g`
- Discord: linked from `index.html`
- Telegram: linked from `index.html`

Built for Wuthering Waves players by Player42.
