# Visual audit and design polish

Audit date: 2026-08-25
Scope: design, overall look, spacing, animation, quality
Method: DOM measurement at 1280 × 720, 1440 × 900 and 375 × 812 against the
Next.js rebuild. Measurements were taken before and after each change.

The earlier parity audit (see git history for the previous revision of this
file) brought the rebuild in line with the original WordPress site. That work
also inherited the original's defects. This pass keeps the identity — cream,
green, orange, Courgette, Open Sans, photography, generous pacing — and fixes
what the parity work carried over.

## Contrast: the primary call to action failed AA

The brand green `#43ba20` is a display colour, and the original used it as a
text colour everywhere. Measured ratios before the change:

| Element | Before | After | Required |
| --- | ---: | ---: | ---: |
| White label on the green button | 2.54 | 5.20 | 4.5 |
| Footer legal links, 14 px | 2.32 | 4.75 | 4.5 |
| Creator credit, 13 px | 2.32 | 4.75 | 4.5 |
| Section kicker on tone, 24 px | 2.32 | 4.09 | 3.0 |
| Hero highlight `deinen Weg` | 2.32 | 4.75 | 3.0 |

`--green` (`#43ba20`) is retained unchanged as a decorative accent. A second
token `--green-deep` (`#2a7d10`) carries every green that is text or sits
behind text, plus `--green-deeper` for the button hover. Same hue family,
roughly one step darker in lightness.

## Measure: prose ran to 130 characters per line

The 1180 px content column was applied directly to body copy. A `--measure`
token (68ch) now caps reading columns.

| Block | Before | After |
| --- | ---: | ---: |
| `.about-copy p` | 130 | 77 |
| `.simple-list p` (Leistungen, Aktuell) | 130 | 73 |
| `.legal-copy p` | 130 | 77 |
| `.testimonial-copy` | 104 | 77 |
| `.closing-cta p` | 84 | 68 |

`.simple-list` also moved from a full-width stack to a two-column layout —
title left, body right, hairline rule between entries — so the 1180 px width
carries structure instead of long lines. It collapses to one column below
800 px.

## Spacing

- Every arbitrary `min-height` was removed. They were reverse-engineered from
  the original's rendered heights and produced dead space: 81 px inside the
  desktop testimonial card, 102 px on mobile, 58 px in the mobile hero.
  Sections are now sized by padding and content.
- Introduced an 8 px spacing scale (`--space-1` … `--space-8`) and a
  `--section-y` rhythm token. The stylesheet previously used more than thirty
  distinct spacing values.
- Legal pages began flush against the header with zero top padding. They now
  open on the section rhythm.
- The naked 145 px gap between hero and services is now `--space-8` (104 px).

## Animation

- Entrances used `ease-in`, which decelerates into the start and snaps at the
  end. Now `cubic-bezier(.22, .61, .36, 1)`.
- Travel distances dropped from 100 px to 28–32 px, and the zoom steps from
  `scale(1.2)` / `scale(.6)` to `scale(1.04)` / `scale(.94)`.
- 14 elements were nested inside another revealing element, compounding two
  transforms. Now zero: sections reveal their children, not themselves.
- Grouped items had no stagger and fired simultaneously. Elements crossing the
  threshold in the same observer batch now cascade at 70 ms, capped at 280 ms.
- Leistungen, Aktuell, Über mich and Kontakt had no reveals at all against the
  homepage's 32. They now participate.
- `.button:hover` scaled to 1.1. It now lifts 3 px with a shadow.
- The testimonial carousel cut between slides. Slides are now stacked in one
  grid cell and cross-fade, which also means the card height comes from the
  content rather than a hard-coded 560 px (desktop) and 1270 px (mobile).

### Reveal robustness

`motion-enabled` sets `opacity: 0` on every revealed element, and only the
IntersectionObserver callback undoes it. The observer was previously wired up
inside `requestAnimationFrame`, which is throttled in a background tab — so a
page loaded in a background tab could hide all 33 elements with nothing
scheduled to reveal them.

Three changes close this:

1. Hiding and observing happen in the same tick, with no deferral.
2. Motion is only enabled once `document.visibilityState` is `visible`.
3. A 1200 ms safety net removes `motion-enabled` if the observer has not
   delivered a single callback. Readable beats animated.

Verified: with the document hidden, no element is hidden and `motion-enabled`
stays off; when the safety net fires, all 33 elements are visible.

## Touch targets

WCAG 2.2 target size (2.5.8) requires 24 × 24 px.

- Carousel dots were 8 × 8. The dot still renders at 8 px, but the control now
  occupies 26 × 44 via a pseudo-element.
- Footer legal links went from 25 px to 37 px tall.
- The creator credit went from 18 px to 31 px tall.

Sitewide count of controls below 24 px, desktop and mobile: zero.

## Other quality fixes

- Impressum rendered no `h1` at all. Every route now has exactly one.
- The mobile menu is a full-screen overlay that did not lock body scroll and
  could not be dismissed with Escape. Both fixed.
- Inactive carousel slides are `inert` and `aria-hidden`.
- Carousel autoplay slowed from 4 s to 7 s; the testimonials are long enough
  that 4 s was not enough time to read one.
- Form inputs gained hover and focus treatment; the form is capped at 720 px
  instead of spanning 1180 px.
- Gallery tiles gained a hover scale and gradient; they had no hover state.
- The video toggle sits on a translucent circular backdrop instead of floating
  bare orange on the footage.
- Desktop nav links gained an underline that wipes in on hover and focus.
- The header logo requested a 640 px image for an 89 px slot; it now declares
  `sizes="89px"`.
- Added `text-wrap: balance` on headings and `pretty` on paragraphs.

## Verification

`pnpm build` compiles and typechecks clean; `pnpm lint` is clean. All seven
routes return 200 with exactly one `h1`, every `img` carries `alt`, and no
route has horizontal overflow at 375, 1280 or 1440 px.

## Known leftover

`src/content/site-content.ts` is unreferenced. Deleting it was blocked in this
session, so it remains for manual removal.
