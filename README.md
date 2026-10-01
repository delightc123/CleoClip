# CleoClip

**Turn long videos into captioned short-form clips.**

An open-source desktop app created and maintained by [Delight Chukwu](https://github.com/delightc123/CleoClip). Find key moments in podcasts, streams, and interviews, refine the edit, and export viral clips for your audience. Video rendering runs locally on your computer; AI uses your own OpenRouter key.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Latest release](https://img.shields.io/github/v/release/delightc123/CleoClip?label=download)](https://github.com/delightc123/CleoClip/releases)

---

[Download](#download) · [Quick Start](#quick-start) · [Features](#features) · [Documentation](#documentation) · [Contributing](#contributing)

---

## Download

Get CleoClip from [GitHub Releases](https://github.com/delightc123/CleoClip/releases).

| Platform | Architecture | Installation |
| :--- | :--- | :--- |
| **macOS** | Apple Silicon, Intel | Open the matching `.dmg` and drag CleoClip to Applications. |
| **Windows** | x64 | Run the `.exe` installer. |
| **Linux** | x64 | Install the `.deb`, or make the `.AppImage` executable and run it. |

*Packages include Python, FFmpeg, and yt-dlp. Linux requires an unlocked desktop secret service to save API keys.*

---

## Quick Start

You need an **[OpenRouter API key](https://openrouter.ai/keys) with available credit**. No subscription or external CleoClip account is required.

1. **Connect your key**: Paste your key into the first-launch setup card.
2. **Add a video**: Choose a local video file, a public YouTube link, or a public, completed Twitch VOD.
3. **Choose your workflow & style**: Select **Automatic** or **Review & edit**, then customize framing, clip lengths, and caption presets.
4. **Generate and export**: Monitor real-time pipeline stages in **Jobs**; find finished clips in **Library** and your output directory (default: `~/CleoClip`).

| Workflow | What Happens |
| :--- | :--- |
| **Automatic** | Finds moments, frames the video, and exports captioned clips automatically. |
| **Review & edit** | Opens candidates in an interactive editor so you can trim cuts, adjust camera framing, and edit captions before exporting. |

---

## Features

### AI Moment Discovery
- Identify complete narrative moments with setup and punchline intact using transcripts and contextual metadata.
- Choose **Quality**, **Economy**, or **Advanced** modes with your own OpenRouter models.
- Optional web research and Jev editorial reviews for context, title support, and narrative completeness.

### Interactive Clip Editor
- Trim, split, and extend cuts with synchronized source and output preview players.
- Adjust crops, switch between full-frame, split-screen, or fit layouts, and review suggested camera changes.
- Modify and position captions, suppress them in specific sections, and export individual clips or use **Bake all**.

### Smart Framing & Speed
- Export vertical **9:16** or horizontal **16:9** clips with smart face tracking that keeps speakers centered.
- Preview **nine caption styles** with kinetic animation presets.
- Remove dead air and export at **1×–2× speed** while preserving natural voice pitch and subtitle timing.

### Organization & Publishing
- Bookmark runs, search clips, track publishing status, and manage exports in the **Library**.
- Generate platform-tailored titles, captions, and hashtags.
- Connect social accounts through **Zernio** to publish or schedule directly to TikTok, YouTube Shorts, Instagram Reels, Threads, and X.

---

## AI, Costs & Privacy

- **Local-First Rendering**: Video processing and rendering run entirely on your local machine using bundled FFmpeg binaries.
- **Direct Cloud AI (BYOK)**: Speech recognition and LLM planning calls go directly from your machine to OpenRouter. No private videos or API keys pass through intermediary servers.
- **Keychain Security**: All API keys are encrypted at rest using OS-level secure storage (Windows DPAPI, macOS Keychain, Linux Secret Service).

---

## Documentation

| Guide | Description |
| :--- | :--- |
| [User Guide](docs/usage.md) | Clip creation, library management, and troubleshooting |
| [Editor Guide](docs/editor.md) | Cutting, camera positioning, and subtitle editing |
| [AI & Privacy](docs/ai-and-privacy.md) | Data flow, review policies, and storage cleanup |
| [Model Selection](docs/transcription.md) | Choosing OpenRouter transcription and reasoning models |
| [Publishing & Metadata](docs/automation-metadata.md) | Social media queues and platform-specific drafts |
| [Development](docs/development.md) | Building, testing, and packaging from source |

---

## Contributing

Contributions, bug reports, and pull requests are welcome! Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests, and report security issues via [SECURITY.md](SECURITY.md).

---

## License

[MIT](LICENSE) © 2026 Delight Chukwu
