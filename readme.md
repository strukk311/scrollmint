# Scrollmint — landing page

A responsive landing page for a short-form content and eCommerce growth agency.
Plain HTML, CSS and JavaScript — no frameworks, no build step.

Live demo: https://strukk311.github.io/scrollmint/

## Sections

| Section | id | Description |
| --- | --- | --- |
| Header | — | Sticky with blurred background; burger menu at ≤768px |
| Hero | — | Headline, subheading, laptop image |
| Partners | — | Auto-scrolling logo marquee |
| Features | `#process` | Three value propositions |
| Services | `#services` | Bento grid of services |
| FAQ | `#faq` | Accordion built on `<details>` |
| CTA | `#contact` | Call to collaborate |
| Footer | — | Brand, links, contacts, legal links |

## Before launch

- [ ] Replace `images/hero-laptop.svg` with the Figma export (`.webp` or `.avif` recommended, ~1600px wide). Update `width`/`height` on the `<img>` to match the real aspect ratio.
- [ ] Replace `images/logos/logo-1…6.svg` with real partner logos. Update the `alt` text in the **first** `.marquee__group` list only — the second list is a duplicate for the animation and keeps `alt=""`.
- [ ] Replace the text placeholders in the footer social links (`.socials__link`) with SVG icons.
- [ ] Review feature copy and FAQ answers.
- [ ] Update footer contacts: email, phone, city.
- [ ] Replace `href="#"` on "Take Tour", social links, Terms and Privacy.
- [ ] Check the domain and "Scrollmint" trademark availability (EUIPO, USPTO, Ukrpatent) and social media handles.

## Customization

Core values live as CSS custom properties at the top of `css/style.css`:

```css
:root {
  --c-bg: #000;           /* page background */
  --c-text: #fff;         /* primary text */
  --c-muted: #8c8c8c;     /* secondary text */
  --container: 1120px;    /* max content width */
  --radius: 16px;         /* card radius */
}
```

**Marquee speed** — the `--duration` variable on `.marquee` (default `40s`; higher is slower). Spacing between logos is `--gap`.

**Adding logos** — add the same `<li>` to both `.marquee__group` lists, otherwise the loop will jump.

## Breakpoints

| Width | Changes |
| --- | --- |
| ≤1024px | Tighter navigation, footer brand block spans full width |
| ≤768px | Burger menu, features in 2 columns, bento 2×3, single-column FAQ |
| ≤560px | Features in 1 column, compact cards, footer in 2 columns |

## Accessibility and performance

- Semantic markup (`header`, `nav`, `main`, `section`, `footer`) and a skip link.
- Burger button with `aria-expanded` / `aria-controls`; Esc closes the menu and returns focus to the button.
- Visible `:focus-visible` styles for keyboard navigation.
- Native `<details>` FAQ with the `name` attribute, so only one item is open at a time.
- `prefers-reduced-motion`: the marquee stops and logos are shown statically.
- `width`/`height` on all images to prevent layout shift, `loading="lazy"` on logos, `fetchpriority="high"` on the hero image.
- Poppins loaded from Google Fonts with `preconnect` and `display=swap`.

## Browser support

Latest Chrome, Edge, Firefox and Safari (desktop and mobile).

- Exclusive accordion (`<details name>`) — Chrome 120+, Safari 17.2+, Firefox 130+. Older browsers allow several items open at once; the page still works.
- Smooth FAQ expand (`::details-content` + `interpolate-size`) — Chrome 131+. Other browsers open items without animation.

## Using the logo in Figma

The wordmark in `scrollmint-logo.svg` is live text. After importing, select it and apply **Outline stroke** (Cmd/Ctrl + Shift + O) so the logo doesn't depend on Poppins being installed.
