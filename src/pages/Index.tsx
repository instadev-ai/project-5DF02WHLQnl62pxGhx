import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008080] to-[#006666] text-white overflow-x-hidden">
      {/* Top Navigation Bar - Windows 95 Style */}
      <div className="bg-[#c0c0c0] border-b-[1px] border-t-[1px] border-white border-b-black px-4 py-1">
        <div className="container mx-auto flex items-center space-x-4">
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">File</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Edit</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Help</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-5"></div>
        
        <div className="bg-[#c0c0c0] p-8 inline-block rounded-lg border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black relative">
          <div className="bg-[#000080] text-white px-4 py-1 absolute top-0 left-0 right-0 flex items-center">
            <span className="font-['MS_Sans_Serif'] text-sm">BloatPilotKit.exe</span>
            <button className="ml-auto bg-[#c0c0c0] text-black px-2 text-sm font-bold">×</button>
          </div>
          
          <div className="mt-6">
            <h1 className="text-7xl font-['Comic_Sans_MS'] text-black mb-6 animate-pulse">
              BloatPilotKit™
            </h1>
            <p className="text-2xl text-black mb-8 font-['MS_Sans_Serif'] bg-white px-4 py-2 rounded">
              Because Simplicity is Overrated!
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-[#000080] p-6 rounded-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
          <p className="text-2xl font-['MS_Sans_Serif'] animate-bounce">
            Why have 3 packages when you can have 300?
          </p>
        </div>
        
        <div className="mt-12 relative group">
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-8 text-2xl font-bold
                     border-t-2 border-l-2 border-pink-300 border-b-2 border-r-2 border-red-900
                     transform hover:scale-105 transition-transform duration-200
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]
                     relative z-10"
            onClick={() => alert("Error 404: Common Sense Not Found\n\nRequired dependencies not found:\n- Your Soul\n- Weekend Plans\n- Social Life\n- Mental Stability")}
          >
            INSTALL NOW (15GB)*
          </Button>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        </div>
        <p className="text-xs mt-4 opacity-70 font-['MS_Sans_Serif'] bg-black p-2 rounded">
          *Minimum requirements: 64GB RAM, Quantum Computer, Time Machine, Soul of a Developer
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#c0c0c0] p-1 mb-12 inline-block rounded border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black">
          <h2 className="text-4xl font-['Comic_Sans_MS'] text-black px-8 py-2">
            Enterprise-Grade Features
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Package Per Function™",
              desc: "Because maintaining one package isn't hard enough. Each function gets its own repo, CI/CD pipeline, and dedicated support team."
            },
            {
              title: "SemVer is for Losers",
              desc: "Our versions follow the Ancient Mayan Calendar. Current version: v0.35.241-beta-rc2-alpha-preview-nightly-unstable"
            },
            {
              title: "AI-Powered Docs",
              desc: "So intelligent, they're unreadable. Written by AI, for AI. Humans need not understand."
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black relative group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-[#000080] text-white px-2 py-1 absolute top-0 left-0 right-0 flex items-center">
                <span className="font-['MS_Sans_Serif'] text-sm">feature.exe</span>
              </div>
              <div className="p-6 mt-6">
                <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-black font-['MS_Sans_Serif']">
                  {feature.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 my-16">
        <div className="bg-[#000080] p-8 rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <h2 className="text-4xl font-['Comic_Sans_MS'] text-center mb-4">
            What Developers Say*
          </h2>
          <p className="text-xs text-center mb-8 font-['MS_Sans_Serif']">*While crying</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I tried installing it. My package.json is now a novel.",
                author: "Senior Developer at BigTech™"
              },
              {
                quote: "I just wanted a simple button, now I have 200 dependencies.",
                author: "Full Stack Developer, probably"
              },
              {
                quote: "Finally, a framework that makes NPM itself cry.",
                author: "DevOps Engineer (former)"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#c0c0c0] p-6 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black hover:transform hover:scale-105 transition-transform duration-200">
                <p className="text-black italic mb-4 font-['MS_Sans_Serif']">
                  "{testimonial.quote}"
                </p>
                <p className="text-black font-bold font-['MS_Sans_Serif']">- {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#c0c0c0] p-1 mb-12 inline-block rounded border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black">
          <h2 className="text-4xl font-['Comic_Sans_MS'] text-black px-8 py-2">
            The Numbers Don't Lie
          </h2>
        </div>

        <div className="bg-[#c0c0c0] p-4 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black">
          <Table className="bg-white text-black">
            <TableHeader>
              <TableRow className="bg-[#000080] text-white">
                <TableHead className="font-['MS_Sans_Serif']">Feature</TableHead>
                <TableHead className="font-['MS_Sans_Serif']">BloatPilotKit</TableHead>
                <TableHead className="font-['MS_Sans_Serif']">Normal Dev Tools</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-[#efefef]">
                <TableCell className="font-['MS_Sans_Serif']">Package Count</TableCell>
                <TableCell className="font-['MS_Sans_Serif'] text-red-600">🔥 342</TableCell>
                <TableCell className="font-['MS_Sans_Serif']">4</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#efefef]">
                <TableCell className="font-['MS_Sans_Serif']">Versioning</TableCell>
                <TableCell className="font-['MS_Sans_Serif'] text-purple-600">🤡 v0.35.241-beta-rc2-alpha</TableCell>
                <TableCell className="font-['MS_Sans_Serif']">📌 v1.2.3</TableCell>
              </TableRow>
              <TableRow className="hover:bg-[#efefef]">
                <TableCell className="font-['MS_Sans_Serif']">Installation Time</TableCell>
                <TableCell className="font-['MS_Sans_Serif'] text-blue-600">💀 Eternal</TableCell>
                <TableCell className="font-['MS_Sans_Serif']">⏳ 5 sec</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-8 text-center border-t-4 border-[#c0c0c0]">
        <div className="container mx-auto px-4">
          <p className="text-sm font-['MS_Sans_Serif']">
            © 2024 BloatPilotKit™ - Making Simple Things Complex Since Yesterday
          </p>
          <p className="text-xs mt-2 opacity-70 font-['MS_Sans_Serif']">
            * No developers were harmed in the making of this framework (physically)
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button className="bg-[#c0c0c0] text-black hover:bg-[#a0a0a0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black">
              Report Bug
            </Button>
            <Button className="bg-[#c0c0c0] text-black hover:bg-[#a0a0a0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black">
              Request Feature
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;