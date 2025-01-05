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
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">
        Join the Revolution
      </h3>
      <p className="text-gray-600 mb-6">
        Be part of Africa's startup ecosystem transformation. Connect with local investors and startups building the future.
      </p>
      <Button 
        onClick={handleJoinWaitlist} 
        className="w-full bg-primary text-white hover:bg-primary/90"
      >
        Join Waitlist
      </Button>
      <p className="text-xs text-gray-500 mt-4">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;