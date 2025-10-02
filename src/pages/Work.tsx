import Navigation from "@/components/Navigation";
import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Consumer Behavior Analysis Dashboard",
      description: "Built comprehensive analytics platform tracking user engagement patterns across Apple's ecosystem, resulting in 15% improvement in product recommendations. The dashboard processes over 10M daily user interactions and provides real-time insights to product teams.",
      longDescription: "This project involved creating a full-stack analytics solution that ingests massive amounts of user interaction data from Apple's various products and services. Using advanced machine learning algorithms, we identified key behavioral patterns that helped improve our recommendation engine accuracy by 15%. The system includes real-time data processing, interactive visualizations, and automated reporting capabilities.",
      technologies: ["Snowflake", "Tableau", "Python", "SQL", "Apache Airflow", "Docker"],
      status: "Featured Project",
      impact: "15% improvement in recommendations",
      metrics: {
        "Daily Active Users": "10M+",
        "Data Points Processed": "1B+",
        "Performance Improvement": "15%",
        "Team Size": "5 analysts"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Revenue Optimization Model",
      description: "Developed machine learning model to predict customer lifetime value and optimize pricing strategies for App Store subscriptions, generating over $2M in additional annual revenue.",
      longDescription: "Created a sophisticated ML pipeline that analyzes customer behavior patterns, subscription usage data, and market dynamics to predict CLV and optimize pricing. The model uses ensemble methods combining gradient boosting and neural networks to achieve 92% accuracy in CLV prediction.",
      technologies: ["DBT", "Python", "TensorFlow", "BigQuery", "Kubernetes", "MLflow"],
      status: "Live in Production",
      impact: "$2M+ annual revenue impact",
      metrics: {
        "Model Accuracy": "92%",
        "Revenue Impact": "$2.1M",
        "Customers Analyzed": "50M+",
        "Prediction Speed": "<100ms"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Supply Chain Analytics",
      description: "Created real-time monitoring system for global supply chain operations, reducing inventory costs by 12% through advanced demand forecasting and optimization algorithms.",
      longDescription: "Designed and implemented a comprehensive supply chain monitoring system that provides real-time visibility into global operations. The system includes demand forecasting models, inventory optimization algorithms, and risk assessment tools that help reduce costs while maintaining service levels.",
      technologies: ["Snowflake", "Airflow", "R", "Looker", "Apache Kafka", "Spark"],
      status: "Award Winner",
      impact: "12% cost reduction",
      metrics: {
        "Cost Savings": "$5.2M",
        "Forecast Accuracy": "89%",
        "Suppliers Monitored": "500+",
        "Real-time Updates": "24/7"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Customer Segmentation Engine",
      description: "Designed advanced clustering algorithms to identify high-value customer segments, enabling targeted marketing campaigns with 25% higher conversion rates.",
      longDescription: "Built a sophisticated customer segmentation system using unsupervised learning techniques to identify distinct customer personas. The system automatically updates segments based on behavioral changes and provides actionable insights for marketing teams.",
      technologies: ["Python", "Scikit-learn", "Tableau", "AWS", "Redis", "PostgreSQL"],
      status: "Research Project",
      impact: "25% higher conversion",
      metrics: {
        "Segments Identified": "12",
        "Conversion Improvement": "25%",
        "Customers Analyzed": "25M+",
        "Update Frequency": "Daily"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Fraud Detection System",
      description: "Implemented real-time fraud detection system using ensemble machine learning methods, reducing fraudulent transactions by 40% while maintaining user experience.",
      longDescription: "Developed a production-grade fraud detection system that processes millions of transactions daily. The system uses advanced feature engineering, ensemble learning, and real-time scoring to identify potentially fraudulent activities with minimal false positives.",
      technologies: ["Python", "XGBoost", "Apache Kafka", "Redis", "MongoDB", "Docker"],
      status: "Production",
      impact: "40% fraud reduction",
      metrics: {
        "False Positive Rate": "0.1%",
        "Detection Speed": "<50ms",
        "Transactions Monitored": "100M+/day",
        "Fraud Reduction": "40%"
      },
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "A/B Testing Platform",
      description: "Built comprehensive A/B testing platform enabling data-driven product decisions across multiple teams, facilitating over 200 experiments annually.",
      longDescription: "Created a self-service A/B testing platform that enables product teams to design, run, and analyze experiments efficiently. The platform includes statistical power analysis, automatic result interpretation, and integration with existing analytics tools.",
      technologies: ["Python", "React", "PostgreSQL", "Statsmodels", "Docker", "Kubernetes"],
      status: "Platform",
      impact: "200+ experiments/year",
      metrics: {
        "Active Experiments": "50+",
        "Teams Using Platform": "15",
        "Statistical Power": "0.8",
        "Experiment Duration": "2-4 weeks"
      },
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

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
              
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Work Portfolio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive collection of data analysis projects showcasing technical expertise, 
                business impact, and innovative problem-solving across various domains at Apple.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                <Card key={project.id} className="project-card h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-accent/10 text-accent border-accent/20"
                      >
                        {project.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="bg-muted/50 rounded p-2">
                            <div className="font-medium text-muted-foreground">{key}</div>
                            <div className="text-foreground">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className="pt-2 border-t border-border">
                      <div className="text-sm font-medium text-accent">
                        Impact: {project.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on challenging data problems that create real business value. 
              Let's discuss how we can leverage data to drive your next breakthrough.
            </p>
            <Button size="lg" asChild>
              <a href="/#contact" className="flex items-center gap-2">
                Get In Touch
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;