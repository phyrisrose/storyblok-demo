import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface StoryblokCardProps {
  blok: SbBlokData & {
    title?: string;
    description?: string;
    badge?: string;
    featured?: boolean;
    cta_text?: string;
    icon?: string;
  };
}

const StoryblokCard = ({ blok }: StoryblokCardProps) => {
  return (
    <Card
      {...storyblokEditable(blok)}
      className="group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in h-full flex flex-col"
    >
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between mb-2">
          {blok.featured && (
            <Badge variant="default" className="mb-2">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          {blok.badge && !blok.featured && (
            <Badge variant="secondary">{blok.badge}</Badge>
          )}
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          {blok.title || "Card Title"}
        </CardTitle>
        {blok.description && (
          <CardDescription className="text-base">
            {blok.description}
          </CardDescription>
        )}
      </CardHeader>
      {blok.cta_text && (
        <CardContent className="mt-auto pt-0">
          <Button
            variant="ghost"
            className="group/btn w-full justify-between"
          >
            {blok.cta_text}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default StoryblokCard;
