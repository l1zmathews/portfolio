import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('selected-work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Transforming data into strategic insights at{" "}
            <span className="text-accent">Apple</span>, preparing for an{" "}
            <span className="text-accent">MBA</span> to drive product innovation
          </h1>
          
          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Data Analyst passionate about uncovering patterns that shape user experiences 
            and business strategy. Currently preparing for my next chapter in product management and finance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToWork}
              className="btn-hero text-lg px-8 py-3 rounded-full"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-3 rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              asChild
            >
              <a href="#contact" className="flex items-center">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;