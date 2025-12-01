# Storyblok Design System Components

This directory contains reusable components that integrate with Storyblok CMS.

## Available Components

### Hero
Full-width hero section with headline, subheadline, and CTA.

**Props:**
- `headline` (string) - Main heading text
- `subheadline` (string) - Supporting text
- `cta_text` (string) - Call-to-action button text
- `cta_link` (string) - CTA button URL
- `background_style` (gradient | solid | subtle) - Background style variant

**Usage in Storyblok:**
```json
{
  "component": "hero",
  "headline": "Welcome to Our Platform",
  "subheadline": "Build amazing experiences",
  "cta_text": "Get Started",
  "background_style": "gradient"
}
```

### ProductSection
Grid layout for displaying multiple cards/products.

**Props:**
- `title` (string) - Section title
- `description` (string) - Section description
- `products` (array) - Array of nested card components

**Usage in Storyblok:**
```json
{
  "component": "product_section",
  "title": "Our Products",
  "description": "Explore our offerings",
  "products": [...]
}
```

### StoryblokCard
Versatile card component for products, features, or content.

**Props:**
- `title` (string) - Card title
- `description` (string) - Card description
- `badge` (string) - Optional badge text
- `featured` (boolean) - Show featured star badge
- `cta_text` (string) - Call-to-action button text

**Usage in Storyblok:**
```json
{
  "component": "card",
  "title": "Feature Name",
  "description": "Feature description",
  "badge": "New",
  "featured": true,
  "cta_text": "Learn More"
}
```

### Footer
Professional footer with branding, navigation columns, and social links.

**Props:**
- `company_name` (string) - Company/brand name
- `tagline` (string) - Company tagline
- `copyright_text` (string) - Copyright notice
- `show_social_links` (boolean) - Display social media icons
- `columns` (array) - Navigation columns with links

**Usage in Storyblok:**
```json
{
  "component": "footer",
  "company_name": "Your Company",
  "tagline": "Building the future",
  "show_social_links": true,
  "columns": [
    {
      "title": "Product",
      "links": [
        { "label": "Features", "url": "/features" }
      ]
    }
  ]
}
```

### Page
Container component that renders nested components.

**Props:**
- `body` (array) - Array of nested Storyblok components

**Usage in Storyblok:**
```json
{
  "component": "page",
  "body": [
    { "component": "hero", ... },
    { "component": "product_section", ... },
    { "component": "footer", ... }
  ]
}
```

## Setting up in Storyblok

1. **Create Component Schemas**: In your Storyblok space, create components matching these names:
   - `hero`
   - `product_section`
   - `card`
   - `footer`
   - `page`

2. **Add Fields**: For each component, add the fields listed in the Props section above.

3. **Create Content**: Build pages by composing these components together.

4. **Fetch and Render**: Use the Storyblok API to fetch content and render with `StoryblokComponent`.

## Example Implementation

```tsx
import { StoryblokComponent } from "@storyblok/react";
import { storyblokApi } from "@/lib/storyblok";

const MyPage = () => {
  const story = await storyblokApi.get("cdn/stories/home");
  
  return <StoryblokComponent blok={story.content} />;
};
```

## Design System Integration

All components use the centralized design system from:
- `src/index.css` - CSS variables and tokens
- `tailwind.config.ts` - Tailwind configuration

Components automatically adapt to your theme and respond to changes in the design system.

## Testing

Components are editable in Storyblok's visual editor using the `storyblokEditable` directive, which adds the necessary data attributes for live editing.
