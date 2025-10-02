import Navigation from "@/components/Navigation";
import { ArrowLeft, Heart, Calendar, Clock, PlayCircle, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Journal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const journalEntries = [
    {
      id: 1,
      title: "The Art of Data Storytelling",
      date: "March 15, 2024",
      readTime: "3 min read",
      excerpt: "Reflecting on how I learned to transform complex datasets into compelling narratives that drive business decisions. Sometimes the most powerful insights come from the simplest visualizations.",
      content: "Today I spent some time reflecting on my journey from someone who could crunch numbers to someone who could tell stories with data. It's fascinating how the same dataset can tell completely different stories depending on how you choose to present it. I've learned that the most powerful insights often come from the simplest visualizations – a clean line chart that shows a clear trend can be more impactful than a complex dashboard with dozens of metrics. The key is understanding your audience and what story they need to hear to make better decisions.",
      type: "Reflection",
      category: "Data Science",
      stickers: ["📊", "💡", "🎨"],
      tags: ["data visualization", "storytelling", "insights", "business decisions"],
      featured: true
    },
    {
      id: 2,
      title: "MBA Prep Journey: Quantitative Methods",
      date: "March 10, 2024",
      readTime: "5 min read",
      excerpt: "Breaking down my approach to mastering quantitative analysis for business school. From financial modeling to statistical inference, here's what I've learned about applying data science in business contexts.",
      content: "Preparing for the CAT exam has been an interesting journey of connecting my technical background with business fundamentals. What's fascinating is how many statistical concepts I use daily in my data analysis work have direct applications in business strategy and finance. Today I worked through several financial modeling problems and realized that the pattern recognition skills I've developed in machine learning directly apply to identifying market trends and business opportunities. The key difference is the context and stakes – in business, you're not just finding patterns, you're making decisions that affect real people and real money.",
      type: "Study Notes",
      category: "MBA Prep",
      stickers: ["📚", "📈", "🎯"],
      tags: ["MBA", "quantitative methods", "financial modeling", "CAT exam"],
      featured: false
    },
    {
      id: 3,
      title: "Why I Choose Apple (And Data)",
      date: "February 28, 2024",
      readTime: "4 min read",
      excerpt: "A personal reflection on joining Apple as a data analyst and how the company's commitment to user privacy influences the way we approach data science. Plus, some thoughts on the future of ethical AI.",
      content: "Working at Apple has fundamentally changed how I think about data and privacy. Every analysis we do, every model we build, has to consider not just accuracy and performance, but also user privacy and ethical implications. It's challenging but incredibly rewarding to work within these constraints. The privacy-first approach has made me a better data scientist – when you can't rely on invasive data collection, you have to be more creative and thoughtful about the insights you generate. I've been thinking a lot about how this experience will inform my future career in product management or finance. The ability to balance technical rigor with ethical considerations will be crucial as AI becomes more prevalent in business decision-making.",
      type: "Career",
      category: "Technology",
      stickers: ["🍎", "🔐", "🤖"],
      tags: ["Apple", "privacy", "ethical AI", "career reflection"],
      featured: true
    },
    {
      id: 4,
      title: "Building My YouTube Strategy",
      date: "February 20, 2024",
      readTime: "2 min read",
      excerpt: "Launching Journal Lab has been an exciting experiment in content creation. Here's what I've learned about sharing my journey in data science and MBA prep with the world.",
      content: "Starting Journal Lab on YouTube was initially just a way to document my MBA preparation journey, but it's evolved into something much more meaningful. Creating content has forced me to articulate my thoughts more clearly and has connected me with amazing people in the data science and business communities. The process of editing videos and choosing which stickers to use (yes, I'm particular about my stickers!) has become a creative outlet that balances the analytical work I do at Apple. Plus, I've discovered that teaching others is one of the best ways to solidify your own understanding.",
      type: "Creative",
      category: "Content Creation",
      stickers: ["🎬", "✨", "📹"],
      tags: ["YouTube", "content creation", "community", "teaching"],
      featured: false
    },
    {
      id: 5,
      title: "Lessons from Supply Chain Analytics",
      date: "February 15, 2024",
      readTime: "6 min read",
      excerpt: "Deep dive into the complexities of global supply chain optimization. What I learned from building predictive models that help Apple navigate supply disruptions.",
      content: "Working on supply chain analytics has been one of the most complex and rewarding projects of my career. The sheer scale of Apple's global operations means that small improvements in our predictive models can have massive real-world impact. What struck me most is how interconnected everything is – a small disruption in one region can cascade through the entire network. Building models that can predict and account for these cascading effects requires thinking beyond traditional machine learning approaches. You need to understand geopolitics, weather patterns, economic indicators, and human behavior. It's made me appreciate how business strategy and data science are deeply intertwined.",
      type: "Technical",
      category: "Data Science",
      stickers: ["🌐", "📦", "⚡"],
      tags: ["supply chain", "predictive modeling", "global operations", "complexity"],
      featured: false
    },
    {
      id: 6,
      title: "Sticker Collection Update!",
      date: "February 10, 2024",
      readTime: "1 min read",
      excerpt: "A fun update on my latest sticker acquisitions and how they inspire my creative process. Sometimes the smallest things bring the most joy!",
      content: "I know it might seem silly, but my sticker collection has become an important part of my creative process! This week I found some amazing holographic data visualization stickers and some cute minimalist ones that perfectly capture the feeling of 'aha!' moments in analysis. I've started using them to mark important insights in my research notebooks and to decorate my laptop. There's something about the tactile, visual nature of stickers that provides a nice counterbalance to all the digital work I do. Plus, they make great conversation starters – you'd be surprised how many deep discussions about data science have started with someone noticing a particularly cool sticker on my laptop!",
      type: "Personal",
      category: "Life",
      stickers: ["🌈", "✨", "💕"],
      tags: ["stickers", "creativity", "personal", "joy"],
      featured: false
    },
    {
      id: 7,
      title: "Finance vs. Product: My Post-MBA Dilemma",
      date: "February 5, 2024",
      readTime: "4 min read",
      excerpt: "Weighing the pros and cons of different career paths after my MBA. Finance offers analytical rigor, while product management offers creative problem-solving.",
      content: "As I prepare for my MBA applications, I've been thinking deeply about my post-graduation career path. My experience at Apple has exposed me to both finance and product strategy, and I'm genuinely torn between the two. Finance appeals to my quantitative nature – there's something satisfying about building models that can predict market movements or assess investment opportunities. But product management offers a different kind of challenge: understanding user needs, balancing technical constraints with business goals, and creating something that improves people's lives. Maybe the answer isn't choosing between them, but finding ways to combine both skill sets. The future of business seems to be at the intersection of finance, technology, and product strategy.",
      type: "Planning",
      category: "Career",
      stickers: ["🤔", "💼", "🚀"],
      tags: ["career planning", "finance", "product management", "MBA goals"],
      featured: true
    }
  ];

  const filteredEntries = journalEntries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    entry.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredEntries = journalEntries.filter(entry => entry.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-8 w-8 text-accent" />
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Journal Lab
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Personal reflections, study notes, and behind-the-scenes thoughts from my journey 
                in data science and MBA preparation. Featuring insights, stickers, and plenty of curiosity! ✨
              </p>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search journal entries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Featured Video */}
                    <div>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center">
                          <PlayCircle className="h-12 w-12 text-accent mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Latest: "From Data to Strategy"</p>
                        </div>
                      </div>
                      <Button className="w-full" variant="default">
                        Watch Latest Video
                      </Button>
                    </div>
                    
                    {/* Channel Stats */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Channel Highlights</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">15</div>
                          <div className="text-sm text-muted-foreground">Videos</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">2.5K</div>
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">45K</div>
                          <div className="text-sm text-muted-foreground">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">Weekly</div>
                          <div className="text-sm text-muted-foreground">Upload</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Visit Channel
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Entries */}
        {!searchTerm && (
          <section className="py-8 bg-gradient-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                  Featured Entries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredEntries.map((entry) => (
                    <Card key={entry.id} className="project-card group cursor-pointer">
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
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {entry.readTime}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {entry.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {entry.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Journal Entries */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                {searchTerm ? `Search Results (${filteredEntries.length})` : "All Journal Entries"}
              </h2>
              
              <div className="space-y-8">
                {filteredEntries.map((entry) => (
                  <Card key={entry.id} className="project-card group cursor-pointer">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                              {entry.type}
                            </Badge>
                            <Badge variant="outline">{entry.category}</Badge>
                            {entry.featured && (
                              <Badge variant="default" className="bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors mb-2">
                            {entry.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {entry.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {entry.readTime}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {entry.stickers.map((sticker, idx) => (
                            <span key={idx} className="text-xl group-hover:animate-bounce" style={{animationDelay: `${idx * 100}ms`}}>
                              {sticker}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {entry.content}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {entry.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredEntries.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No entries found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Join the Journey
              </h2>
              <p className="text-muted-foreground mb-8">
                Follow along as I navigate the intersection of data science, business strategy, 
                and personal growth. Subscribe to Journal Lab for weekly updates and insights!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Subscribe to YouTube
                    <PlayCircle className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#contact" className="flex items-center gap-2">
                    Get In Touch
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Journal;