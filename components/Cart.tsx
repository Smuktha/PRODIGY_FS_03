// components/Cart.tsx  
"use client";   
import React from "react";   
import { useCart } from "../context/cartContext"; 
       
const Cart: React.FC = () => {     
  const { cart, clearCart } = useCart();      
   
  const handleClearCart = () => {   
    clearCart();   
  };       
     
  return (           
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product.id} className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-semibold">{item.product.name}</h4>
                  <p>₹{item.product.price} x {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearCart}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
