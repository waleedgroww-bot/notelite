
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-[420px]">

      <Search
        size={23}
        strokeWidth={2}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search notes..."
        className="h-11 w-full min-w-[300px] rounded-xl border border-[#e1e4f0] bg-white pl-14 pr-5 text-base text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
      />
    </div>
  );
};

export default SearchBar;
