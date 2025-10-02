import { useState } from "react";
import { ExternalLink, Grid, List, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SelectedWork = () => {
  const [viewMode, setViewMode] = useState<'reel' | 'grid'>('reel');

  const projects = [
    {
      id: 1,
      title: "Consumer Behavior Analysis Dashboard",
      description: "Built comprehensive analytics platform tracking user engagement patterns across Apple's ecosystem, resulting in 15% improvement in product recommendations.",
      technologies: ["Snowflake", "Tableau", "Python", "SQL"],
      status: "Featured Project",
      impact: "15% improvement in recommendations"
    },
    {
      id: 2,
      title: "Revenue Optimization Model",
      description: "Developed machine learning model to predict customer lifetime value and optimize pricing strategies for App Store subscriptions.",
      technologies: ["DBT", "Python", "TensorFlow", "BigQuery"],
      status: "Live in Production",
      impact: "$2M+ annual revenue impact"
    },
    {
      id: 3,
      title: "Supply Chain Analytics",
      description: "Created real-time monitoring system for global supply chain operations, reducing inventory costs by 12% through demand forecasting.",
      technologies: ["Snowflake", "Airflow", "R", "Looker"],
      status: "Award Winner",
      impact: "12% cost reduction"
    },
    {
      id: 4,
      title: "Customer Segmentation Engine",
      description: "Designed advanced clustering algorithms to identify high-value customer segments, enabling targeted marketing campaigns with 25% higher conversion rates.",
      technologies: ["Python", "Scikit-learn", "Tableau", "AWS"],
      status: "Research Project",
      impact: "25% higher conversion"
    }
  ];

  return (
    <section id="selected-work" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Highlighting key data analysis projects that drove measurable business impact 
              at Apple and demonstrate technical excellence across the analytics stack.
            </p>
          </div>
          
          {/* View toggle */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <Button
              variant={viewMode === 'reel' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('reel')}
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              Reel
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-2"
            >
              <Grid className="h-4 w-4" />
              Grid
            </Button>
          </div>
        </div>

        {/* Projects display */}
        {viewMode === 'reel' ? (
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scroll-elegant pb-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-none w-80 project-card"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-xs font-medium text-accent">
                      Impact: {project.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="project-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm font-medium text-accent">
                    Impact: {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View all work CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/work" className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;