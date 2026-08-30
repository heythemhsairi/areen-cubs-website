# Clear Sans

Clear Sans is not distributed on Google Fonts, so it can't be pulled in through
`next/font/google`. The site is wired up to use it the moment the licensed
files land here — nothing else needs to change.

Drop these files into this folder using these exact names:

- `ClearSans-Regular.woff2` (400)
- `ClearSans-Medium.woff2` (500)
- `ClearSans-Bold.woff2` (700)
- `ClearSans-Italic.woff2` (400, italic)

The `@font-face` declarations already live in `src/app/globals.css` and point
here. Until the files exist, the browser silently falls through to the
fallback stack (Inter, loaded via `next/font/google`, then system sans-serif),
so the dev build never breaks — it just doesn't look exactly like the final
site yet.

Source: https://01.org/clear-sans (Intel, Apache License 2.0).
