import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import Hero from "@/components/Storyblok/Hero";
import ProductSection from "@/components/Storyblok/ProductSection";
import StoryblokCard from "@/components/Storyblok/StoryblokCard";
import Footer from "@/components/Storyblok/Footer";
import Page from "@/components/Storyblok/Page";

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  bridge: true,
  components: {
    hero: Hero,
    product_section: ProductSection,
    card: StoryblokCard,
    footer: Footer,
    page: Page,
  },
});

export { getStoryblokApi };
