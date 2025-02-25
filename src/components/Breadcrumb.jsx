import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="bg-gray-100 py-4 flex justify-center">
      <nav className="text-gray-600 text-sm">
        <Link to="/" className="text-blue-900 font-extrabold">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-black">Shop</span>
      </nav>
    </div>
  );
}
