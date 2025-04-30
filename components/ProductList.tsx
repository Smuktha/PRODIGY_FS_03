"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/cartContext";
import { Product } from "../types/product";
import { products } from "../data/products";

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
