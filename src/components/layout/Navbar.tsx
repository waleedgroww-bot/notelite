
import { assets } from "../../assets/assets";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">

        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="NoteLite Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        <button
          type="button"
          aria-label="Toggle theme"
          title="Dark mode coming soon"
          disabled
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 opacity-80 transition-colors hover:bg-gray-100"
        >
          <Moon size={20} strokeWidth={1.8} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;