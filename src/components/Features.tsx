import { Building2, Users2, Wallet, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Dawo Works</h2>
          <p className="text-lg text-gray-600">
            We're making startup investment as accessible as stock trading, enabling everyday Africans to participate in the growth of innovative startups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Startups</h3>
            <div className="flex gap-4">
              <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Local Currency Fundraising</h4>
                <p className="text-gray-600">Raise funds in Naira from your community and supporters, reducing FX exposure.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Community Engagement</h4>
                <p className="text-gray-600">Turn your users and supporters into investors who are invested in your success.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Investors</h3>
            <div className="flex gap-4">
              <Wallet className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Accessible Investment</h4>
                <p className="text-gray-600">Invest in promising African startups with amounts you're comfortable with.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Protected Investment</h4>
                <p className="text-gray-600">Invest confidently with our SEC-compliant platform and investor protection frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;