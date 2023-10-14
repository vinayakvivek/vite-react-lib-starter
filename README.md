# Vite + React library starter template

A quick starter template for creating a react library with vite. TailwindCSS is included for styling.

## Local setup

- Update package name in [package.json](./package.json) (currently it is `vite-react-lib`)
- Install deps: `pnpm i`
- Run dev server: `pnpm run dev` (this runs vite server with [App.tsx](./src/App.tsx) as the main component)
- Library exports MUST be added in root level [index.ts](./index.ts)
- You can include library components in [App.tsx](./src/App.tsx) for live testing.
