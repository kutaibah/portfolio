import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ProjectsPage() {
  const projects: Project[] = projectsData as Project[];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of work I&apos;ve built and contributed to. Each
              project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:ring-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <Separator className=" w-auto mt-auto" />
                {project.link && (
                  <CardFooter>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-7 px-2.5 rounded-lg border border-border bg-background text-sm font-medium transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                    >
                      View Project →
                    </Link>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
