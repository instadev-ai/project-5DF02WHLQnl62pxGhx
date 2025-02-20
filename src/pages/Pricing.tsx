import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008080] to-[#006666]">
      {/* Windows 95 Style Header */}
      <div className="bg-[#c0c0c0] border-b-[1px] border-t-[1px] border-white border-b-black px-4 py-1">
        <div className="container mx-auto flex items-center">
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">File</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Edit</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Help</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Window */}
        <div className="bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-8 p-4">
          <h1 className="text-4xl font-bold text-black font-['Comic_Sans_MS'] text-center mb-2">
            Choose Your Bloat Level
          </h1>
          <p className="text-black font-['MS_Sans_Serif'] text-center">
            Warning: All plans require a quantum computer and parallel universe access
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Trial */}
          <Card className="bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-0">
            <div className="bg-[#000080] text-white p-2 font-['MS_Sans_Serif']">
              Free Trial.exe
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">$0/month</h3>
              <ul className="space-y-3 text-black font-['MS_Sans_Serif']">
                <li>✨ Only 50 dependencies</li>
                <li>🐌 5-hour npm install</li>
                <li>📚 Documentation in emoji only</li>
                <li>🐦 Support via carrier pigeon</li>
              </ul>
              <Button className="w-full mt-6 bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a0a0a0] text-black font-['MS_Sans_Serif']">
                Download Pain.exe
              </Button>
            </div>
          </Card>

          {/* Enterprise Chaos */}
          <Card className="bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-0 transform scale-105">
            <div className="bg-[#000080] text-white p-2 font-['MS_Sans_Serif']">
              Enterprise_Chaos.exe
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">$9,999/month</h3>
              <div className="bg-red-500 text-white px-2 py-1 rounded mb-4 text-sm inline-block">
                MOST POPULAR MISTAKE
              </div>
              <ul className="space-y-3 text-black font-['MS_Sans_Serif']">
                <li>🎮 150 dependencies per function</li>
                <li>⏰ Time-travel debugging (may cause paradoxes)</li>
                <li>🤖 AI-powered confusion</li>
                <li>📱 Quantum error messages</li>
              </ul>
              <Button className="w-full mt-6 bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a0a0a0] text-black font-['MS_Sans_Serif']">
                Upgrade to Chaos
              </Button>
            </div>
          </Card>

          {/* Ultimate Bloat */}
          <Card className="bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-0">
            <div className="bg-[#000080] text-white p-2 font-['MS_Sans_Serif']">
              Ultimate_Bloat.exe
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">$99,999/month</h3>
              <ul className="space-y-3 text-black font-['MS_Sans_Serif']">
                <li>🌟 Infinite dependencies</li>
                <li>⛓️ Blockchain-powered npm install</li>
                <li>📜 Documentation in hieroglyphics</li>
                <li>🎮 Runtime written in COBOL</li>
              </ul>
              <Button className="w-full mt-6 bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a0a0a0] text-black font-['MS_Sans_Serif']">
                Sacrifice Soul Here
              </Button>
            </div>
          </Card>
        </div>

        {/* Fine Print */}
        <div className="mt-12 bg-[#c0c0c0] border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-4">
          <p className="text-xs text-black font-['MS_Sans_Serif']">
            * All plans require signing away your firstborn, a quantum computer, and access to at least 3 parallel universes.
            By clicking any button, you agree to our terms of confusion and privacy invasion policy. No refunds, only regrets.
            Version numbers are determined by rolling dice and consulting ancient prophecies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;