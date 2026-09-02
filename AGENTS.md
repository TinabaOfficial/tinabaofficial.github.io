# Project: Tinaba Institutional Site

## 1. Overview

Static institutional website for Tinaba, a fintech-as-a-service technology
company enabling banks to build digital channels through a modern core
banking platform and mobile app. The site is built with Eleventy and publishes
compiled files to `docs/` for GitHub Pages at `tinaba.it`.

## 2. Standards

- Keep the site B2B and institutional: Tinaba is the technology partner;
  Banca Profilo is a case study or partner, not the site's main identity.
- Keep content in `src/`; never edit generated files under `docs/` directly.
- Use Eleventy templates and Markdown for pages, semantic HTML, responsive CSS,
  and small vanilla ESM scripts only where interaction is necessary.
- Accessibility is a release requirement: use semantic landmarks, a logical
  heading hierarchy, keyboard navigation, visible focus, sufficient contrast,
  descriptive link names, and `prefers-reduced-motion` support.
- Check foreground/background combinations in every visual state, including
  muted labels on dark surfaces and accent text, against WCAG AA before release.
- Hero subtitles on dark surfaces must use the dedicated high-contrast light
  tone; never inherit the muted body color intended for light backgrounds.
- Keep `.section-light .section-kicker` at the darker accessible tone defined
  in the stylesheet; do not restore the generic muted color there.
- The site must remain tracking-free: no analytics, pixels, advertising,
  third-party embeds, consent cookies, or external runtime scripts. Fonts and
  other assets must be self-hosted.
- Keep the privacy page current. It must describe the absence of tracking and
  identify any hosting or contact-data processing that applies. Legal details
  must match the current approved Tinaba corporate information before
  publication.
- Keep the footer corporate block synchronized with `src/_data/site.json` and
  the approved company details used in the privacy page.
- Treat the footer value as a progressive site build number, starting at the
  currently published value and incrementing it for every site change. Update
  the build number and build date together in `src/_data/site.json`, keep the
  generated `docs/` output synchronized, and display them as `vN · DD.MM.YYYY`
  beside the Tinaba wordmark. The npm package version is independent from this
  site build number.
- Use the approved favicon asset from the current Tinaba site; do not replace
  it with a placeholder mark without explicit approval.
- Use `src/assets/tinaba-logo.png` as the wordmark icon. Keep its image
  alternative empty because the surrounding home link names the full brand.
- Smart Fintech source content may be reused in institutional pages only after
  adapting it to Tinaba's B2B positioning. Preserve the themes of legacy
  integration, client ownership, compliance, modularity, and digital growth.
- The Banca Profilo case study may use the official Tinaba themes of bank
  integration, open ecosystem, collaboration, and omnichannel experience.
  Distinguish Tinaba's technology role from Banca Profilo's banking role.
- The site exposes `/brand-guidelines/` as the canonical internal reference for
  visual, editorial, imagery, motion, and accessibility choices.
- The onboarding vertical lives at `/soluzioni/onboarding/` and may expand the
  onboarding capability into acquisition, identification, document collection,
  contracting, activation, and bank-governed integration. Keep claims
  implementation-neutral and do not imply regulatory outcomes.
- The solutions page includes a distinct `Robo advisory` capability. Keep its
  public positioning at the level of digital investment journeys, profiles,
  portfolios, accumulation, monitoring, and specialist-partner integration;
  do not add retail fees, minimums, performance promises, or unsupported
  regulatory claims.
- The solutions page includes distinct capabilities for AI-assisted personal
  financial management and Alipay+ international partnerships. Describe AI as
  governed support for financial insight and experience design, and keep
  Alipay+ claims at the level of documented payments, integrations, and
  partnerships that can be explored in the use-case section.
- The homepage may use a dark hero, high-contrast accent sections, a CSS-only
  connection diagram, and a lime roadmap to establish stronger visual rhythm.
  Preserve responsive layout, WCAG AA contrast, and reduced-motion behavior.
- In the homepage connection diagram, APP and Servizi may converge toward Core
  banking through a slow CSS-only transform animation. Keep the movement
  decorative, responsive, and disabled for users who prefer reduced motion.
- Do not copy unverified commercial estimates, consumer claims, or third-party
  forms and reCAPTCHA from the source page into this tracking-free site.
- Self-hosted fonts must be preloaded for the critical weights and use a
  display strategy that avoids a visible fallback-font swap or layout shift.
- Public content may be expanded using the BPF/Tinaba presentation and other
  external product research only by generalising and rewriting the underlying
  concepts. Do not copy source wording, confidential material, preliminary
  pricing, implementation estimates, or unapproved commercial claims.
- The Banca Profilo case study may use rounded operational proof points and
  trends, such as `67k -> 164k` active customers, `+145%` growth, and roughly
  `480k` monthly operations with a peak above `530k`, only with the relevant
  period and a note that values are rounded. Keep the source definitions and
  publication approval in mind before adding or changing figures.
