# OpenAfterHours.github.io

Landing page for the [OpenAfterHours](https://github.com/OpenAfterHours) organisation.
Live at <https://openafterhours.github.io>.

Static HTML/CSS/JS — no build step. Pushing to `main` deploys via GitHub Actions
(`.github/workflows/deploy.yml`) using the official Pages actions.

## Local preview

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## Layout

```
index.html            Single-page landing
assets/css/tokens.css OpenAfterHours design tokens (shared across org)
assets/css/landing.css Page-specific styles + responsive rules
assets/js/main.js     Typewriter, cursor parallax, tap-to-flip
assets/img/           Logo + icon
.github/workflows/deploy.yml  Pages deploy
```

## First-time Pages setup

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
The workflow handles everything from there.
