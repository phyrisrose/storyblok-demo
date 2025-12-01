import { storyblokEditable, SbBlokData, StoryblokComponent } from "@storyblok/react";
import { Package } from "lucide-react";

interface ProductSectionProps {
  blok: SbBlokData & {
    title?: string;
    description?: string;
    products?: SbBlokData[];
  };
}

const ProductSection = ({ blok }: ProductSectionProps) => {
  return (
    <section {...storyblokEditable(blok)} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {blok.title || "Our Products"}
          </h2>
          {blok.description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {blok.description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.products?.map((nestedBlok: SbBlokData) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
