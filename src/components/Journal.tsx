import { PlayCircle, Heart, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Journal = () => {
  const journalEntries = [
    {
      title: "The Art of Data Storytelling",
      date: "March 15, 2024",
      excerpt: "Reflecting on how I learned to transform complex datasets into compelling narratives that drive business decisions. Sometimes the most powerful insights come from the simplest visualizations.",
      type: "Reflection",
      stickers: ["📊", "💡", "🎨"],
      readTime: "3 min read"
    },
    {
      title: "MBA Prep Journey: Quantitative Methods",
      date: "March 10, 2024",
      excerpt: "Breaking down my approach to mastering quantitative analysis for business school. From financial modeling to statistical inference, here's what I've learned about applying data science in business contexts.",
      type: "Study Notes",
      stickers: ["📚", "📈", "🎯"],
      readTime: "5 min read"
    },
    {
      title: "Why I Choose Apple (And Data)",
      date: "February 28, 2024",
      excerpt: "A personal reflection on joining Apple as a data analyst and how the company's commitment to user privacy influences the way we approach data science. Plus, some thoughts on the future of ethical AI.",
      type: "Career",
      stickers: ["🍎", "🔐", "🤖"],
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Journal Lab
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personal reflections, study notes, and behind-the-scenes thoughts from my journey 
            in data science and MBA preparation. Featuring insights, stickers, and plenty of curiosity! ✨
          </p>
        </div>

        {/* YouTube Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <PlayCircle className="h-8 w-8 text-accent" />
                <CardTitle className="text-2xl">Journal Lab YouTube Channel</CardTitle>
              </div>
              <CardDescription>
                Watch my latest thoughts on data science, MBA preparation, and life at Apple
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <PlayCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Latest Video: "From Data to Strategy: My MBA Journey"</p>
                  <Button className="mt-4" variant="default">
                    Watch Now
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Channel
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Journal entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journalEntries.map((entry, index) => (
            <Card key={index} className="project-card group cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {entry.type}
                  </Badge>
                  <div className="flex gap-1">
                    {entry.stickers.map((sticker, idx) => (
                      <span key={idx} className="text-lg group-hover:animate-bounce" style={{animationDelay: `${idx * 100}ms`}}>
                        {sticker}
                      </span>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {entry.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {entry.date}
                  </div>
                  <span>{entry.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {entry.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/journal" className="flex items-center gap-2">
              Read All Journal Entries
              <Heart className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journal;