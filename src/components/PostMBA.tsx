import { TrendingUp, Target, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PostMBA = () => {
  const aspirations = [
    {
      icon: TrendingUp,
      title: "Tech Stock Pitch: AR/VR Market Analysis",
      description: "Deep dive into the augmented and virtual reality market landscape, analyzing Apple's positioning and competitive advantages in the emerging spatial computing space.",
      type: "Investment Thesis",
      status: "In Progress",
      tags: ["Equity Research", "Tech Analysis", "Market Sizing"]
    },
    {
      icon: Target,
      title: "Case Competition Winner: McKinsey Forward",
      description: "Led team to first place in McKinsey's business strategy competition, developing go-to-market strategy for fintech startup entering Southeast Asian markets.",
      type: "Competition",
      status: "Completed",
      tags: ["Strategy", "Fintech", "Go-to-Market"]
    },
    {
      icon: FileText,
      title: "Market Thesis: Sustainable Technology Investment",
      description: "Comprehensive analysis of ESG investing trends in technology sector, with focus on clean energy infrastructure and carbon-neutral data centers.",
      type: "Research Paper",
      status: "Published",
      tags: ["ESG", "CleanTech", "Investment Strategy"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Post-MBA Aspirations
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preparing for a career in finance and product strategy after my MBA. 
            Showcasing analytical frameworks, investment research, and strategic thinking 
            that bridges technology and business.
          </p>
        </div>

        {/* Career path highlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">
                From Data Analyst to Finance Leader
              </CardTitle>
              <CardDescription className="text-base">
                Leveraging quantitative skills and tech industry insights to drive investment decisions 
                and product strategy in financial services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Current</div>
                  <div className="text-sm text-muted-foreground">Data Analyst at Apple</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">Next</div>
                  <div className="text-sm text-muted-foreground">MBA Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Future</div>
                  <div className="text-sm text-muted-foreground">Finance & Product Strategy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Aspirations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aspirations.map((aspiration, index) => {
            const Icon = aspiration.icon;
            return (
              <Card key={index} className="project-card group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={aspiration.status === "Completed" ? "default" : "secondary"}
                      className={aspiration.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {aspiration.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {aspiration.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-accent font-medium">
                    {aspiration.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {aspiration.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {aspiration.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future goals */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Ready to make an impact in finance and technology
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Seeking opportunities to apply data-driven insights in investment banking, 
            private equity, or product strategy roles at the intersection of finance and technology.
          </p>
          <Button size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              Let's Connect
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostMBA;