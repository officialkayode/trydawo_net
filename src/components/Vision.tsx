import { Rocket, Globe, Users, TrendingUp } from "lucide-react";

const Vision = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600">
            We envision an Africa where startups thrive with support from their communities, scaling solutions that address local challenges and having a seat at solving global challenges. Tech investment should not be the privilege of a few but a collective opportunity for many.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Rocket className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Empowering Startups</h3>
            <p className="text-gray-600">
              Creating an environment where startups can easily raise funds from their communities and scale their solutions.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Engaging Communities</h3>
            <p className="text-gray-600">
              Offering communities the opportunity to invest in the continent's brightest ideas and share in their success.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Driving Economic Impact</h3>
            <p className="text-gray-600">
              Leveraging diaspora investment to boost local economies, fund infrastructure, and create lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;