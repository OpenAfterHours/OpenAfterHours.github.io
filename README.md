# OpenAfterHours.github.io

Landing page for the [OpenAfterHours](https://github.com/OpenAfterHours) organisation.
Live at <https://openafterhours.github.io>.

Open-source tooling for the regulatory work that protects the public but rarely
makes the slide deck — written by engineers, for engineers, in the small hours.

## Projects

| Repo | What it does | Built with |
| --- | --- | --- |
| [rwa_calculator](https://github.com/OpenAfterHours/rwa_calculator) | UK Credit Risk RWA engine for CRR (Basel 3.0) and Basel 3.1 (PRA PS1/26) — Standardised, F-IRB, A-IRB, Slotting. | Python · Polars · marimo |
| [moonlit](https://github.com/OpenAfterHours/moonlit) | Bundles a uv-managed project (or whole workspace) into a single self-contained zipapp per PEP 441 — no installer, no host venv. | Python · uv · zipapp |
| [regcite](https://github.com/OpenAfterHours/regcite) | Static analysis for UK financial regulatory citations — annotate functions with CRR articles or PRA rules and check them in CI against a versioned rulebook snapshot. | Python · CRR · PRA Rulebook |

## This site

Static HTML/CSS/JS — no build step. Pushing to `main` deploys via GitHub Actions
(`.github/workflows/deploy.yml`) using the official Pages actions.

### Local preview

```sh
python -m http.server 8000
# then open http://localhost:8000
```

### Layout

```
index.html                    Single-page landing
assets/css/tokens.css         OpenAfterHours design tokens (shared across org)
assets/css/landing.css        Page-specific styles + responsive rules
assets/js/main.js             Typewriter, cursor parallax, tap-to-flip
assets/img/                   Logo + icon
.github/workflows/deploy.yml  Pages deploy
```

### First-time Pages setup

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
The workflow handles everything from there.
