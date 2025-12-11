import { useState, useEffect } from "react";
import { useStoryblokBridge, StoryblokComponent, SbBlokData, ISbStoryData } from "@storyblok/react";
import { storyblokApi } from "@/lib/storyblok";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [story, setStory] = useState<ISbStoryData | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      if (!storyblokApi) return;
      const { data } = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
      });
      setStory(data.story);
    };
    fetchStory();
  }, []);

  // Enable visual editor bridge
  useStoryblokBridge(story?.id ?? 0, (newStory) => setStory(newStory));

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
