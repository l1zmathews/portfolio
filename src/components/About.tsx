import { User, MapPin, Coffee, Code, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const traits = [
    {
      icon: Code,
      title: "Tech Enthusiast",
      description: "Passionate about how technology shapes user experiences and business outcomes"
    },
    {
      icon: BookOpen,
      title: "Lifelong Learner", 
      description: "Currently preparing for CAT exam while mastering new data science techniques"
    },
    {
      icon: Coffee,
      title: "Coffee Connoisseur",
      description: "Best ideas come over a perfectly brewed cup – preferably with data visualizations nearby"
    },
    {
      icon: Heart,
      title: "Story Seeker",
      description: "Believes every dataset has a story to tell and every problem has a creative solution"
    }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                About Me
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio text */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Hi! I'm Liz, a data analyst at Apple where I spend my days uncovering insights 
                  that help shape product decisions for millions of users worldwide. My journey in 
                  data science began with a simple question: "What story is this data trying to tell?"
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm preparing for my CAT exam as I work toward my next chapter – 
                  pursuing an MBA to bridge my technical background with business strategy. 
                  My goal is to transition into product management or finance, where I can leverage 
                  both analytical rigor and strategic thinking.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not diving deep into datasets or studying for business school, 
                  you'll find me sharing my thoughts on my "Journal Lab" YouTube channel, 
                  collecting interesting stickers (yes, really!), and exploring how technology 
                  can solve real-world problems.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Cupertino, CA • Open to relocation for the right opportunity</span>
              </div>
            </div>

            {/* Personality traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <Card key={index} className="project-card">
                    <CardContent className="p-4 text-center">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {trait.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {trait.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;