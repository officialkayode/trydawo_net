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
      description: "We'll be in touch soon with more information.",
    });
    setEmail("");
  };

  return (
    <div id={`${type}-form`} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">
        {type === "investor" ? "Join as an Investor" : "Get Funding for Your Startup"}
      </h3>
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
    </div>
  );
};

export default WaitlistForm;