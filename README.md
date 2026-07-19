# Passa

Payments infrastructure for AI agents — dashboard UI implemented from the
[Passa Payment Detail](https://claude.ai/design/p/d6918592-3588-40b1-9b06-2a008f54405e) Claude Design project.

Static HTML/CSS/JS, no build step or dependencies.

## Run

Open `index.html` directly in a browser, or serve the folder:

```sh
python -m http.server 8000
# → http://localhost:8000
```

## Pages

| Page | Screen |
| --- | --- |
| `index.html` | Payments list — dense table with live status/rail/search filters |
| `payment.html?id=pay_8fK2mQxT4vLp` | Payment detail — happy path with human approval (lifecycle timeline, payload, webhooks) |
| `payment.html?id=pay_3jW9rTnB7xKe` | Payment detail — Pix timeout with card-fallback branch and rail attempts |
| `policies.html` | Policy rules as sentences, with a live simulator (amount/merchant/region → verdict + trace) |
| `approval.html` | Mobile approval screen — the human moment, with expiry countdown ring |
| `developers.html` | Developer settings — sandbox/live keys, webhook endpoint, recent events |
| `styleguide.html` | State system reference — status pills, rail badges, door motif |

## Structure

- `styles.css` — shared design system (tokens, sidebar, pills, rails, panels, timeline)
- `app.js` — shared shell (sidebar nav, copy-to-clipboard, payments dataset)
- Fonts: Geist + Geist Mono via Google Fonts
