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
        headline: "Your Dream Home Awaits",
        subheadline: "Competitive mortgage rates and personalized solutions to make homeownership a reality",
        cta_text: "Get Pre-Approved",
        background_style: "gradient",
      },
      {
        component: "product_section",
        _uid: "products-1",
        title: "Our Mortgage Products",
        description: "Find the perfect mortgage solution tailored to your needs",
        products: [
          {
            component: "card",
            _uid: "card-1",
            title: "Fixed Rate Mortgage",
            description: "Lock in your rate for peace of mind. Available in 15, 20, and 30-year terms with predictable monthly payments.",
            badge: "Most Popular",
            featured: true,
            cta_text: "Get Quote",
            icon: "lock",
          },
          {
            component: "card",
            _uid: "card-2",
            title: "Adjustable Rate Mortgage",
            description: "Start with lower rates that adjust over time. Ideal for short-term homeowners or those expecting income growth.",
            badge: "Low Initial Rate",
            cta_text: "Learn More",
            icon: "trending-up",
          },
          {
            component: "card",
            _uid: "card-3",
            title: "FHA Loan",
            description: "Government-backed loans with low down payments as little as 3.5%. Perfect for first-time homebuyers.",
            badge: "First-Time Buyers",
            cta_text: "Check Eligibility",
            icon: "home",
          },
          {
            component: "card",
            _uid: "card-4",
            title: "VA Loan",
            description: "Exclusive benefits for veterans and active military. No down payment required with competitive rates.",
            badge: "Veterans Only",
            featured: true,
            cta_text: "Apply Now",
            icon: "shield",
          },
          {
            component: "card",
            _uid: "card-5",
            title: "Jumbo Loan",
            description: "Finance luxury properties above conventional limits. Competitive rates for high-value homes.",
            badge: "High Value",
            cta_text: "Get Started",
            icon: "building",
          },
          {
            component: "card",
            _uid: "card-6",
            title: "Refinance Options",
            description: "Lower your rate, shorten your term, or tap into equity. Multiple refinancing solutions available.",
            cta_text: "Calculate Savings",
            icon: "refresh-cw",
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
