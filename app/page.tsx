import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in [--delay:200ms]">
          Hello, I&apos;m
        </p>

        {/* Name with staggered animation */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="inline-block animate-fade-in-up [--delay:400ms]">
            Kutaibah
          </span>
          <br />
          <span className="inline-block text-primary animate-fade-in-up [--delay:600ms]">
            Halima
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-md mx-auto mb-12 animate-fade-in [--delay:800ms]">
          Developer & Creator
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [--delay:1000ms]">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/projects" />}
            className="px-8 transition-transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
            className="px-8 transition-transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </main>
  );
}
