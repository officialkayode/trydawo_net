import { TrendingUp, Users, Shield, DollarSign } from "lucide-react";

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Dawo Matters
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We're building a sustainable funding ecosystem that connects African startups with local capital, enabling communities to participate in and benefit from startup growth while reducing dependency on foreign investment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-card">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Local Currency</h3>
            <p className="text-gray-600">Raise and invest in Naira, eliminating FX risks and currency volatility</p>
          </div>
          <div className="stat-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community First</h3>
            <p className="text-gray-600">Enable communities to participate in and benefit from startup growth</p>
          </div>
          <div className="stat-card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fully Regulated</h3>
            <p className="text-gray-600">Operating within Nigeria's Startup Act and SEC crowdfunding frameworks</p>
          </div>
          <div className="stat-card">
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Accessible</h3>
            <p className="text-gray-600">Making startup investment as easy as stock trading for everyday Africans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;