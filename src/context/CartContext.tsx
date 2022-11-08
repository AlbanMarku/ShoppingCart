import { createContext, useContext } from 'react';

export type CartItem = {
  price: number;
  name: string;
  id: number;
};

type CartItemsStateContent = {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
};

export const CartItemsContext = createContext<CartItemsStateContent>({
  cartItems: [
    {
      price: 0,
      name: '',
      id: 0,
    },
  ],
  setCartItems: () => {},
});

export const useCartItemsContext = () => useContext(CartItemsContext);
