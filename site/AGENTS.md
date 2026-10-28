# Prototype Instructions

## Accepted project direction
Broad construction positioning. Noise barriers receive only a slim yellow accent among services. Follow root DESIGN.md and latest selected mock. About heading: "Комплексное строительство. Генеральный подряд." Following services heading: "Наши направления". Preserve company text supplied by user. Motion is subtle, once-only and honors reduced motion. Generated photographs are illustrative, not actual case evidence. User authorized repository upload and GitHub Pages deployment, not DNS/domain changes.

2026-10-28 refinement: user requests a more minimal, modern premium construction company website informed by 21st.dev. Root DESIGN.md's premium refinement supersedes the initial mock's exact composition: white editorial hero, large lighter typography, panoramic image, numbered service rows, asymmetrical projects, sparse yellow. Keep existing content and interaction contracts; no new dependencies.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
