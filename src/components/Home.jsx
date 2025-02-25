import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import {
  Squares2X2Icon,
  SquaresPlusIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const filteredProducts =
    selectedCategories.size > 0
      ? products.filter((product) => selectedCategories.has(product.category))
      : products;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Categories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        {/* Product Grid */}
        <section className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              {/* Sorting dropdown */}
              <select className="border p-2 rounded-md">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <p>Showing 15 of 144 results</p>
            </div>

            {/* View toggle icons */}
            <div className="flex items-center gap-2">
              <Squares2X2Icon className="w-6 h-6 text-gray-700 cursor-pointer" />
              <SquaresPlusIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
              <ViewColumnsIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading
              ? Array(8)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="h-60 bg-gray-300 animate-pulse rounded-md"></div>
                  ))
              : filteredProducts.map((product) => (
                  <ProductCard
                    title={product.title}
                    key={product.id}
                    image={product.image}
                    price={product.price}
                  />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
