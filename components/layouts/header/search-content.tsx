import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"
const SearchContent = () => {
  return (
    <div className="relative">
      <Input placeholder="Search" />
      <Search className="w-4 h-4 text-default-700 absolute top-1/2 -translate-y-1/2 right-2" />
    </div>
  );
};

export default SearchContent;