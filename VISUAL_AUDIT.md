# Visual parity audit: Next.js rebuild vs. irinashevtsova.de

Audit date: 2026-08-24  
Reference: live WordPress site and its active theme/database content  
Local baseline: this repository before parity fixes

This inventory was written before implementation. Measurements were taken in the same browser at 1280 × 720 and 390 × 844, with additional route checks at desktop and mobile widths.

## Global shell

1. The local desktop header is 112 px high; the reference is 110 px.
2. The local desktop logo is 92 px; the reference is 89 px.
3. The local desktop navigation uses an 18 px line box; the reference uses a 31.5 px line box, so its links sit and breathe differently.
4. The local mobile header is 86 px high; the reference remains 110 px.
5. The local mobile logo is 74 px; the reference remains 89 px.
6. The local mobile hamburger is a large 46 px control with 28 px bars; the reference icon and its placement are more compact.
7. The local mobile menu is a small dropdown. The reference uses the WordPress navigation overlay treatment and different open/close behavior.
8. Header link and social-icon spacing differs at both breakpoints.
9. The local footer is 150 px high on desktop and 263 px on mobile; the reference is approximately 129 px and 177 px.
10. The local mobile footer keeps the site name and uses a loose vertical stack. The reference hides the name and centers the legal links, copyright, creator credit, and social icons more tightly.
11. The local footer link gaps, copyright spacing, creator-credit placement, and icon alignment do not match the reference.
12. The local beige token is `#f4e4ce`; the reference uses `#f1e2cf`.
13. The local orange token is `#fb9130`; the reference uses `#ef8120`.
14. The local content width is capped at 800 px almost everywhere. The reference uses up to 1180 px for ordinary page content and about 1240 px for wide homepage sections.
15. The local mobile body switches to 16 px/1.65. The reference keeps 18 px/1.75, producing materially different wrapping and page heights.
16. Courgette headings are generally weight 400 locally; the reference synthesizes/displays them at weight 700.

## Homepage

17. The reference hero is a 60/40 two-column composition: copy on the left and a portrait video on the right. The local hero stacks a centered 800 px text block above an 800 × 960 video.
18. At 1280 px the reference hero is about 740 px high; the local hero is about 1471 px high.
19. The reference hero starts around 146 px, with a small gap below the header. The local hero begins immediately below the header.
20. The reference desktop title is 76.8 px, weight 700, line-height 1.2, and letter-spacing 3 px. The local title is weight 400 and lacks the tracking.
21. The reference mobile title is about 43.4 px and weight 700. The local title is 46 px and weight 400.
22. Reference mobile hero copy and buttons are centered. Local mobile copy and buttons are left aligned.
23. Reference buttons are roughly 60–66 px high; local mobile buttons are about 46 px high.
24. Reference hero buttons scale to 1.1 on hover. Local buttons only apply a brightness filter.
25. The reference video autoplays muted, loops, plays inline, and has no native controls. The local video exposes controls and does not autoplay, mute, or loop.
26. The reference has a 72 px orange play/pause affordance at the lower right of the video that turns green on hover. The local video has no matching affordance.
27. The reference video is rendered at a 2:3 portrait ratio. The local mobile rule uses 9:12, and the desktop stack gives the video a different visual role.
28. The reference mobile video intentionally extends beyond its content column and causes a small horizontal overflow. The local version stays inside the viewport. This reference defect should not be copied.
29. Services section top/bottom spacing, column gutters, heading weights, and mobile section height differ.
30. The reference applies title-style capitalization to “Meine Leistungen Für Dich”; the local visual text remains sentence case.
31. The gallery desktop ordering differs. The reference fills three vertical columns (`114/111/113`, `108/110/102`, `146/105/107`); the local grid fills rows.
32. Gallery width, image dimensions, vertical gaps, heading spacing, and section height differ.
33. The about section lands roughly 652 px later locally because of the oversized hero and gallery flow.
34. About-section heading weight, image height/crop, column gap, and internal vertical alignment differ.
35. The reference testimonials use a looping, autoplaying carousel with one centered card, circular previous/next controls, and pagination dots. The local version is a native horizontal scrolling strip with no arrows, dots, loop, or autoplay.
36. The local testimonial copy is shortened. The reference contains the complete four testimonials.
37. Testimonial card sizing, avatar placement, text rhythm, background treatment, and section height differ.
38. The reference shows 32 scroll-reveal animations: fade-right, fade-up, zoom-out-up, zoom-out-left, and zoom-in-left, each about 600 ms with ease-in timing. The local site has none.
39. The original AOS implementation can leave unvisited off-screen content invisible in automated full-page captures. A faithful rebuild should reproduce the motion, not this progressive-enhancement defect.
40. At 1280 px the complete local homepage is approximately 5346 px high; the reference is approximately 4967 px.
41. At 390 px the complete local homepage is approximately 7306 px high; the reference is approximately 8633 px, mostly because the reference keeps 18 px copy and uses full testimonial text.

## Shared page heroes and closing CTA

