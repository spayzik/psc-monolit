# Visual and interaction QA — 2026-10-28

Approved direction: broad construction company, charcoal/white/yellow, photographic hero; noise barriers receive a small service-row highlight. The approved About reference is `exec-6da549d1-e1f8-4ecb-856c-c7b19907e4a3.png` from this conversation.

## Rendered comparison

Inspected the actual React page in the in-app browser at 1440×1000, 768×1024, 390×844 and 320×740. Local evidence is in ignored `qa/`: `desktop-full-final.png`, `about-comparison.jpg`, mobile/tablet screenshots and dialog screenshots. Final desktop document is 1425×3581 (scrollbar excluded).

Side-by-side About comparison preserves the eyebrow, two-line headline, original company paragraph, photograph at right and sector strip. Differences: locally licensed Manrope, a different generated construction photograph, and more breathing room below the paragraph. No invented project figures or client logos. The next heading is “Наши направления”, avoiding the repeated “Комплексное”. Refero live references were unavailable (subscription), not inspected.

## Verified behavior

- Desktop/tablet/mobile layout; no horizontal overflow at the four sizes after repairs; all rendered images loaded.
- Mobile menu, section navigation and Escape; service, About, documents and contact dialogs.
- Dialog close/backdrop, body scroll restoration, keyboard Tab/Shift+Tab containment and return focus. A review finding about hidden mobile navigation focus was repaired and retested.
- Empty required contact fields block composition. Valid synthetic contact produces an encoded mail draft; it does not claim delivery. No email was sent during testing.
- Eight automated tests pass: four mail-draft validation/encoding tests and four preserved template hosting tests. Vite production build succeeds.
- Browser console returned no warning/error entries during local interaction checks.

## Repairs and limits

Fixed StrictMode dialog close-event timing, mobile dialog focus restoration, keyboard focus wrapping, and 320px overflow. Once-only opacity/10px reveals use 350ms transitions. Reduced-motion CSS makes content visible and removes motion; changing the OS preference was not runtime-tested. This is not a full accessibility certification.

Company contacts and document links are taken from the existing company site. Document legal currency is not verified. Photos are explicitly illustrative and should be replaced by approved real project photographs before commercial use as a portfolio. The form uses the visitor’s email application; there is no submission backend.

## Publication

The GitHub Actions workflow builds at `/psc-monolit/`, tests, and deploys only `site/dist/client` to Pages. Publication status is verified separately against the hosted site and Actions run; local QA alone is not deployment proof.

Hosted verification: https://spayzik.github.io/psc-monolit/ at 1280px viewport (1265px content). All 24 rendered images loaded, no horizontal overflow, contact modal opened/closed, contacts navigation and return-to-top worked, and captured console warning/error list was empty. Source 5be24f084e392fa48f61caf62b458c2a2450c4de; successful workflow: https://github.com/spayzik/psc-monolit/actions/runs/40669662122 . Hosted screenshot saved locally as qa/hosted-hero.jpg.

## Premium refinement QA — 2026-10-28

Supersedes the initial mock comparison for visual presentation; content/interaction contracts remain. Inspected public 21st catalog plus two rendered previews; CLI was unauthenticated and further previews reached a sign-in gate. No catalog component source installed. Inspected David Chipperfield and Kokonut homepages; exact links, observations and rejected effects are in DESIGN.md.

Rendered and inspected the new white editorial hero, split company block, numbered services, asymmetrical projects and contact section. Desktop 1440×1000, tablet 768×1024, phone 390×844 and narrow phone 320×740; no horizontal overflow in final observations. Evidence in ignored `qa/premium/` includes desktop full-page, mobile hero/About and tablet About screenshots. Desktop full document 1425×4899 after all reveal sections were visited.

Repaired observed mobile overflow: hiding a heading line break had joined adjacent words; explicit whitespace now allows wrapping. Increased the mobile hero to three intentional lines. Rechecked 390px and 320px after the repair.

Primary flow retested: service details → contact dialog → empty required fields rejected → synthetic valid contact creates encoded mail draft with selected service. No email sent. Mobile menu → documents → Shift+Tab wraps to last control → Tab wraps to close → Escape restores menu-button focus and body scrolling. Section anchors and return-to-top tested. Browser captured warning/error list empty; no broken loaded images. Production Pages-base build and all 8 existing tests passed after final source changes. Reduced-motion CSS retained and source-inspected; OS preference not changed during runtime QA.
