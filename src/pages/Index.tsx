import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <WaitlistForm type="startup" />
            <WaitlistForm type="investor" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;