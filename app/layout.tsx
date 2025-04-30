"use client";
import { CartProvider } from "../context/cartContext"; // Import CartProvider
import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