- The public site currently excludes digital-credit scoring and data-based
  credit-evaluation claims. Do not reintroduce that topic from external
  research unless it is explicitly approved for the site.
- The certification section must say that the pathway is in progress. It may
  list ISO/IEC 27001:2022, ISO/IEC 27017:2015, ISO/IEC 27018:2019, and ISO
  22301:2019 as the intended integrated framework, but must not imply that any
  certification has already been achieved.
- Do not restore `src/CNAME` or generate `docs/CNAME` until publication on the
  custom domain is explicitly approved. GitHub Pages output must remain
  buildable without a custom-domain declaration in the meantime.
- Run `npm run build` after content or template changes and inspect the output.
- Run `npm run validate` before committing application changes.
- Keep the standalone Tinaba link and the grouped navigation links in the
  main header visually consistent: all use a full lime background highlight
  on hover, with spacing reserved to avoid layout shift where needed.

## 3. Project Layout

- `src/_includes/layouts/`: shared page layouts.
- `src/_data/`: site-wide navigation and metadata.
- `src/assets/`: CSS, JavaScript, and static assets.
- `src/*.njk`: institutional pages and landing content.
- `src/privacy.njk`: privacy, no-tracking, and accessibility information.
- `docs/`: generated GitHub Pages output.

## 5. Information architecture decisions

- The primary navigation uses grouped, accessible disclosure menus: “Cosa
  facciamo” contains platform, solutions, and bank-partner positioning;
  “Scenari” contains use cases and the Banca Profilo case study. Navigation
  labels and descriptions are maintained in `src/_data/site.json`.
- Product capability content belongs in `/soluzioni/` and scenario storytelling
  belongs in `/casi-d-uso/`; both pages link back to the bank adoption model and
  to the contact page without collecting data on-site.
- The footer mirrors the grouped information architecture: “Cosa facciamo”
  links to platform, solutions, and bank positioning; “Scenari e azienda” links
  to use cases, the case study, company information, contact, and privacy.
- Footer grid columns must be shrinkable and corporate data must wrap safely;
  long legal identifiers must never create horizontal overflow or clip the
  footer at the viewport edge.
- Approved public Tinaba/Banca Profilo reference images used in the site are
  stored locally under `src/assets/reference/`, referenced from templates with
  meaningful alternative text, and never loaded from the source websites at
  runtime. Review image rights and publication approval before deployment.
- Case-use and hero media must preserve the source image's aspect ratio;
  panoramic or edge-sensitive assets require a dedicated layout treatment and
  must not be cropped with the default portrait/card treatment.
- Background motion is decorative only: it uses CSS transforms, has no runtime
  dependency or external request, and must remain disabled for users who prefer
  reduced motion.
- The use-case sequence may use a decorative dotted circuit line and a moving
  signal to show that scenarios are connected. Keep it CSS-only, subordinate to
  the content, and leave the line and nodes visible but static under
  `prefers-reduced-motion: reduce`.
- Ordered index groups reuse the same decorative circuit language: vertical
  connectors are used for the platform and case-study lists, horizontal
  connectors for the homepage roadmap and onboarding journey, and a static
  connector for the brand principles. Category labels such as solution cards
  and homepage feature cards remain unconnected. The lime homepage roadmap
  uses a black moving signal for contrast.

## 6. Editorial references supplied for the site

The following public pages were supplied as reference material for the
institutional content. They are sources of themes and structural inspiration;
their wording, claims, forms, tracking elements, and consumer calls to action
must not be copied into this site without separate approval:

- Fabrick, Customer Digital Onboarding:
  https://www.fabrick.com/it-it/prodotti/customer-digital-onboarding/
- Flowe, Wallet: https://www.flowe.com/prodotti-wallet
- Flowe, Chi siamo: https://www.flowe.com/chi-siamo
- CSE, homepage: https://www.csebo.it/
- CSE, A chi ci rivolgiamo: https://www.csebo.it/a-chi-ci-rivolgiamo/
- CSE, Offerta di servizio: https://www.csebo.it/offerta-di-servizio/
- Tinaba con Banca Profilo, Alipay+:
  https://tinaba.bancaprofilo.it/tinaba-e-alipayplus
- Tinaba con Banca Profilo, Investimenti:
  https://tinaba.bancaprofilo.it/investimenti
- MDOTM: https://www.mdotm.ai/
- Tinaba con Banca Profilo, Gruppi: https://tinaba.bancaprofilo.it/gruppi
- Tinaba con Banca Profilo, Chi siamo:
  https://tinaba.bancaprofilo.it/chi-siamo

## 4. Commands

- `npm run dev`: local Eleventy development server.
- `npm run build`: compile the site into `docs/`.
- `npm run validate`: lint, type-check, and run tests.
