import Navigation from "@/components/Navigation";
import { ArrowLeft, ExternalLink, Download, BookOpen, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Research = () => {
  const researches = [
    {
      id: 1,
      title: "Predicting Consumer Behavior in Digital Marketplaces: A Machine Learning Approach",
      venue: "International Journal of Business Analytics",
      year: "2023",
      type: "Peer-Reviewed",
      status: "Published",
      abstract: "This research explores the application of machine learning algorithms to predict consumer purchasing patterns in digital marketplaces. Using a dataset of over 2 million transactions from major e-commerce platforms, we developed a novel ensemble model combining gradient boosting, neural networks, and behavioral pattern recognition. Our approach improved prediction accuracy by 23% compared to existing methods, achieving an F1-score of 0.87 in identifying high-value customers. The study has significant implications for personalized marketing strategies, inventory management, and customer lifetime value optimization in e-commerce platforms.",
      fullAbstract: "The digital marketplace ecosystem has fundamentally transformed consumer behavior, creating complex patterns that traditional analytical methods struggle to capture. This research addresses the critical need for accurate consumer behavior prediction in digital environments by developing an innovative machine learning framework. Our methodology integrates multiple data sources including transaction histories, browsing patterns, demographic information, and temporal purchasing cycles. The ensemble model combines XGBoost for structured data processing, LSTM networks for sequential pattern recognition, and attention mechanisms for feature importance weighting. Through rigorous testing on real-world datasets spanning 18 months of consumer activity, our approach demonstrated superior performance across multiple metrics including precision (0.89), recall (0.85), and AUC-ROC (0.92). The implications extend beyond academic research, providing practical frameworks for businesses to optimize marketing spend, improve customer segmentation, and enhance user experience personalization.",
      citations: 15,
      keywords: ["Machine Learning", "Consumer Behavior", "E-commerce", "Predictive Analytics", "Customer Segmentation"],
      authors: ["Ben Dover", "Dr. Sarah Johnson", "Prof. Michael Chen"],
      doi: "10.1016/j.ijba.2023.100456",
      pages: "45-62",
      coAuthors: 2
    },
    {
      id: 2,
      title: "The Impact of Data Visualization on Decision-Making in Financial Services",
      venue: "Data Science & Business Intelligence Conference",
      year: "2023",
      type: "Conference",
      status: "Presented",
      abstract: "An empirical study examining how different data visualization techniques affect financial decision-making processes. Through controlled experiments with 200 financial analysts across three major investment firms, we identified optimal visualization patterns that reduce decision time by 30% while maintaining accuracy. Our research tested five visualization paradigms: traditional charts, interactive dashboards, 3D representations, augmented reality interfaces, and AI-assisted visual narratives. Key findings include the superiority of interactive dashboards for complex portfolio analysis and the effectiveness of AI-assisted narratives for risk assessment. The study provides evidence-based guidelines for financial technology companies to design more effective analytical tools.",
      fullAbstract: "Financial decision-making increasingly relies on the rapid processing and interpretation of complex datasets. This study investigates how visualization design affects cognitive processing, decision accuracy, and time-to-insight in professional financial contexts. We conducted randomized controlled trials with 200 certified financial analysts from Goldman Sachs, Morgan Stanley, and JP Morgan Chase. Participants analyzed identical datasets using different visualization approaches while we measured decision accuracy, confidence levels, cognitive load, and completion time. Our findings reveal that interactive dashboards with hierarchical drill-down capabilities reduced analysis time by 30% compared to static charts, while maintaining 95% accuracy rates. Surprisingly, 3D visualizations and AR interfaces showed no significant improvement over well-designed 2D interactive charts. AI-assisted visual narratives proved most effective for risk assessment scenarios, improving analyst confidence by 25%. These findings have direct implications for fintech product design and financial software development.",
      citations: 8,
      keywords: ["Data Visualization", "Financial Analytics", "Decision Science", "Human-Computer Interaction", "Cognitive Load"],
      authors: ["Ben Dover", "Dr. Emily Rodriguez", "Prof. David Kim", "Dr. Lisa Wang"],
      doi: "10.1145/dsbi.2023.3456789",
      pages: "128-145",
      coAuthors: 3
    },
    {
      id: 3,
      title: "Ethical AI in Consumer Technology: Privacy-Preserving Analytics at Scale",
      venue: "Journal of AI Ethics and Technology",
      year: "2024",
      type: "Peer-Reviewed",
      status: "Under Review",
      abstract: "This paper addresses the growing tension between personalized user experiences and privacy protection in consumer technology products. Working with Apple's privacy engineering team, we developed a framework for privacy-preserving analytics that maintains statistical utility while protecting individual user privacy. Our approach combines differential privacy, federated learning, and homomorphic encryption to enable insights generation without compromising user data. We demonstrate the framework's effectiveness across three use cases: product recommendation systems, user behavior analytics, and predictive maintenance. Results show that privacy-preserving methods can achieve 85-92% of the utility of traditional approaches while providing mathematical privacy guarantees.",
      fullAbstract: "The modern digital ecosystem faces an unprecedented challenge: delivering personalized, intelligent experiences while respecting user privacy and regulatory requirements. This research presents a comprehensive framework for privacy-preserving analytics that enables meaningful insights generation without exposing individual user data. Our methodology integrates three core privacy technologies: (1) Differential privacy for query result protection, (2) Federated learning for distributed model training, and (3) Homomorphic encryption for computation on encrypted data. We validate this framework through three extensive case studies at Apple, covering recommendation systems serving 1.8B users, behavioral analytics across iOS ecosystem, and predictive maintenance for hardware products. Performance evaluation demonstrates that our privacy-preserving approaches maintain 85-92% statistical utility compared to traditional methods while providing epsilon-differential privacy guarantees with ε < 1. The framework successfully handles real-world scale challenges including network latency, device heterogeneity, and computational constraints. This work contributes both theoretical advances in privacy-preserving computation and practical implementation strategies for large-scale consumer technology platforms.",
      citations: 3,
      keywords: ["Differential Privacy", "Federated Learning", "Ethical AI", "Privacy Engineering", "Consumer Technology"],
      authors: ["Ben Dover", "Dr. Alex Thompson", "Dr. Maya Patel"],
      doi: "pending",
      pages: "pending",
      coAuthors: 2
    },
    {
      id: 4,
      title: "Optimizing Supply Chain Resilience Through Predictive Analytics: A COVID-19 Case Study",
      venue: "International Conference on Operations Research",
      year: "2022",
      type: "Conference",
      status: "Best Paper Award",
      abstract: "This research examines how predictive analytics can enhance supply chain resilience during global disruptions, using Apple's supply chain response to COVID-19 as a primary case study. We developed a multi-tier risk assessment model that combines traditional supply chain metrics with external risk factors including geopolitical events, natural disasters, and pandemic indicators. The model successfully predicted 78% of supply disruptions 4-6 weeks in advance, enabling proactive mitigation strategies. Our framework includes real-time monitoring, scenario planning, and automated response protocols that reduced supply chain disruption impact by 35% compared to reactive approaches.",
      fullAbstract: "Global supply chains face increasing volatility from interconnected risks including pandemics, climate change, geopolitical tensions, and technological disruptions. This research develops a comprehensive predictive analytics framework for supply chain resilience, validated through extensive analysis of Apple's global supply network during the COVID-19 pandemic. Our approach integrates multiple data streams: supplier financial health, geographic risk indicators, transportation network status, inventory levels, and external risk factors. The prediction model employs ensemble methods combining time series forecasting for demand patterns, graph neural networks for supply network analysis, and Monte Carlo simulation for risk propagation modeling. We analyzed 18 months of supply chain data covering 847 tier-1 suppliers and 2,400 tier-2 suppliers across 43 countries. The framework successfully predicted 78% of significant disruptions (>$1M impact) with 4-6 weeks advance notice, achieving precision of 0.82 and recall of 0.75. Implementation of proactive mitigation strategies based on model predictions reduced average disruption impact by 35% and improved recovery time by 42%. This research provides both methodological contributions to supply chain analytics and practical implementation guidance for technology companies managing complex global operations.",
      citations: 22,
      keywords: ["Supply Chain Analytics", "Predictive Modeling", "Risk Management", "COVID-19", "Operations Research"],
      authors: ["Ben Dover", "Prof. Robert Martinez", "Dr. Jennifer Liu", "Dr. Ahmed Hassan"],
      doi: "10.1287/opre.2022.2134",
      pages: "1-18",
      coAuthors: 3
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
                Research Portfolio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Academic contributions bridging data science, business strategy, and technology ethics. 
                Exploring how advanced analytics can solve real-world challenges while maintaining 
                ethical standards and practical applicability.
              </p>

              {/* Research Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">48</div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Co-authors</div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">1</div>
                  <div className="text-sm text-muted-foreground">Best Paper</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {researches.map((research) => (
                <Card key={research.id} className="project-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
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
                        {research.status === "Best Paper Award" && (
                          <Badge variant="default" className="bg-gradient-accent text-white">
                            <Award className="h-3 w-3 mr-1" />
                            Best Paper
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl leading-tight mb-2">
                      {research.title}
                    </CardTitle>
                    
                    <CardDescription className="space-y-2">
                      <div className="font-medium text-muted-foreground">
                        {research.venue}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {research.coAuthors + 1} authors
                        </div>
                        {research.pages !== "pending" && (
                          <div>Pages: {research.pages}</div>
                        )}
                        {research.doi !== "pending" && (
                          <div>DOI: {research.doi}</div>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Abstract */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Abstract</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {research.abstract}
                      </p>
                    </div>
                    
                    {/* Authors */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Authors</h4>
                      <div className="text-sm text-muted-foreground">
                        {research.authors.join(", ")}
                      </div>
                    </div>
                    
                    {/* Keywords */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-1">
                        {research.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="pt-2 border-t border-border">
                      <div className="text-sm font-medium text-accent">
                        Status: {research.status}
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
            <div className="max-w-2xl mx-auto">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Collaborate on Research
              </h2>
              <p className="text-muted-foreground mb-8">
                I'm always interested in collaborating on research projects that bridge 
                technology, business, and social impact. Let's explore how we can contribute 
                to the academic community together.
              </p>
              <Button size="lg" asChild>
                <a href="/#contact" className="flex items-center gap-2">
                  Discuss Research Opportunities
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Research;