# Crack The Campus (CTC) — Stage 1 Frontend Implementation

A high-performance, student-centric, responsive campus-to-career recruitment platform built with **Next.js 15 (App Router)**, **React 19**, and **TypeScript**.

---

## Live Demo

**Production:** https://crack-the-campus-landing-page-vijay.vercel.app/

---

## 1. Setup Instructions

### Prerequisites

- **Node.js:** v18.18.0 or newer (v20+ recommended)
- **Package Manager:** npm (or pnpm / yarn)

### Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Navigate into the project
cd crack-the-campus-stage1/ctc

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The website will be available at:

`http://localhost:3000`

### Verify TypeScript

```bash
npm run typecheck
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## 2. Technology Choices & Justification

| Technology | Role | Justification |
| :--- | :--- | :--- |
| **Next.js 15 (App Router)** | Core Framework | Provides a modern React architecture with Server and Client Components, static rendering, optimized routing, and strong SEO support. |
| **React 19** | UI Library | Provides component-based UI development and modern rendering capabilities. |
| **TypeScript 5.6** | Static Typing | Provides type safety across content models, navigation, reusable components, and application logic. |
| **CSS3 & CSS Variables** | Styling & Animations | Keeps styling lightweight while providing reusable design tokens, responsive layouts, transitions, and animations without requiring a heavy styling runtime. |
| **Next Font (`next/font/google`)** | Typography | Handles font loading through Next.js and helps reduce layout shifts caused by font loading. |
| **Next.js Image Optimization** | Image Optimization | Provides responsive image handling and optimized image delivery for supported image assets. |

### Dependency Philosophy

The implementation intentionally avoids unnecessary third-party dependencies.

Rather than adding animation or utility libraries for simple interactions, the project uses:

- Native CSS animations
- CSS transitions
- CSS variables
- Modern browser APIs
- Next.js built-in optimization features

This keeps the application lightweight and easier to maintain.

---

## 3. Architecture & Code Structure

The project follows a modular architecture that separates content/data from presentation.

```text
ctc/

