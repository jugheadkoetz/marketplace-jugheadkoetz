'use client'

import { ProductType } from "@/types/products";
import { useState, useContext, createContext, SetStateAction, ReactNode } from "react";

interface Product extends ProductType {}

interface CartContextData {
  cart: Product[];
  open: boolean;
  setCart: React.Dispatch<SetStateAction<Product[]>>;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ cart, setCart, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
