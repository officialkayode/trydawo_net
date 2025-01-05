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
      <main className="pt-16"> {/* Add padding to account for fixed navigation */}
        <Hero />
        <section id="problem" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">The Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Access to Capital</h3>
                <p className="text-gray-600">Early-stage startups in Africa face significant challenges in accessing capital, particularly in local currencies.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Limited Community Involvement</h3>
                <p className="text-gray-600">Traditional investment models exclude local communities from participating in and benefiting from startup growth.</p>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Stats />
        <Vision />
        <Manifesto />
        <section className="section bg-gray-50" id="waitlist">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <WaitlistForm type="startup" />
              <WaitlistForm type="investor" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dawo</h3>
              <p className="text-gray-400">Empowering African startups through community investment.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#twitter" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dawo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;