import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Company Name */}
      <h1 className="text-xl font-bold text-gray-800">TrendHive</h1>
      
      {/* Search Input */}
      <div className="w-1/3">
        <Input type="text" placeholder="Search products..." className="w-full border-gray-300" />
      </div>
      
      {/* Icons */}
      <div className="flex items-center gap-4">
        <Button variant="ghost">
          <Heart className="w-6 h-6 text-gray-600" />
        </Button>
        <Button variant="ghost">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </Button>
      </div>
    </nav>
  );
}
