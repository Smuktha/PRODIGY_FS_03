// types/cartItem.ts
import { Product } from "./product";  // Assuming you already have a Product type

export interface CartItem {
  product: Product;
  quantity: number;
}
