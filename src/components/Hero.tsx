import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-[80vh] flex items-center text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Democratizing Startup Funding in Africa
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Join the community revolutionizing how African startups raise capital and how local investors participate in their growth.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              className="cta-button bg-secondary text-secondary-foreground"
              onClick={() => document.getElementById("startup-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Raise Capital <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="cta-button bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById("investor-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Investing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;