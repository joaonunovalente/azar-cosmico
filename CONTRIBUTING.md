# Contributing

Thank you for contributing to Azar Cósmico.

## Local Setup

```bash
npm install
npm run dev
```

## Common Commands

```bash
npm run dev            # local dev server
npm run check          # type and content checks
npm run build          # production build
npm run preview        # serve the production build
npm run format         # format every file
npm run release:check  # check, build, and format check together
```

## Project Guidelines

- Episodes in `src/content/episodes` (`ac-*.md`), posts in `src/content/posts`, videos in `src/content/videos`.
- Keep page copy in `src/config` instead of in components.
- Use the design tokens in `src/styles/global.css` instead of hardcoded colors.
- Prefer small, focused pull requests.

## Before Opening a PR

- Run `npm run release:check`.
- Check keyboard behavior, both color modes, and narrow screens for any interface change.
- Add a line to `CHANGELOG.md` for user-visible changes.
- Update `README.md` or `CUSTOMIZATION.md` when setup, features, or customization points change.

## Pull Request Notes

- Explain what changed and why.
- Include screenshots when the change affects the interface.
