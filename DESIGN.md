# ПСК «Монолит»: выбранное направление

## Outcome and authority
Implement the image-led construction-company homepage approved in this chat; publish to spayzik/psc-monolit and GitHub Pages as explicitly requested. Empty remote repository, no incumbent application stack. Existing local research remains preserved and excluded from publication.

## Visual truth
- General page: generated image `exec-96d05166-dee4-4729-babf-ceb2744a84b2.png`.
- Latest about section: `exec-6da549d1-e1f8-4ecb-856c-c7b19907e4a3.png`.
- Both live under the conversation's generated_images directory. Preserve image-led hero, white editorial sections, charcoal contact band, original yellow company mark, rectangular images and thin separators.
- Broad construction positioning. Noise barriers have only a modest accent within services. No repeated "Комплексный" in neighboring headings.

## Research lock
Inspected on 2026-10-28: Himstalcon (scope clarity), Pridex (photography and captions), Turner (project discoverability), Spectrum (services linked to experience), Mortenson (architectural image hierarchy), Acoustic Group (noise-barrier project organization), open 21st galleries and Kokonut file input examples. Refero unavailable: NO_SUBSCRIPTION; no claim of live Refero evidence. Existing screenshots and report remain in research/2026-10-28.

## Tokens and roles
Manrope with Cyrillic, locally hosted under OFL. Ink #171b20, muted #65707a, white canvas, cool surface #f1f3f4; yellow #ffd12e for primary actions and small directional accents. Headings 56–72px desktop / 34–42px phone. Content width 1328px; horizontal gutter 56px desktop / 22px mobile. Body 16–19px. Borders #d6dce1. Square corners. No decorative cards, fake counts, client logos or testimonials.

## Content and imagery
Company paragraph retains supplied meaning and wording. Real phone +7 (495) 953-64-39, email psc.monolit@mail.ru and offices come from the existing site. Documents link to existing PDFs; their legal currency is not verified. Original company logo retrieved from its site. Generated illustrative construction/warehouse/noise-barrier photos are labeled; they are not named or quantified as actual portfolio evidence. No invented completion dates or clients. Services describe existing published scope and user clarification.

## Interaction and motion
Anchor navigation, responsive menu, service/project detail dialogs, documents dialog and contact dialog. Contact composes a draft in the visitor's own mail app, with honest status; no backend, fake submission success, analytics or silent data transmission. Escape and backdrop close dialogs, native dialog focus containment, focus restored to trigger. Desktop hover 180ms; once-only reveal 350ms, 10px. All content visible if JavaScript or IntersectionObserver is absent; reduced-motion disables travel. No autoplay, parallax or scroll hijacking.

## Responsive behavior
Desktop split about text/photo and split services; tablet retains readable columns; phone stacks content, menu button, two project cards in one column. Text and images never overflow. Contact is always accessible. Buttons/tap targets at least 44px.

## Scope and acceptance
React/Vite static client using bundled Product Design starter, no runtime backend. Small self-contained site/ folder; root workflow publishes site/dist/client. No change to psc-monolit.ru domain or DNS. Verify build, unit tests, actual browser at desktop/tablet/mobile, primary interactions, keyboard/reduced-motion, console, asset and Pages base paths. Publish only after these checks; verify the hosted URL after deploy.

## Premium refinement — 2026-10-28

User requests a more minimal, modern premium construction site, informed by 21st.dev. This supersedes the first mock's exact typography/composition while preserving content, brand, assets and interactions. Art direction is delegated in the request to improve the existing site; implementation remains React/CSS without new packages.

Observed baseline: heavy 750-weight headings, repeated construction photograph in adjacent sections, uniformly split sections and a full-screen text-over-photo hero. Smallest coherent refinement owns `site/src/App.jsx` presentation and `site/src/site.css`; no changes to mail composition, document URLs, hosting runtime or dependencies.

References actually inspected today:
- https://21st.dev/community/components?q=architecture — public catalog search via WebMCP; thumbnails/results inspected. CLI blocked by missing login. No component source retrieved or installed.
- https://21st.dev/@jahed/components/cinematic-landing-hero — rendered preview inspected: two-level headline hierarchy; oversized cinematic effects rejected as too theatrical for this company.
- https://21st.dev/@hardikkashiyani123456788/components/experience-hero — rendered preview inspected: small eyebrow, large typography and compact circular arrow CTA. WebGL/outlined display type rejected.
- https://21st.dev/@lyanchouss/components/hero-minimalism — preview blocked by sign-in after free-preview limit; not a viewed design reference.
- https://davidchipperfield.com/ — rendered home inspected: spare navigation, generous white surround, architectural photography presented without decorative cards.
- https://kokonutui.com/ — rendered home inspected: precise thin-rule alignment and clear hierarchy. Saturated widgets and decorative effects not adopted.
- Refero was previously blocked by subscription; no new live Refero claim.

Chosen direction: architectural editorial. A white navigation/intro frame, large 500-weight Manrope headline, inset panoramic image, generous section rhythm, small section indices, quiet warm-white surfaces and an asymmetrical project pair. Keep yellow as a sparse identity/action accent. Considered alternatives: refining the original photo-overlay hero would change too little; a dark cinematic direction would add visual weight. Neither is selected.

Token updates: ink #20241f, secondary #6e736b, warm surface #f5f5f1, border #d9dcd4; existing yellow retained. Desktop headline 88–104px, secondary titles 52–64px, body 16–18px; main weight 500–550. Photo corner radius 12px, buttons pill/circle, no card shadows. Existing once-only reveals and reduced-motion rules retained; no new animation library.

Acceptance: visually inspect 1440/768/390/320px, no overflow, menus and dialog focus/close behavior intact, service-to-contact and mail-draft flow intact, all images load. Production Pages build and existing tests must pass before updating the already-authorized repository and Pages publication.
