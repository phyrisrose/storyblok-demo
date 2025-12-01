import { storyblokEditable, SbBlokData, StoryblokComponent } from "@storyblok/react";

interface PageProps {
  blok: SbBlokData & {
    body?: SbBlokData[];
  };
}

const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
