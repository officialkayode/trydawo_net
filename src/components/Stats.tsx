import { TrendingUp, Users, Shield, Coins } from "lucide-react";

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Dawo?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We're building Africa's first regulated crowdfunding platform that enables startups to raise funds in local currencies from their communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-card">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Local Currency</h3>
            <p className="text-gray-600">Raise and invest in Naira, eliminating FX risks</p>
          </div>
          <div className="stat-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community First</h3>
            <p className="text-gray-600">Connect startups with local supporters and investors</p>
          </div>
          <div className="stat-card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">SEC Compliant</h3>
            <p className="text-gray-600">Operating within Nigerian regulatory frameworks</p>
          </div>
          <div className="stat-card">
            <Coins className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Inclusive Growth</h3>
            <p className="text-gray-600">Creating a new class of local angel investors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;