import { ExternalLink, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const researches = [
    {
      title: "Predicting Consumer Behavior in Digital Marketplaces: A Machine Learning Approach",
      venue: "International Journal of Business Analytics",
      year: "2023",
      type: "Peer-Reviewed",
      abstract: "This research explores the application of machine learning algorithms to predict consumer purchasing patterns in digital marketplaces. Using a dataset of over 2 million transactions, we developed a novel ensemble model that improved prediction accuracy by 23% compared to existing methods. The study has significant implications for personalized marketing strategies and inventory management in e-commerce platforms.",
      citations: 15,
      status: "Published"
    },
    {
      title: "The Impact of Data Visualization on Decision-Making in Financial Services",
      venue: "Data Science & Business Intelligence Conference",
      year: "2023",
      type: "Conference",
      abstract: "An empirical study examining how different data visualization techniques affect financial decision-making processes. Through controlled experiments with 200 financial analysts, we identified optimal visualization patterns that reduce decision time by 30% while maintaining accuracy. Findings inform best practices for dashboard design in high-stakes financial environments.",
      citations: 8,
      status: "Presented"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Research
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic contributions at the intersection of data science, business strategy, 
            and behavioral economics, with a focus on practical applications in technology companies.
          </p>
        </div>

        {/* Research papers */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {researches.map((research, index) => (
            <Card key={index} className="project-card">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {research.type}
                      </Badge>
                      <Badge variant="outline">
                        {research.year}
                      </Badge>
                      {research.citations > 0 && (
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          <Award className="h-3 w-3 mr-1" />
                          {research.citations} citations
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {research.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <span className="font-medium text-muted-foreground">
                        {research.venue}
                      </span>
                      {" • "}
                      <span className="text-accent font-medium">
                        {research.status}
                      </span>
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {research.abstract}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/research" className="flex items-center gap-2">
              View Full Research Portfolio
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Research;