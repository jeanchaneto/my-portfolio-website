# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jean Chane-to, showcasing React development skills with advanced animations and 3D graphics. Built with Next.js Pages Router, featuring interactive Three.js elements and sophisticated Framer Motion animations.

## Tech Stack

- **Framework**: Next.js 13.5.6 (Pages Router)
- **Styling**: Tailwind CSS with extensive custom theme configuration
- **Animations**: Framer Motion (2D) and Framer Motion 3D
- **3D Graphics**: Three.js via React Three Fiber, @react-three/drei, @react-three/postprocessing
- **Forms**: EmailJS for contact form submissions
- **Analytics**: Google Analytics (production only)
- **State**: React Context API (ModalContext)

## Development Commands

```bash
npm run dev    # Start development server on localhost:3000
npm run build  # Create production build
npm start      # Run production server
npm run lint   # Run Next.js linter
```

## Architecture

### Pages Router Structure
Located in `src/pages/`:
- `index.js` - Homepage with 3D hero animation
- `about.jsx` - About page with experience, education, skills sections
- `contact.jsx` - Contact page with EmailJS form
- `portfolio.jsx` - Portfolio/projects showcase
- `services.jsx` - Services offered
- `_app.js` - App wrapper with Layout, ModalProvider, page transitions, and GA
- `_document.js` - Custom document
- `api/` - API routes (currently minimal)

### Component Organization
Components in `src/components/` are flat (no subdirectories):
- **Layout components**: Layout, Header, NavBar, Menu, MenuToggle
- **Animation components**: AnimatedText, FadeIn, TextSlideMask
- **3D components**: Hero3d (atom animation with mouse tracking)
- **Content components**: Various card components (ExperienceCard, EducationCard, ProjectCard, etc.)
- **Feature components**: Form, Modal, Avatar, Logo, Divider

### State Management
- **ModalContext** (`src/store/ModalContext.js`): Global modal system with `isOpen`, `modalContent`, `openModal`, `closeModal`
- Access via `useModal()` hook from any component

### Animation System
- **Motion variants** centralized in `src/utils/motionVariants.js` (cardsVariants, fadeInVariants, staggerVariants)
- Page transitions defined in `_app.js` with AnimatePresence
- Extensive use of Framer Motion throughout for reveals, hovers, and interactions
- Three.js animations use framer-motion-3d for 3D transformations

### Three.js Integration
The Hero3d component demonstrates the 3D implementation pattern:
- Canvas wrapper from @react-three/fiber
- Suspense for loading states
- Mouse tracking via Framer Motion's useMotionValue and useSpring
- Post-processing effects (Bloom) via @react-three/postprocessing
- Float and Line helpers from @react-three/drei

### Styling System
Tailwind configured with:
- Custom font family: Sora (loaded via next/font/google)
- Custom gradients: hero-glow, glass-gradient, page-gradient variants
- Custom animations: blob, image-rotate, image-glow, infinite-slider
- Path alias: `@/*` maps to `src/*` (configured in jsconfig.json)

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - EmailJS service identifier
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - EmailJS template identifier
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics measurement ID

## Key Patterns

### Animation Timing
Components use carefully orchestrated animation delays to create sequential reveals. When modifying animations, maintain the timing hierarchy to preserve the intended visual flow.

### 3D Performance
The Hero3d component uses:
- Suspense for graceful loading
- useFrame for animation loops
- useMemo for expensive calculations
- Mouse tracking is debounced via Framer Motion's spring physics

### Page Lifecycle
All pages include `useEffect` to scroll to top on mount, ensuring consistent page entry experience.

### Contact Form Flow
Form uses EmailJS with states: loading, submitted, error. Success shows overlay confirmation, errors display inline fallback email.

## Important Notes

- This is a production portfolio site - test thoroughly before deploying
- All images are in `public/images/`
- The site uses React Strict Mode
- Production mode enables Google Analytics tracking
- Modal system is global but content is component-controlled
