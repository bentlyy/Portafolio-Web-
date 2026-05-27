---
name: Event Horizon
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c4c0ff'
  primary: '#c4c0ff'
  on-primary: '#2000a4'
  primary-container: '#8781ff'
  on-primary-container: '#1b0091'
  inverse-primary: '#4f44e2'
  secondary: '#62d8d5'
  on-secondary: '#003736'
  secondary-container: '#11a19e'
  on-secondary-container: '#00302f'
  tertiary: '#c5c5d4'
  on-tertiary: '#2e303b'
  tertiary-container: '#8f909d'
  on-tertiary-container: '#272934'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#3622ca'
  secondary-fixed: '#81f5f1'
  secondary-fixed-dim: '#62d8d5'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504e'
  tertiary-fixed: '#e1e1f0'
  tertiary-fixed-dim: '#c5c5d4'
  on-tertiary-fixed: '#191b26'
  on-tertiary-fixed-variant: '#444652'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system is built for an immersive, premium digital experience that evokes the mystery and vastness of deep space. The target audience includes high-end creative collaborators, tech-forward recruiters, and design enthusiasts who value atmospheric storytelling alongside functional precision.

The visual style is a sophisticated blend of **Glassmorphism** and **Minimalism**. It utilizes deep, layered backgrounds to create a sense of infinite "z-axis" depth. Interfaces should feel like advanced HUDs (Heads-Up Displays) found in celestial exploration craft—utilizing subtle glows, translucent materials, and precise geometric shapes to maintain a professional yet futuristic tone.

## Colors

The palette is anchored in the "Deep Space Navy" (#0B0D17) to provide a rich, infinite canvas. 

- **Primary (Nebula Purple):** Used for primary actions, active states, and focus indicators. It carries a natural luminescence against the dark background.
- **Secondary (Cosmic Teal):** Used for accents, success states, and data visualizations. It provides a technical, high-contrast counterpoint to the purple.
- **Neutral (Star White):** Reserved for high-contrast typography and critical icons. 
- **Surface Tints:** Use low-opacity versions of Primary and Secondary colors (5-10%) to create "nebula" background blurs that sit behind glass layers.

## Typography

The typography strategy balances technical precision with high-impact personality. 

- **Headlines:** Use **Space Grotesk**. Its geometric quirks and wide apertures reflect a modern, scientific aesthetic. Display headings should use tight letter-spacing to feel more like a cohesive mark.
- **Body:** Use **Hanken Grotesk**. It provides a sharp, contemporary feel that remains highly legible against dark backgrounds without the "vibration" often found in high-contrast sans-serifs.
- **Metadata/Technical Labels:** Use **JetBrains Mono**. This monospaced font introduces a "data-stream" feel for dates, categories, or technical specs.

## Layout & Spacing

This design system uses a **Fluid Grid** model with generous margins to mimic the openness of space.

- **Desktop (1440px+):** 12-column grid with 64px side margins. Content should be centered with a max-width of 1280px.
- **Tablet (768px - 1024px):** 8-column grid with 40px margins.
- **Mobile (Under 768px):** 4-column grid with 20px margins.

Spacing follows an 8px linear scale. Vertical rhythm should be intentionally "airy," using larger gaps (80px - 120px) between major sections to allow the glassmorphic background effects to breathe.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Radial Glows** rather than traditional drop shadows.

1.  **Base Layer:** The Deep Space Navy (#0B0D17) solid background.
2.  **Atmospheric Layer:** Large, soft radial gradients of Nebula Purple and Cosmic Teal at low opacity (10-15%) behind the content.
3.  **Glass Layer (Surface):** White or Primary-tinted backgrounds at 5-8% opacity with a `backdrop-filter: blur(12px)`.
4.  **Border Highlight:** A 1px solid border at 15% opacity (White) on the top and left edges of glass cards to simulate a light source from a distant star.
5.  **Active State:** Elements in a focused or active state should emit a subtle outer glow (`box-shadow`) using the Primary color with a high spread and low opacity.

## Shapes

The shape language is dominated by **perfect circles** and **softened rectangles**. 

- **Cards/Containers:** Use the `rounded-lg` (16px) setting to maintain a modern, friendly feel.
- **Interactive Elements:** Buttons and tags should utilize a "Pill" shape (full radius) to contrast against the structured grid.
- **Decorative Motifs:** Use large, stroked circles (0.5px thickness) that bleed off the edges of the screen to suggest planetary orbits and celestial scale.

## Components

- **Buttons:** Primary buttons are pill-shaped with a vibrant Nebula Purple gradient. Secondary buttons use a "Ghost" style with a 1px Cosmic Teal border and a subtle hover glow.
- **Glass Cards:** Used for portfolio items. Features a 1px border and a background blur. On hover, the border opacity increases, and the background atmospheric glow intensifies.
- **Navigation:** A fixed top bar using a heavy backdrop blur (20px) and a thin bottom border. Links use JetBrains Mono in uppercase for a technical feel.
- **Inputs:** Dark, recessed fields with a Cosmic Teal "focus" glow. Labels sit above the field in JetBrains Mono.
- **Status Chips:** Small, circular-pill indicators using Cosmic Teal for "Available for Work" or "Live Project" statuses, often accompanied by a small pulsing dot icon.
- **Scroll Indicator:** A vertical line at the bottom of the hero section that "fills" as the user scrolls, utilizing the primary color.