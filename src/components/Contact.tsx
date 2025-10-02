import { Mail, MessageCircle, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                Let's Connect
              </h2>
            </div>
            <p className="text-muted-foreground">
              Whether you're a recruiter, MBA admissions committee member, or fellow data enthusiast, 
              I'd love to hear from you. Let's discuss opportunities, insights, or just share stories 
              about the fascinating world of data and business strategy.
            </p>
          </div>

          {/* Contact card */}
          <Card className="project-card">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primary contact */}
              <div className="flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="btn-hero text-lg px-8 py-4"
                  asChild
                >
                  <a href="mailto:lizmathews2023@cs.ajce.in" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    lizmathews2023@cs.ajce.in
                  </a>
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-muted-foreground text-sm">or find me on</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* Social links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="justify-start gap-3 h-12"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/liz-mathews-76814023a/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-60" />
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="justify-start gap-3 h-12"
                  asChild
                >
                  <a href="https://github.com/l1zmathews" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span>GitHub Projects</span>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-60" />
                  </a>
                </Button>
              </div>

              {/* Call to action text */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Actively seeking opportunities</span> for MBA programs 
                  and post-graduation roles in finance, product management, or data strategy.
                </p>
                <p className="text-xs text-muted-foreground">
                  Available for informational interviews, case study discussions, 
                  and collaboration on interesting projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;