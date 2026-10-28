# Premium refinement

Outcome: make the existing construction company site lighter, more minimal and visually premium. Baseline `ba31eb7670d50a5c5a305162e20d530ae3aff573`; clean tree observed. Design decision and inspected references are in root DESIGN.md.

- [x] Refine presentation in App.jsx and rewrite site.css coherently: light editorial hero, panoramic photo, airy company block, numbered service list, asymmetrical projects and quieter contact area. Preserve original company text, broad construction scope, contact/data contracts and existing React primitives.
- [x] Build, run all existing tests, render desktop/tablet/phone, check overflow/images/console, mobile menu, dialog keyboard/focus and contact handoff. Repair observed defects. Save representative screenshots and QA notes.
- [x] Commit and publish to the existing user-authorized repository and Pages target; verify successful Actions run and hosted page. No domain/DNS changes, new dependencies, paid integration or new backend.

One implementation owner; no delegation is needed for this tightly coupled presentation change.

Publication verified: source f7c773c848dd7408ca58c90a903abf3f27da6e5b, successful Actions run 40685424456, hosted https://spayzik.github.io/psc-monolit/. Production asset hashes match the local Pages-base build (index-D7iDqWmI.js / index-BEXbCuie.css). All 24 images loaded; no overflow or captured console warnings/errors; contact dialog opened and Escape closed it; contacts and return-to-top navigation worked.
