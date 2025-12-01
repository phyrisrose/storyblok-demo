import { useQuery } from "@tanstack/react-query";
import { storyblokApi } from "@/lib/storyblok";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const StoryblokContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["storyblok"],
    queryFn: async () => {
      const response = await storyblokApi?.get("cdn/spaces/me");
      return response?.data;
    },
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to fetch Storyblok content</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Storyblok CMS</CardTitle>
        <CardDescription>Headless CMS integration</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Connected to Storyblok space:</p>
          <p className="font-mono text-sm bg-muted p-3 rounded-lg border">
            {data?.space?.name || "Default Space"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryblokContent;
