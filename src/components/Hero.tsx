import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-[90vh] flex items-center text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Communities into Angel Investors
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Dawo is creating Africa's first regulated crowdfunding platform that connects local startups with community investors. Invest in naira, grow with your community.
          </p>
          <p className="text-lg mb-8 opacity-80">
            We're democratizing tech investment in Africa by enabling startups to raise funds from their communities and turning everyday Africans into angel investors. Join us in building a sustainable funding ecosystem for African innovation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              className="cta-button bg-secondary text-secondary-foreground"
              onClick={() => document.getElementById("startup-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Raise Local Capital <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="cta-button bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById("investor-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Become an Angel Investor <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;