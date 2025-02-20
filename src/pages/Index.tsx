import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008080] to-[#006666] text-white">
      {/* Windows 95 Style Header */}
      <div className="bg-[#c0c0c0] border-b-[1px] border-t-[1px] border-white border-b-black px-4 py-1">
        <div className="container mx-auto flex items-center">
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">File</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Edit</span>
          <span className="text-black font-['MS_Sans_Serif'] cursor-pointer hover:bg-[#000080] hover:text-white px-2">Help</span>
          <Link 
            to="/pricing" 
            className="ml-auto text-black font-['MS_Sans_Serif'] px-4 py-1
                     bg-[#c0c0c0] border-t-[1px] border-l-[1px] border-white 
                     border-b-[1px] border-r-[1px] border-black
                     hover:bg-[#000080] hover:text-white"
          >
            Pricing.exe
          </Link>
        </div>
      </div>

      {/* Rest of the Index page content remains the same */}
      {/* ... */}
    </div>
  );
};

export default Index;