42. Reference page heroes are exactly 355 px high at desktop and mobile. Local heroes are 360 px desktop and 290 px mobile.
43. Reference hero titles are 44 px desktop, about 40.3 px mobile, weight 700, line-height .9, and color `#f1e2cf`. Local titles are 48/42 px, weight 400, line-height 1.2, and `#f8e7d7`.
44. Hero subtitle size, weight, line-height, and spacing from the title differ.
45. The contact hero focal point should be 43% 35%; the services hero should be 50% 53%. Local heroes use generic center positioning.
46. Reference page content begins roughly 55 px after the hero and uses 24 px side padding with a 1180 px maximum. Local content is narrower and its margins differ.
47. The reference closing CTA is about 447 px desktop and 584 px mobile. Local is about 439 px and 520 px.
48. CTA title weight, font sizing, line-height, body spacing, and button height differ.

## Leistungen, Aktuell, and Über mich

49. The local text content is largely correct, but non-breaking spaces and a few source wrapping points differ.
50. Reference list headings use different font metrics and weight; local headings are 27/23 px at weight 600.
51. Reference list items have larger vertical separation, especially on mobile. The local mobile pages are much shorter and denser.
52. Reference body copy remains 18 px on mobile; local copy drops to 16 px.
53. The Aktuell intro spacing and italic rhythm differ.
54. The Über-mich paragraph spacing and total content height differ.

## Contact

55. The reference form is rendered by Contact Form 7 and submits through WordPress/AJAX. The local form invokes a `mailto:` URL and depends on the visitor having a configured mail application.
56. Input spacing, border treatment, field gaps, form width, and surrounding margins differ.
57. The local form does not mark core fields as required or expose validation/error states equivalent to Contact Form 7.
58. The reference social CTA is approximately 279 px desktop and 327 px mobile. Local padding and heading metrics differ.
59. Reference social links are WordPress pill-style icon links with transparent treatment in this theme. Local links add Facebook/WhatsApp/Telegram brand-color capsules.
60. A global `.social-links` alignment rule pushes the local contact links to the right on desktop instead of reliably centering them.

## Legal pages

61. Local Datenschutzerklärung and Impressum add lead paragraphs that do not exist in the reference.
62. The reference legal heading is Open Sans, approximately 36 px, weight 700, with a 63 px line box. Local renders a 54/42 px Courgette heading at weight 400.
63. Legal page top spacing, section heading sizes, paragraph rhythm, wrapping, and total document height differ.
64. The local 800 px legal column is not the same constrained layout used by WordPress.
65. The reference exposes a Complianz “Zustimmung verwalten” preference control. The local site has no consent-manager UI.
66. Both reference and local legal content contain very long strings/URLs. The reference overflows more severely on mobile; the rebuild should retain the content while preventing horizontal scrolling.

## Interaction, accessibility, and implementation notes

67. Gallery images use empty alternative text even though several communicate the character of the work; useful alternatives are missing.
68. Header social links are visually smaller than a 44 × 44 px touch target on both implementations.
69. The mobile navigation summary has a static “Navigation öffnen” name even when open.
70. The local reduced-motion rule only disables smooth scrolling. It does not yet govern the animations required for parity.
71. The reference depends on AOS and Swiper runtime behavior. The rebuild needs equivalent interaction without hiding content when JavaScript is unavailable.
72. The local site otherwise improves on the reference with a skip link, visible focus outlines, responsive optimized images, and no content-hiding JavaScript dependency; those improvements should be preserved.

## Baseline quality score

- Accessibility: 3/4
- Performance: 3/4
- Responsive behavior: 2/4
- Theming consistency: 3/4
- Template/AI-pattern avoidance: 4/4
- Total: 15/20 — good implementation quality, but low visual and behavioral parity with the source.

## Resolution status

The parity pass addressed the visual and frontend-behavior items above:

- Restored the measured global colors, 110 px header, 89 px logo, 355 px page heroes, 1180/1280 px content widths, responsive 18 px body typography, compact footer, mobile navigation overlay, and original focal points.
- Rebuilt the homepage as the reference 60/40 hero, including its 2:3 autoplay/muted/looping video, accessible play/pause control, button motion, three-column gallery ordering, section cadence, and image alternatives.
- Restored all four complete testimonials in an accessible 4-second looping carousel with arrows and pagination.
- Restored the 32 reference reveal targets and five motion directions at 600 ms/ease-in. Content stays visible without JavaScript and under `prefers-reduced-motion`.
- Matched the secondary-page content width, type scale, vertical rhythm, CTA proportions, contact form rows, social treatment, and legal-page typography. Privacy-table-of-contents anchors are preserved.
- Preserved improvements over the source: no mobile horizontal overflow, 44 px interactive targets, skip navigation, visible keyboard focus, optimized local images, and robust reduced-motion behavior.

Remaining external constraints:

1. The local contact form still uses `mailto:`. Exact Contact Form 7 AJAX delivery, confirmation email, spam protection, and server-side error messages require a mail/API backend and delivery credentials that are not present in this static Next.js project.
2. The Complianz “Zustimmung verwalten” control was not ported. The local rebuild currently has no equivalent tracking/cookie stack to manage; adding the control meaningfully requires selecting and configuring a consent platform and the scripts it governs.
3. Automated post-fix screenshots could not be captured after the development-server restart because the in-app browser blocked the localhost error-page navigation. The initial side-by-side audit was completed visually; the repair pass was subsequently verified by source assertions, ESLint, TypeScript, and a full static production build.
