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
- When describing AML and fraud controls, GIANOS may be referenced as a
  specialist AML monitoring system and XTN as a digital anti-fraud monitoring
  system. Present them as integrations within the agreed bank perimeter and
  responsibilities; never describe either one as a certification or use them
  alone to claim blanket regulatory compliance.
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

## 3. Project Layout

- `src/_includes/layouts/`: shared page layouts.
- `src/_data/`: site-wide navigation and metadata.
- `src/assets/`: CSS, JavaScript, and static assets.
- `src/*.njk`: institutional pages and landing content.
- `src/privacy.njk`: privacy, no-tracking, and accessibility information.
- `docs/`: generated GitHub Pages output.

## 4. Commands

- `npm run dev`: local Eleventy development server.
- `npm run build`: compile the site into `docs/`.
- `npm run validate`: lint, type-check, and run tests.
