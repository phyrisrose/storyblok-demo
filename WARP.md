# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Commands

### Development
```bash
npm run dev              # Start dev server on port 8080
npm run build            # Production build
npm run build:dev        # Development mode build
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

### Testing
```bash
vitest                   # Run all tests (no npm script defined)
vitest --watch           # Run tests in watch mode
vitest --ui              # Run tests with UI
vitest path/to/test.tsx  # Run a specific test file
```

Note: The repository doesn't have npm test scripts defined in package.json, so use `vitest` directly.

## Architecture Overview

### Tech Stack
- **Framework**: React 18 + Vite (SWC plugin for fast refresh)
- **Language**: TypeScript with path alias `@/` → `src/`
- **State Management**: Redux Toolkit for global state
- **Data Fetching**: React Query (@tanstack/react-query) for server state
- **CMS**: Storyblok headless CMS integration
- **Styling**: Tailwind CSS + SCSS Modules (component-scoped)
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Testing**: Vitest + React Testing Library + jsdom

### Application Structure

**App Providers (nested order in `App.tsx`):**
1. Redux Provider (store)
2. React Query Provider (queryClient)
3. TooltipProvider (shadcn)
4. BrowserRouter (react-router-dom)

**Key directories:**
- `src/components/ui/` - Shadcn UI components (auto-generated via CLI)
- `src/components/Storyblok/` - Storyblok CMS component mappings
- `src/store/` - Redux store with typed hooks (`useAppDispatch`, `useAppSelector`)
- `src/lib/` - Utilities and third-party client configurations
- `src/pages/` - Top-level route components
- `src/test/` - Test configuration (setup.ts imports jest-dom)

### State Management Pattern

**Two-tier state architecture:**
1. **Redux Toolkit** - Client-side global state (e.g., UI state, counters)
   - Store configured in `src/store/index.ts`
   - Slices in `src/store/slices/`
   - Always use typed hooks: `useAppDispatch()` and `useAppSelector()`

2. **React Query** - Server state and data fetching (e.g., CMS content)
   - QueryClient instantiated in `App.tsx`
   - Use for Storyblok API calls and external data

### Storyblok CMS Integration

**Pre-configured components mapping:**
The Storyblok client is initialized in `src/lib/storyblok.ts` with component mappings:
- `hero` → Hero component
- `product_section` → ProductSection
- `card` → StoryblokCard
- `footer` → Footer
- `page` → Page

**API access token**: Hardcoded in `src/lib/storyblok.ts` (line 11). For production, move to environment variables.

When adding new Storyblok components:
1. Create component in `src/components/Storyblok/`
2. Register in `storyblokInit` components object
3. Use with `<StoryblokContent />` wrapper

### Routing

React Router v6 with BrowserRouter. Important: Add custom routes BEFORE the catch-all `*` route in `App.tsx` (see comment on line 24).

### Styling System

**Dual styling approach:**
1. **Tailwind CSS** - Utility-first styling (primary method)
   - Custom config in `tailwind.config.ts`
   - CSS variables defined in `src/index.css`
   - Design tokens: cyan/blue gradient theme

2. **SCSS Modules** - Component-scoped styles (optional)
   - Example: `Counter.module.scss`
   - Use CSS Modules for complex component styles

### Testing Guidelines

**Test setup:**
- Vitest config: `vitest.config.ts` (globals enabled, jsdom environment)
- Setup file: `src/test/setup.ts` (imports jest-dom matchers)

**When testing Redux components:**
Always wrap in Provider with a test store:
```typescript
const createTestStore = () => {
  return configureStore({
    reducer: { counter: counterReducer }
  });
};

render(
  <Provider store={createTestStore()}>
    <YourComponent />
  </Provider>
);
```

See `src/components/Counter/Counter.test.tsx` for reference implementation.

### Linting

ESLint uses flat config (`eslint.config.js`) with TypeScript ESLint:
- Ignores `dist/` directory
- React hooks rules enforced
- `@typescript-eslint/no-unused-vars` disabled

## Development Notes

- **Dev server** runs on `::` (all interfaces) port 8080
- **Path alias**: Use `@/` imports (e.g., `@/components/ui/button`)
- **Lovable integration**: This project syncs with Lovable.dev platform
- **Build tool**: Vite with SWC for React (faster than Babel)
- **Component tagger**: Only enabled in development mode (lovable-tagger plugin)
