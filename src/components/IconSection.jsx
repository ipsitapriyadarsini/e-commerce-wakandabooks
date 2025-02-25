import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import {
  UserCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const IconSection = () => {
  const closeCount = 2;
  const wishlistCount = 5;
  const cartCount = 3;
  return (
    <div className="flex space-x-4">
      <div className="hover:text-gray-400 ">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
      <div className="hover:text-gray-400 ">
        <UserCircleIcon className="w-6 h-6" />
      </div>

      <div className="relative">
        <div className="hover:text-gray-400 ">
          <XMarkIcon className="w-6 h-6" />
        </div>
        {closeCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {closeCount}
          </span>
        )}
      </div>

      <div className="relative">
        <div className="hover:text-gray-400 ">
          <HeartIcon className="w-6 h-6" />
        </div>
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {wishlistCount}
          </span>
        )}
      </div>

      <div className="relative">
        <div className="hover:text-gray-400">
          <ShoppingBagIcon className="w-6 h-6" />
        </div>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default IconSection;