├── public/
│   ├── badges/
│   └── lightlogo.png
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── LogoMarquee.tsx
│   │   │   ├── EcosystemSection.tsx
│   │   │   ├── MonthlySprintSection.tsx
│   │   │   ├── CtcScoreSection.tsx
│   │   │   ├── InfrastructureStrip.tsx
│   │   │   └── FaqSection.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Section.tsx
│   │       └── ChatWidget.tsx
│   │
│   └── data/
│       ├── companies.ts
│       ├── ctcScore.ts
│       ├── ecosystem.ts
│       ├── faqs.ts
│       ├── hero.ts
│       ├── nav.ts
│       ├── site.ts
│       ├── sprint.ts
│       └── stats.ts
│
└── next.config.mjs
```

### Architecture Principles

- Reusable UI components
- Data-driven content
- Separation of content and presentation
- Server rendering wherever client-side interactivity is not required
- Reusable layout primitives
- Modular page sections
- Minimal dependency usage

This structure allows additional pages, courses, programs, and content sections to be added without restructuring the entire application.

---

## 4. UI / UX Quality & Design Decisions

The website is designed primarily for students looking for upskilling and placement opportunities.

### Audience-Centric Design

The interface combines a professional recruitment-oriented visual style with modern student-focused interactions.

The design emphasizes:

- Clear messaging
- Strong visual hierarchy
- Prominent CTAs
- Readable typography
- Consistent spacing
- Responsive layouts
- Interactive elements
- Conversion-focused sections

### Visual Hierarchy & Page Flow

The landing page is structured into the following sections:

1. **Hero**
   - Clear value proposition
   - Primary CTA
   - Secondary CTA
   - Student-focused messaging

2. **Recruiter Proof**
   - Company logo marquee
   - Employer credibility
   - Interactive brand hover states

3. **Core Ecosystem**
   - Web Hub
   - Pro-Suite
   - Supporting visual/video content

4. **Monthly Performance Series**
   - Competition information
   - Rewards
   - Leaderboard preview

5. **Beyond the Resume — CTC Score**
   - Skills
   - Practice
   - Software performance
   - CTC Score visualization

6. **Enterprise Infrastructure**
   - Platform metrics
   - Reliability information
   - Placement infrastructure

7. **Frequently Asked Questions**
   - Common student questions
   - Placement-related information
   - Product information

8. **Footer**
   - Navigation
   - Contact information
   - Social links
   - Location information

---

## 5. Performance & Core Web Vitals Optimization

Performance was treated as a first-class requirement throughout the implementation.

### Server Components

Sections that do not require client-side state or browser-only APIs are implemented as Server Components where appropriate.

This reduces unnecessary client-side JavaScript and keeps interactive JavaScript limited to components that require it.

### Image Optimization

The project uses Next.js image optimization where applicable.

Performance considerations include:

- Appropriate image dimensions
- Optimized image delivery
- Priority loading for critical above-the-fold imagery
- Lazy loading for non-critical media
- Avoiding unnecessarily large assets

### Asset & Video Loading Strategy

- Ecosystem videos use `preload="metadata"` to avoid unnecessarily downloading full video files during initial page load.
- Videos use `playsInline` for improved mobile behavior.
- The embedded map uses lazy loading because it is not part of the critical rendering path.

### Vector Assets

Company logos in the marquee are represented using vector assets where appropriate, reducing the need for large raster image downloads.

### Layout Stability

Explicit dimensions and aspect ratios are used for media where appropriate to minimize layout shifts.

The deployed Lighthouse mobile test reported:

**CLS: 0**

---

## 6. Animation Strategy & Accessibility

Animations were implemented with a focus on visual feedback without unnecessarily increasing page weight.

### GPU-Friendly Animations

Animations primarily use properties such as:

```css
transform
opacity
```

This avoids unnecessary layout recalculations for common hover, reveal, and movement effects.

### Interactive Effects

The implementation includes:

- Hero interactions
- Company logo hover effects
- Card hover states
- CTA interactions
- Navigation transitions
- Section animations
- Micro-interactions

Animations are used to support the user experience rather than being added purely for visual decoration.

### Reduced Motion

The application supports:

```css
prefers-reduced-motion: reduce
```

to reduce or disable non-essential animations for users who prefer reduced motion.

### Accessibility Considerations

The implementation includes:

- Semantic HTML landmarks
- Keyboard-friendly navigation
- Skip-to-content navigation
- Accessible interactive elements
- Appropriate heading hierarchy
- Responsive layouts
- Reduced-motion support
- High-contrast UI elements

---

## 7. Performance Report — Lighthouse

Lighthouse testing was performed against the **deployed production version** of the website.

### Lighthouse Results

| Category | Mobile | Desktop |
| :--- | :---: | :---: |
| **Performance** | **97** | **100** |
| **Accessibility** | **96** | **96** |
| **Best Practices** | **92** | **92** |
| **SEO** | **100** | **100** |

### Mobile Performance Metrics

| Metric | Result |
| :--- | :---: |
| **First Contentful Paint (FCP)** | **1.2 s** |
| **Largest Contentful Paint (LCP)** | **2.4 s** |
| **Total Blocking Time (TBT)** | **110 ms** |
| **Cumulative Layout Shift (CLS)** | **0** |
| **Speed Index** | **1.3 s** |

### Performance Highlights

- **Desktop Performance:** 100
- **Mobile Performance:** 97
- **Desktop SEO:** 100
- **Mobile SEO:** 100
- **Desktop Accessibility:** 96
- **Mobile Accessibility:** 96
- **Desktop Best Practices:** 92
- **Mobile Best Practices:** 92
- **Mobile CLS:** 0

### Lighthouse Screenshots

#### Desktop

![Lighthouse Desktop Results](./docs/desktop.png)

#### Mobile

![Lighthouse Mobile Results](./docs/mobile.png)

> Lighthouse scores can vary slightly between runs depending on network conditions, device performance, browser state, and other environmental factors.

---

## 8. Adaptability & Future Extensibility

The application is structured so that the landing page can evolve into a larger product.

### Content Agility

Content is separated into the `src/data/` directory.

This makes it possible to update:

- Navigation
- Hero content
- FAQs
- Company information
- CTC Score data
- Ecosystem information
- Competition information
- Statistics

without unnecessarily modifying the presentation components.

### Extensible Tracks

New ecosystem tracks can be added through the data layer without duplicating the entire UI structure.

### Reusable Components

Reusable components such as:

- `Button`
- `Section`
- `Header`
- `Footer`
- `ChatWidget`

can be reused across future pages such as:

- Course catalogs
- Authentication pages
- Student dashboards
- Institution pages
- Placement dashboards

---

## 9. Assumptions & Design Decisions

The following assumptions were made during implementation:

- The assessment is focused on the frontend experience, so no backend or authentication system was implemented.
- Static/mock data is used where dynamic backend data would normally be required.
- The page is designed as a scalable landing-page foundation rather than a complete production recruitment platform.
- External integrations such as recruitment systems and real-time placement data are represented through static content or UI demonstrations.
- The design prioritizes students as the primary audience while maintaining a professional recruiter-facing visual language.
- Native CSS and Next.js capabilities were preferred over additional animation or UI libraries when they were sufficient for the required interactions.

---

## 10. Known Limitations

- No backend or database integration is implemented.
- Course/program data is currently static.
- Competition and leaderboard information is mock/static content.
- Authentication and user accounts are not implemented.
- Some platform interactions are represented as frontend UI demonstrations.
- Real-time recruiter, placement, and course data would require backend/API integration.
- Production analytics and monitoring are not included in this assessment implementation.

---

## 11. Future Improvements

With additional development time, the following improvements could be implemented:

### Product Improvements

- Student authentication and onboarding
- Personalized student dashboard
- Course and learning progress tracking
- Real-time course/program data
- Recruiter dashboard
- Application tracking
- Real-time competition leaderboard
- Student profile and skill management

### Performance Improvements

- Further optimization of third-party resources
- More aggressive caching strategies
- Further JavaScript reduction where possible
- Additional image compression
- Performance monitoring in production
- Continuous Lighthouse and Core Web Vitals monitoring

### Accessibility Improvements

- Additional automated accessibility testing
- Screen-reader testing across major browsers
- Expanded keyboard navigation testing
- More comprehensive focus-state testing

### Engineering Improvements

- Automated unit and integration tests
- End-to-end testing
- CI/CD checks
- Error monitoring
- Analytics integration
- Content management system integration

---

## 12. Validation

The production build was successfully validated using:

```bash
npm run build
```

The Next.js production build completed successfully with static page generation.

### Production Build Summary

```text
Next.js 15.5.26

✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Collecting build traces
✓ Finalizing page optimization
```

The main landing page is statically prerendered.

---

## 13. License & Attribution

Designed and engineered for **Crack The Campus**.

© 2026 Crack The Campus. All rights reserved.
