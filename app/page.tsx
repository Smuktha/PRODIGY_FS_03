"use client";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useCart } from "../context/cartContext";
import Link from "next/link"; // Import Link from Next.js for navigation
import './styles/globals.css';  
export default function Home() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
      <ProductList />

      {/* Cart icon or link */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <p>Items in cart: {cart.length}</p>

        {/* Cart Component - Show it here or link to a separate cart page */}
        <Cart />

        {/* Link to Checkout Page */}
        {cart.length > 0 && (
          <div className="mt-4">
            <Link href="/checkout">
              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Go to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
