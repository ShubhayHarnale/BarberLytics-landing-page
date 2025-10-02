# BarberLytics Landing Page

A marketing/landing UI for the BarberLytics app, built with Next.js 13 App Router, React 18, and Tailwind CSS. This repo is frontend-only and meant for rapid iteration by UI/UX engineers.

## Tech Stack
- Next.js `13.5.1` (App Router) + React 18
- Tailwind CSS `3.3.x` with `tailwindcss-animate`
- Radix UI primitives + shadcn-inspired components
- Framer Motion for animations

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Run locally (http://localhost:3000)
npm run dev

# 3) Build static export
npm run build

# 4) Preview production build
npm start
```

Notes:
- The project is configured for static export (`next.config.js` has `output: 'export'` and `images.unoptimized = true`).
- ESLint is disabled during builds to not block previews.

## Scripts
- `dev`: Start Next.js dev server
- `build`: Build for production (static export)
- `start`: Serve the production build
- `lint`: Run Next.js ESLint

## Project Structure
```
app/
  layout.tsx         # Root layout
  page.tsx           # Landing page assembly
  globals.css        # Tailwind base + global styles
components/
  layout/footer.tsx  # Footer
  navbar.tsx         # Top navigation
  login-modal.tsx    # Example modal
  sections/          # Landing page sections (hero, features, testimonials, etc.)
  ui/                # Reusable UI primitives (Radix/shadcn-inspired)
hooks/
  use-toast.ts       # Toast hook
lib/
  utils.ts           # Utility helpers
public/
  images/            # Static assets (incl. barbershop/)
  Image1.mp4         # Example media used in hero/sections
```

### Key Pages and Sections
- `components/sections/*`: Modular sections used by `app/page.tsx`.
- Common sections include: hero variants, feature overviews, testimonials, FAQ, CTA, and more.

## Design System
Tailwind tokens are extended in `tailwind.config.ts`:
- Custom palette grouping for BarberLytics brand:
  - `blue.100-700`, `yellow.100-500`, `orange`, `green`, `red`, `black`
  - `barbershop` legacy scale for backward compatibility
- Animations: `gradient-shift`, `ambient-bg-scroll`, `animated-blob`, accordion transitions, etc.
- Typography: primary family via CSS var `--font-inter`

Use utility-first classes and these tokens instead of hardcoded hex values wherever possible.

## Theming
- Dark mode is class-based (`darkMode: ['class']`)
- Consider using `next-themes` (already installed) for theme toggling in the navbar or layout.

## Components
The `components/ui` folder contains composable primitives built on Radix UI:
- Accordion, Alert Dialog, Avatar, Button, Card, Carousel, Dialog, Drawer, Dropdown, Form, Input, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast/Toaster, Toggle, Tooltip

When adding new UI:
- Prefer building on these primitives for consistency.
- Keep props and variants aligned with existing components (e.g., `class-variance-authority`, `tailwind-merge`).

## Animations
- Prefer `framer-motion` for interactive animations.
- Use Tailwind keyframes where subtle/background effects are sufficient.

## Accessibility
- Leverage Radix primitives for accessible behavior.
- Ensure focus states are visible and keyboard navigation works.

## Deployment
Because this project uses static export:
- `npm run build` outputs to `out/`. You can deploy the `out/` directory to any static host (GitHub Pages, Netlify, Vercel static, etc.).
- For GitHub Pages, you can publish the `out/` directory on the `gh-pages` branch.

## Contributing (for UI/UX Engineers)
1. Branch from `main` (e.g., `feat/new-hero`, `refactor/colors`)
2. Keep PRs focused on one theme (e.g., hero redesign)
3. Update or add section components under `components/sections/`
4. Use tokens from `tailwind.config.ts` and avoid hardcoded colors
5. Test responsive breakpoints and dark mode
6. Add screenshots/video to PR description if visual changes are significant

### Design Handoff Suggestions
- Include Figma links in PRs. See `figma-mcp-config.json` for MCP integration.
- If adding new brand colors/spacing scales, extend `tailwind.config.ts` rather than inlining.

## Roadmap / Ideas
- Add proper analytics events to CTAs
- Hook up a real contact form provider (Formspree/Resend)
- Add a themable pricing section
- Fine-tune motion timings and reduce CLS on hero media

## License
Private/internal project for BarberLytics. All rights reserved.
