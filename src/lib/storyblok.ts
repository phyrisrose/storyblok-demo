import { storyblokInit, apiPlugin, StoryblokClient } from "@storyblok/react";

let storyblokApi: StoryblokClient | undefined;

const initStoryblok = storyblokInit({
  accessToken: "EWhSIOQutRNbSmf7z8hNrAt",
  use: [apiPlugin],
});

if (typeof initStoryblok === "function") {
  storyblokApi = initStoryblok();
} else {
  storyblokApi = initStoryblok;
}

export { storyblokApi };
