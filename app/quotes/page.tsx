import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import quotesData from "@/data/quotes.json";

interface Quote {
  id: string;
  text: string;
  author: string;
  source: string;
  year?: string;
}

export default function QuotesPage() {
  const quotes: Quote[] = quotesData as Quote[];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Favorite <span className="text-primary">Quotes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Words of wisdom that inspire my work and life. A collection of
              thoughts from brilliant minds that keep me motivated.
            </p>
          </div>

          {/* Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <Card
                key={quote.id}
                className="group relative overflow-hidden hover:ring-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-6xl font-serif text-primary/10 leading-none select-none">
                  &ldquo;
                </div>

                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit">
                    {quote.source}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-2">
                  <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 italic">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                </CardContent>

                <Separator className="mx-6 w-auto" />

                <CardFooter className="pt-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground font-medium">
                    — {quote.author}
                  </p>
                  {quote.year && (
                    <span className="text-xs text-muted-foreground/70">
                      {quote.year}
                    </span>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
