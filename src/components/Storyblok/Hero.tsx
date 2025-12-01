import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  blok: SbBlokData & {
    headline?: string;
    subheadline?: string;
    cta_text?: string;
    cta_link?: string;
    background_style?: "gradient" | "solid" | "subtle";
  };
}

const Hero = ({ blok }: HeroProps) => {
  const backgroundStyles = {
    gradient: "bg-gradient-primary",
    solid: "bg-primary",
    subtle: "bg-gradient-subtle",
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative py-24 md:py-32 px-4 ${
        backgroundStyles[blok.background_style || "gradient"]
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            {blok.headline || "Welcome to Our Platform"}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            {blok.subheadline || "Build amazing experiences with our design system"}
          </p>
          {blok.cta_text && (
            <div className="pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="group hover:scale-105 transition-transform"
              >
                {blok.cta_text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
