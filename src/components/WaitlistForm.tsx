import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["investor", "startup"], {
    required_error: "Please select a role",
  }),
});

const WaitlistForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "investor",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon with more information about early access.",
    });
    form.reset();
  };

  return (
    <div className="bg-primary p-12 rounded-lg shadow-lg mx-auto">
      <h3 className="text-3xl font-gelasio mb-6 text-secondary-light">
        Join the Revolution
      </h3>
      <p className="text-secondary-light mb-8 text-lg max-w-2xl mx-auto font-lato">
        Be part of Africa's startup ecosystem transformation. Connect with local investors and startups building the future.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-light">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-light">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-light">I am a</FormLabel>
                <FormControl>
                  <select 
                    {...field} 
                    className="w-full p-2 rounded-md bg-white border border-input"
                  >
                    <option value="investor">Potential Investor</option>
                    <option value="startup">Startup Founder</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-text-heading text-lg py-6 font-lato"
          >
            Join Waitlist
          </Button>
        </form>
      </Form>

      <p className="text-sm text-secondary-light mt-6 max-w-xl mx-auto font-lato">
        By joining, you agree to receive updates about Dawo. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default WaitlistForm;