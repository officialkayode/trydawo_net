import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface WaitlistFormProps {
  type: "investor" | "startup";
}

const WaitlistForm = ({ type }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon with more information about early access.",
    });
    setEmail("");
  };

  return (
    <div id={`${type}-form`} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">
        {type === "investor" 
          ? "Become an Angel Investor" 
          : "Raise Community Capital"}
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        {type === "investor"
          ? "Join a new class of African angel investors. Start investing in local startups with as little as ₦50,000."
          : "Connect with local investors who believe in your vision. Raise funds in Naira from your community."}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
          Join Waitlist
        </Button>
      </form>
      <p className="text-xs text-gray-500 mt-4 text-center">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;