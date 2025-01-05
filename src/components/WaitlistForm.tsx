import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WaitlistForm = () => {
  return (
    <div className="bg-primary p-12 rounded-lg shadow-lg mx-auto text-center">
      <h3 className="text-3xl font-gelasio mb-6 text-secondary-light">
        Join the Revolution
      </h3>
      <p className="text-secondary-light mb-8 text-lg max-w-2xl mx-auto font-lato">
        Be part of Africa's startup ecosystem transformation. Connect with local investors and startups building the future.
      </p>
      <a 
        href="https://tally.so/r/wkOKa6" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button 
          className="w-full max-w-md bg-secondary hover:bg-secondary/90 text-text-heading text-lg py-6 font-lato"
        >
          Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </a>
      <p className="text-sm text-secondary-light mt-6 max-w-xl mx-auto font-lato">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;
