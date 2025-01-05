import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import Manifesto from "@/components/Manifesto";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Features />
        <Stats />
        <Vision />
        <section id="manifesto" className="section bg-gray-50">
          <Manifesto />
        </section>
        <section className="section bg-gray-50" id="waitlist">
          <div className="container max-w-4xl mx-auto px-4">
            <WaitlistForm />
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dawo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;