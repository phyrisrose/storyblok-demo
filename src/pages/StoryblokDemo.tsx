import { useQuery } from "@tanstack/react-query";
import { StoryblokComponent, SbBlokData, getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Demo data structure that mimics Storyblok response
const demoStory = {
  content: {
    component: "page",
    _uid: "demo-page",
    body: [
      {
        component: "hero",
        _uid: "hero-1",
        headline: "Design System Components",
        subheadline: "Beautiful, reusable components powered by Storyblok CMS",
        cta_text: "Get Started",
        background_style: "gradient",
      },
      {
        component: "product_section",
        _uid: "products-1",
        title: "Featured Components",
        description: "Explore our collection of pre-built, customizable components",
        products: [
          {
            component: "card",
            _uid: "card-1",
            title: "Hero Sections",
            description: "Eye-catching hero sections with customizable backgrounds and CTAs",
            badge: "Popular",
            featured: true,
            cta_text: "View Details",
          },
          {
            component: "card",
            _uid: "card-2",
            title: "Product Grids",
            description: "Responsive product showcases with flexible layouts",
            badge: "New",
            cta_text: "Explore",
          },
          {
            component: "card",
            _uid: "card-3",
            title: "Footer Layouts",
            description: "Professional footers with social links and multi-column support",
            cta_text: "Learn More",
          },
          {
            component: "card",
            _uid: "card-4",
            title: "Card Components",
            description: "Versatile cards for any content type with multiple variants",
            badge: "Essential",
            cta_text: "View Examples",
          },
          {
            component: "card",
            _uid: "card-5",
            title: "Custom Layouts",
            description: "Build unique page layouts with our flexible component system",
            cta_text: "Get Started",
          },
          {
            component: "card",
            _uid: "card-6",
            title: "CMS Integration",
            description: "Seamlessly integrate with Storyblok for dynamic content",
            featured: true,
            cta_text: "Learn How",
          },
        ],
      },
      {
        component: "footer",
        _uid: "footer-1",
        company_name: "Your Company",
        tagline: "Building the future of web experiences",
        copyright_text: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
        show_social_links: true,
        columns: [
          {
            title: "Product",
            links: [
              { label: "Features", url: "#features" },
              { label: "Pricing", url: "#pricing" },
              { label: "Documentation", url: "#docs" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", url: "#about" },
              { label: "Blog", url: "#blog" },
              { label: "Careers", url: "#careers" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Help Center", url: "#help" },
              { label: "Contact", url: "#contact" },
              { label: "Status", url: "#status" },
            ],
          },
        ],
      },
    ],
  },
};

const StoryblokDemo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["storyblok-demo"],
    queryFn: async () => {
      // Try to fetch from Storyblok, fallback to demo data
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi?.get("cdn/stories/home", {
          version: "draft",
        });
        return response?.data?.story || demoStory;
      } catch {
        // If no story exists, use demo data
        return demoStory;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-96 w-full mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Alert variant="destructive" className="max-w-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Loading Content</AlertTitle>
          <AlertDescription>
            Failed to fetch content from Storyblok. Using demo data instead.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <Button asChild variant="outline" className="shadow-lg">
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
      {data?.content && (
        <StoryblokComponent blok={data.content as SbBlokData} />
      )}
    </div>
  );
};

export default StoryblokDemo;
