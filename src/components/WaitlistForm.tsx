import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const WaitlistForm = () => {
  const { toast } = useToast();

  const handleJoinWaitlist = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon with more information about early access.",
    });
  };

  return (
    <div className="bg-primary p-12 rounded-lg shadow-lg mx-auto text-center">
      <h3 className="text-3xl font-gelasio mb-6 text-text-heading">
        Join the Revolution
      </h3>
      <p className="text-text-body mb-8 text-lg max-w-2xl mx-auto font-lato">
        Be part of Africa's startup ecosystem transformation. Connect with local investors and startups building the future.
      </p>
      <Button 
        onClick={handleJoinWaitlist} 
        className="w-full max-w-md bg-secondary hover:bg-secondary/90 text-text-heading text-lg py-6 font-lato"
      >
        Join Waitlist
      </Button>
      <p className="text-sm text-text-body mt-6 max-w-xl mx-auto font-lato">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;