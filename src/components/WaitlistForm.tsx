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
    <div className="bg-white p-12 rounded-lg shadow-lg mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">
        Join the Revolution
      </h3>
      <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
        Be part of Africa's startup ecosystem transformation. Connect with local investors and startups building the future.
      </p>
      <Button 
        onClick={handleJoinWaitlist} 
        className="w-full max-w-md bg-primary text-white hover:bg-primary/90 text-lg py-6"
      >
        Join Waitlist
      </Button>
      <p className="text-sm text-gray-500 mt-6 max-w-xl mx-auto">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;