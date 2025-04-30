import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"  // Set image height and ensure it covers the area
      />

      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>

        {/* Product Price and Add to Cart Button */}
        <div className="mt-auto flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
