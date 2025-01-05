import { TrendingUp, Users, Shield } from "lucide-react";

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The African Startup Funding Landscape
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-card">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">$2.41B</h3>
            <p className="text-gray-600">Total African Startup Funding in 2023</p>
          </div>
          <div className="stat-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">90.9%</h3>
            <p className="text-gray-600">Funded Ventures with Local Co-founders</p>
          </div>
          <div className="stat-card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">SEC Compliant</h3>
            <p className="text-gray-600">Operating within Nigerian Regulatory Framework</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;