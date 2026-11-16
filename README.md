# Promocija Marine — Medium29 demo website

Fully static, multi-page HR / EN / DE website. No build step required.

## Deploy (GitHub + Cloudflare Pages)
1. Upload all files and folders **from the root of this ZIP** to a GitHub repository (including `_headers`, `_redirects`, `functions/`, `assets/`).
2. In Cloudflare Pages select **Connect to Git**, choose the repository.
3. Framework preset: **None**. Build command: **leave blank**. Build output directory: **/** (repository root). If the dashboard requires a value, set it to `.`.
4. Deploy to the `*.pages.dev` preview address. No domain changes needed.
5. If forms should deliver automatically, add `WEB3FORMS_ACCESS_KEY` in Cloudflare Pages > Settings > Variables and Secrets; the recipient is configured in your Web3Forms account. Without it, the contact form opens a **draft email** and the visitor must send the message manually.

## Demo safety and legal review
- This is a **demo** — every page has `noindex,nofollow` and `robots.txt` blocks indexing. **Do not remove these for preview.**
- Images in `/assets/images` are illustrative AI-generated photographs, **not verified company work, premises or products**. Replace with approved real company images before public launch. The demo mentions this on gallery/boat pages.
- The logo in `/assets/brand` is a newly drawn **concept logo**; it is not the official original brand file. Obtain approval before public launch.
- The text is based on categories found on the original publicly available website and subject to **owner verification** (especially transport, product availability, Yamaha brand relationship, Nautika 540F and the booklet).
- Legal pages are drafts. Verify GDPR and terms with the actual data-processing workflow.
- Google Maps is **click-to-load** for privacy. No trackers are installed.
- Original site photos could not be reliably downloaded, so the Nautika 540F section is an illustrated presentation plus an external link to its originally referenced video.

## Go live checklist
- Obtain signed-off services, brand assets, photos, legal text and accurate business contact data.
- Confirm forms end-to-end, add Turnstile or another CAPTCHA/abuse protection if needed.
- Before switching the live domain, crawl the old WordPress URL structure and prepare complete redirect mapping. See `migration-redirects-DRAFT.txt`.
- Replace demo `noindex` in generated HTML, update `robots.txt` and rename `SITEMAP-PRODUCTION-DRAFT.xml` to `sitemap.xml` after verifying the official domain and live paths. Add canonical links + language-specific `hreflang` then.
- Configure Search Console, GA4 only behind working opt-in consent and complete cross-browser/mobile tests.

## Site pages
Croatian home `/`, English `/en/`, German `/de/`. Each locale has its own real static HTML pages for services, service details, Nautika 540F, navigation signs, gallery, about, FAQ, contact and legal info.

## Interactions
One-time animated intro, floating header, mobile nav, language switching on all pages, scroll reveal, FAQ accordion, swipe/keyboard gallery lightbox, phone/email calls to action, cookie controls, click-to-load map and contact form.

## Assets
The 16 image panels are from 4 AI-created illustrative montages generated for this specific demo and converted to AVIF and WebP locally. `assets/brand/logo-dark.svg` and `logo-light.svg` are concept assets.

© 2026 Medium29 demo build.
