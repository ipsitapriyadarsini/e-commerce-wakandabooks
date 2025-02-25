import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export const Categories = ({ selectedCategories, setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(category)) {
        newSelected.delete(category);
      } else {
        newSelected.add(category);
      }
      return newSelected;
    });
  };

  const clearSelection = () => {
    setSelectedCategories(new Set());
  };

  return (
    <aside className="md:col-span-1 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Search</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full p-2 border rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="text-lg font-semibold mb-4">Categories</h2>

      <ul className="space-y-2">
        {categories
          .filter((category) =>
            category.toLowerCase().includes(search.toLowerCase())
          )
          .map((category, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                // eslint-disable-next-line react/prop-types
                checked={selectedCategories.has(category)}
                onChange={() => toggleCategory(category)}
              />
              {category}
            </li>
          ))}
      </ul>
      <button
        className="text-blue-500 cursor-pointer mt-2"
        onClick={clearSelection}>
        Clear
      </button>
    </aside>
  );
};
