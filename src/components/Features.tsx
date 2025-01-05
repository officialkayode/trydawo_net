import { Building2, Users2, Wallet, Shield, TrendingUp, DollarSign } from "lucide-react";

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Dawo Works</h2>
          <p className="text-lg text-gray-600">
            We're bridging the gap between local capital and early-stage startups, creating a sustainable funding ecosystem that benefits both founders and investors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Startups</h3>
            <div className="flex gap-4">
              <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Local Currency Fundraising</h4>
                <p className="text-gray-600">Raise your community round in Naira, empowering local innovators to build and grow together.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Community Engagement</h4>
                <p className="text-gray-600">Turn your users and supporters into investors who are invested in your long-term success.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Sustainable Growth</h4>
                <p className="text-gray-600">Build a strong foundation with local support, reducing dependency on foreign capital.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Investors</h3>
            <div className="flex gap-4">
              <Wallet className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Accessible Investment</h4>
                <p className="text-gray-600">Invest in promising African startups with amounts you're comfortable with, starting from ₦50,000.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Protected Investment</h4>
                <p className="text-gray-600">Invest confidently with our SEC-compliant platform and investor protection frameworks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Portfolio Diversification</h4>
                <p className="text-gray-600">Access pre-IPO startup investments just like you trade stocks on Bamboo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;