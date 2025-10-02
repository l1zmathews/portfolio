import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Research from "@/components/Research";
import Journal from "@/components/Journal";
import PostMBA from "@/components/PostMBA";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <Research />
        <Journal />
        <PostMBA />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
