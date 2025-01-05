import { TrendingUp, Users, Shield, DollarSign } from "lucide-react";

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Dawo Matters
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We're building Africa's first community-driven investment platform that connects startups with local investors, enabling collective participation in funding rounds while fostering stronger connections between founders and their communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-card">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community Rounds</h3>
            <p className="text-gray-600">Enabling startups to raise funds directly from their community of users and supporters</p>
          </div>
          <div className="stat-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Collective Power</h3>
            <p className="text-gray-600">Bringing together local investors to pool resources and support promising ventures</p>
          </div>
          <div className="stat-card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Secure Investment</h3>
            <p className="text-gray-600">Protected by Nigeria's Startup Act and SEC crowdfunding frameworks</p>
          </div>
          <div className="stat-card">
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Inclusive Access</h3>
            <p className="text-gray-600">Making startup investment accessible to everyday Africans starting from ₦50,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;