import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import Manifesto from "@/components/Manifesto";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vision />
      <Stats />
      <Features />
      <Manifesto />
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-lg text-gray-600">
              Whether you're a startup looking to raise capital or an investor wanting to support local innovation, be part of Africa's tech revolution with Dawo.
            </p>
          </div>
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