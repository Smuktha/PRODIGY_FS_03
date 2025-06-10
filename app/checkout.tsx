"use client";      
import { useCart } from "../context/cartContext";
import Link from "next/link";

const Checkout: React.FC = () => { 
  const { cart } = useCart();

  // Calculate total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to the cart to proceed.</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <ul className="mt-4">
            {cart.map((item) => (
              <li key={item.product.id} className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p>{item.quantity} x ₹{item.product.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ₹{total}</h3>
          </div>

          {/* Checkout button */}
          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {/* Back to Home Link */}
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
