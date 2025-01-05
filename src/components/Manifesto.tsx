import { Lightbulb, Target, Shield } from "lucide-react";

const Manifesto = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Manifesto</h2>
          <p className="text-lg text-gray-600 mb-8">
            This is more than a platform—it's a movement to transform how Africa builds, funds, and scales its future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Bring Tech Investment to Everyone</h3>
              <p className="text-gray-600">
                Breaking barriers to make investing in African startups accessible to anyone. We're turning everyday Africans into owners and drivers of our tech future.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Champion African Solutions</h3>
              <p className="text-gray-600">
                Local problems need local solutions. By focusing on raising funds in our own currencies, we're building a tech ecosystem that reflects Africa's strength and resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;