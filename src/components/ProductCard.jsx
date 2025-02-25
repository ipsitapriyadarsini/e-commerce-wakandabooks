/* eslint-disable react/prop-types */
export const ProductCard = ({
  title,
  image,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  return (
    <div className="text-center relative">
      {discount && (
        <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-md">
          -{discount}%
        </span>
      )}
      <div className="bg-gray-200 p-4 rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-contain mb-2"
        />
      </div>
      <h2 className="text-gray-800 font-semibold text-sm mt-2">{title}</h2>
      <div className="flex justify-center my-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
      <div className="text-gray-600 text-sm">
        <span className="text-black font-bold">€{price}</span>
        {originalPrice && (
          <span className="ml-2 line-through text-gray-400">
            €{originalPrice}
          </span>
        )}
      </div>
    </div>
  );
};
