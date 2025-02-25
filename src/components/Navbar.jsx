import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import IconSection from "./IconSection";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/", dropdown: true },
    { name: "Shop", path: "/shop", dropdown: true },
    { name: "Collection", path: "/collection" },
    { name: "Pages", path: "/pages", dropdown: true },
    { name: "Blog", path: "/blog", dropdown: true },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <header className="bg-black shadow-md text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Flone.</div>
          <div className="flex justify-between items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center space-x-1 !text-white hover:text-gray-400">
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                  )}
                </Link>
              ))}
            </nav>
            <IconSection />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
