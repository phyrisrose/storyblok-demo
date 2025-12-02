# Storyblok demo

A web application built using a modern web application stack, with a focus on testing out Storyblok CMS.

## Tech Stack

- **Language**: TypeScript
- **Framework**: React 18 + Vite
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query (@tanstack/react-query)
- **Styling**: Tailwind CSS + SCSS Modules
- **UI Library**: Shadcn UI
- **Testing**: Vitest + React Testing Library
- **CMS**: Storyblok (integrated)

## Project Structure

```
src/
├── components/          # React components
│   ├── Counter/        # Example component with SCSS module
│   ├── StoryblokContent/ # CMS integration example
│   └── ui/             # Shadcn UI components
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup
│   ├── hooks.ts        # Typed Redux hooks
│   └── slices/         # Redux slices
├── lib/                # Utilities and configurations
│   ├── storyblok.ts    # Storyblok CMS client
│   └── utils.ts        # Helper functions
├── test/               # Test configuration
│   └── setup.ts        # Vitest setup
└── pages/              # Page components
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with UI:

```bash
npm run test:ui
```

### Build

```bash
npm run build
```

## Key Features

### Redux Toolkit Integration

- Centralized state management
- Type-safe hooks (`useAppDispatch`, `useAppSelector`)
- Example counter slice with actions

### React Query

- Efficient data fetching and caching
- Automatic background refetching
- Integrated with Storyblok CMS

### SCSS Modules

- Component-scoped styles
- CSS Modules for style encapsulation
- Works alongside Tailwind CSS

### Vitest Testing

- Fast unit testing with Vitest
- React Testing Library integration
- Example test suite for Counter component

### Storyblok CMS

- Headless CMS integration
- Pre-configured API client
- Example content fetching with React Query

## Environment Configuration

The Storyblok API key is already configured in `src/lib/storyblok.ts`. For production, consider moving it to environment variables.

## Design System

The project uses a modern design system with:

- Cyan/blue gradient accents
- Clean, tech-focused aesthetic
- Smooth transitions and hover effects
- Responsive design

All design tokens are centralized in:

- `src/index.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

## Testing Guidelines

Write tests for:

- Component rendering
- User interactions
- State changes
- Data fetching

Example test structure:

```typescript
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Component", () => {
  it("should render correctly", () => {
    // Test implementation
  });
});
```

## Best Practices

1. **State Management**: Use Redux Toolkit for global state, React Query for server state
2. **Styling**: Prefer design system tokens over arbitrary values
3. **Components**: Keep components small and focused
4. **Testing**: Write tests for critical user flows
5. **Type Safety**: Leverage TypeScript for better DX

## Scripts

Add these scripts to your workflow:

```json
{
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:ui": "vitest --ui"
}
```

## Caveats

### Components?..

Note the difference between `components.json` and `storyblok-components.json`

- `components.json` → shadcn/ui config file (for your React UI library)
- `storyblok-components.json` → Storyblok components schema

### Storyblok schema

Storyblok is a component/block-based CMS. That means that components schemas are meant to be created in the Storyblok UI. Syncing with the design system components in React requires a manual step of syncing these schemas via storyblok-cli

You need to install storyblok-cli locally via npm, and then run push / pull commands to sync the schema. You can use an AI tool of your choice to convert the React UI component to Storyblok-formatted schema.

```bash
npx storyblok-cli pull-components --space SPACE_ID --region eu
npx storyblok-cli push-components ./storyblok-components.json --space SPACE_ID
```

Running the CLI does require an auth step. If you've logged into Storyblok via GitHub SSO, you'd create a `~/.netrc` with the following

```bash
machine api.storyblok.com
  login oauth
  password MANAGEMENT_API_PERSONAL_ACCESS_TOKEN
```

## Next Steps

- [ ] Configure additional Storyblok components
- [ ] Add more Redux slices for your domain
- [ ] Implement authentication if needed
- [ ] Set up CI/CD pipeline
- [ ] Add E2E tests with Playwright/Cypress
- [ ] Configure environment variables

## Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TanStack Query](https://tanstack.com/query)
- [Vitest](https://vitest.dev)
- [Storyblok](https://www.storyblok.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
