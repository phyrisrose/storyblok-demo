import Counter from "@/components/Counter/Counter";
import StoryblokContent from "@/components/StoryblokContent/StoryblokContent";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, TestTube, Palette, Layout, Box } from "lucide-react";

const Index = () => {
  const techStack = [
    { name: "TypeScript", icon: Code2, color: "text-primary" },
    { name: "React + Vite", icon: Layout, color: "text-primary" },
    { name: "Redux Toolkit", icon: Database, color: "text-accent" },
    { name: "React Query", icon: Database, color: "text-accent" },
    { name: "Tailwind + SCSS", icon: Palette, color: "text-primary" },
    { name: "Vitest", icon: TestTube, color: "text-accent" },
    { name: "Shadcn UI", icon: Box, color: "text-primary" },
    { name: "Storyblok", icon: Box, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="text-sm font-mono border-primary/30 bg-primary/5">
            v1.0.0
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Modern Web App Scaffold
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready architecture with TypeScript, Redux Toolkit, React Query, and more
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <tech.icon className={`w-6 h-6 mb-2 ${tech.color}`} />
              <p className="font-medium text-sm">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Counter />
          <StoryblokContent />
        </div>

        <footer className="mt-16 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Redux State</Badge>
            <Badge variant="secondary">React Query Cache</Badge>
            <Badge variant="secondary">SCSS Modules</Badge>
            <Badge variant="secondary">Vitest Ready</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Run <code className="px-2 py-1 bg-muted rounded font-mono text-xs">npm test</code> to execute unit tests
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
