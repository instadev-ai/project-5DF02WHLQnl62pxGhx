import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#008080] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center border-b-8 border-[#c0c0c0]">
        <div className="bg-[#c0c0c0] p-4 inline-block rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
          <h1 className="text-6xl font-['Comic_Sans_MS'] text-black mb-6">
            BloatPilotKit™
          </h1>
          <p className="text-2xl text-black mb-8 font-['MS_Sans_Serif']">
            Because Simplicity is Overrated!
          </p>
        </div>
        
        <p className="text-xl mt-8 font-['MS_Sans_Serif']">
          Why have 3 packages when you can have 300?
        </p>
        
        <Button 
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl font-bold rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]"
          onClick={() => alert("Error 404: Common Sense Not Found")}
        >
          INSTALL NOW (15GB)*
        </Button>
        <p className="text-xs mt-2 opacity-70">*Minimum requirements: 64GB RAM, Quantum Computer, Time Machine</p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-['Comic_Sans_MS'] text-center mb-12">
          Enterprise-Grade Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#c0c0c0] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">
              Package Per Function™
            </h3>
            <p className="text-black">
              Because maintaining one package isn't hard enough. Each function gets its own repo, CI/CD pipeline, and dedicated support team.
            </p>
          </Card>

          <Card className="bg-[#c0c0c0] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">
              SemVer is for Losers
            </h3>
            <p className="text-black">
              Our versions follow the Ancient Mayan Calendar. Current version: v0.35.241-beta-rc2-alpha-preview-nightly-unstable
            </p>
          </Card>

          <Card className="bg-[#c0c0c0] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <h3 className="text-2xl font-['Comic_Sans_MS'] text-black mb-4">
              AI-Powered Docs
            </h3>
            <p className="text-black">
              So intelligent, they're unreadable. Written by AI, for AI. Humans need not understand.
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-[#000080] my-16">
        <h2 className="text-4xl font-['Comic_Sans_MS'] text-center mb-12">
          What Developers Say*
        </h2>
        <p className="text-xs text-center mb-8">*While crying</p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#c0c0c0] p-6">
            <p className="text-black italic mb-4">
              "I tried installing it. My package.json is now a novel."
            </p>
            <p className="text-black font-bold">- Senior Developer at BigTech™</p>
          </Card>

          <Card className="bg-[#c0c0c0] p-6">
            <p className="text-black italic mb-4">
              "I just wanted a simple button, now I have 200 dependencies."
            </p>
            <p className="text-black font-bold">- Full Stack Developer, probably</p>
          </Card>

          <Card className="bg-[#c0c0c0] p-6">
            <p className="text-black italic mb-4">
              "Finally, a framework that makes NPM itself cry."
            </p>
            <p className="text-black font-bold">- DevOps Engineer (former)</p>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-['Comic_Sans_MS'] text-center mb-12">
          The Numbers Don't Lie
        </h2>

        <Table className="bg-[#c0c0c0] text-black">
          <TableHeader>
            <TableRow>
              <TableHead className="font-['Comic_Sans_MS']">Feature</TableHead>
              <TableHead className="font-['Comic_Sans_MS']">BloatPilotKit</TableHead>
              <TableHead className="font-['Comic_Sans_MS']">Normal Dev Tools</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Package Count</TableCell>
              <TableCell>🔥 342</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Versioning</TableCell>
              <TableCell>🤡 v0.35.241-beta-rc2-alpha</TableCell>
              <TableCell>📌 v1.2.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Installation Time</TableCell>
              <TableCell>💀 Eternal</TableCell>
              <TableCell>⏳ 5 sec</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-8 text-center">
        <p className="text-sm">
          © 2024 BloatPilotKit™ - Making Simple Things Complex Since Yesterday
        </p>
        <p className="text-xs mt-2 opacity-70">
          * No developers were harmed in the making of this framework (physically)
        </p>
      </footer>
    </div>
  );
};

export default Index;