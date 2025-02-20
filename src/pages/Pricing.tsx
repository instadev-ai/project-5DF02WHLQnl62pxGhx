import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Free Trial",
      price: "$0",
      description: "Perfect for masochists",
      features: [
        "1 function per month",
        "Errors in Sanskrit",
        "Documentation written in emoji",
        "Support via carrier pigeon",
        "2MB of storage (shared with all users)",
      ],
      limitations: [
        "No refunds (of your time)",
        "Random package deletions",
        "Logs in binary only",
        "Maximum 3 dependencies",
      ],
      buttonText: "Start Suffering",
      style: "bg-[#c0c0c0]",
      recommended: false
    },
    {
      name: "Enterprise Chaos™",
      price: "$9,999",
      description: "Our most popular mistake",
      features: [
        "Unlimited functions (each in its own repo)",
        "24/7 AI-powered confusion",
        "Priority bug creation",
        "Custom error messages in hieroglyphics",
        "Dedicated dependency inflation team",
        "Weekly breaking changes",
        "Blockchain-powered npm install",
        "Your own datacenter (required)",
      ],
      limitations: [],
      buttonText: "Embrace Chaos",
      style: "bg-gradient-to-b from-[#000080] to-[#000060]",
      recommended: true
    },
    {
      name: "Ultimate Bloat™",
      price: "$99,999",
      description: "For serious complexity enthusiasts",
      features: [
        "Everything in Enterprise Chaos™",
        "Quantum computing requirements",
        "Time-travel debugging (may affect timeline)",
        "AI that writes more AI",
        "Your code in the blockchain",
        "Dedicated team of confusion engineers",
        "Monthly architecture redesigns",
        "Legacy code generator",
      ],
      limitations: [],
      buttonText: "Mortgage Your Company",
      style: "bg-[#c0c0c0]",
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008080] to-[#006666] text-white overflow-x-hidden">
      {/* Windows 95 Style Header */}
      <div className="bg-[#c0c0c0] border-b-[1px] border-t-[1px] border-white border-b-black px-4 py-1">
        <div className="container mx-auto flex items-center space-x-4">
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">File</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Edit</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Help</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-[#c0c0c0] p-8 inline-block rounded-lg border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black relative">
          <div className="bg-[#000080] text-white px-4 py-1 absolute top-0 left-0 right-0 flex items-center">
            <span className="font-['MS_Sans_Serif'] text-sm">PRICING.EXE</span>
            <button className="ml-auto bg-[#c0c0c0] text-black px-2 text-sm font-bold">×</button>
          </div>
          <div className="mt-6">
            <h1 className="text-6xl font-['Comic_Sans_MS'] text-black mb-4">
              Investment Tiers
            </h1>
            <p className="text-xl text-black font-['MS_Sans_Serif']">
              Choose Your Path to Complexity
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`${tier.style} border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black relative group
                         transform hover:scale-105 transition-transform duration-200
                         ${tier.recommended ? 'md:scale-105' : ''}`}
            >
              {/* Windows 95 Title Bar */}
              <div className="bg-[#000080] text-white px-4 py-1 absolute top-0 left-0 right-0 flex items-center">
                <span className="font-['MS_Sans_Serif'] text-sm">{tier.name}.exe</span>
                {tier.recommended && (
                  <span className="ml-2 bg-yellow-400 text-black text-xs px-2 rounded">RECOMMENDED</span>
                )}
              </div>

              <div className="p-6 mt-8">
                <div className="text-center mb-6">
                  <h3 className={`text-3xl font-['Comic_Sans_MS'] ${tier.style.includes('000080') ? 'text-white' : 'text-black'} mb-2`}>
                    {tier.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${tier.style.includes('000080') ? 'text-white' : 'text-black'}`}>
                    {tier.price}
                  </div>
                  <p className={`text-sm ${tier.style.includes('000080') ? 'text-gray-300' : 'text-gray-700'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${tier.style.includes('000080') ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={`font-['MS_Sans_Serif'] ${tier.style.includes('000080') ? 'text-white' : 'text-black'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {tier.limitations.map((limitation, i) => (
                    <div key={i} className="flex items-center opacity-75">
                      <X className={`h-5 w-5 mr-2 ${tier.style.includes('000080') ? 'text-red-400' : 'text-red-600'}`} />
                      <span className={`font-['MS_Sans_Serif'] ${tier.style.includes('000080') ? 'text-white' : 'text-black'}`}>
                        {limitation}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full mt-6 ${
                    tier.style.includes('000080')
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-[#000080] hover:bg-[#000060] text-white'
                  } border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black`}
                  onClick={() => alert(`Error 418: I'm a teapot\n\nYour soul is not compatible with this tier.\nPlease upgrade your existence to continue.`)}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Fine Print */}
        <div className="mt-12 text-center">
          <div className="bg-black p-4 rounded-lg inline-block">
            <p className="text-xs font-['MS_Sans_Serif'] mb-2">
              * All prices exclude your sanity, weekend plans, and will to live
            </p>
            <p className="text-xs font-['MS_Sans_Serif'] mb-2">
              ** Time travel debugging may cause grandfather paradoxes
            </p>
            <p className="text-xs font-['MS_Sans_Serif']">
              *** Quantum computing requirements may need parallel universe resources
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-8 text-center border-t-4 border-[#c0c0c0]">
        <div className="container mx-auto px-4">
          <p className="text-sm font-['MS_Sans_Serif']">
            © 2024 BloatPilotKit™ - Where Your Budget Goes to Die
          </p>
          <p className="text-xs mt-2 opacity-70 font-['MS_Sans_Serif']">
            All prices subject to change based on lunar phases and cosmic radiation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;