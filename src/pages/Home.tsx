import { useStoryblok, StoryblokComponent, SbBlokData } from "@storyblok/react";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  // useStoryblok hook enables real-time visual editing in Storyblok
  const story = useStoryblok("home", { version: "draft" });

  if (!story || !story.content) {
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

  return (
    <div className="min-h-screen bg-background">
      <StoryblokComponent blok={story.content as SbBlokData} />
    </div>
  );
};

export default Home;
