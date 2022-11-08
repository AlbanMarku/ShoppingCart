import { createContext, useContext } from 'react';

export type CartItem = {
  id: number;
  name: string;
};

type CartItemsStateContent = {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
};

export const CartItemsContext = createContext<CartItemsStateContent>({
  cartItems: [
    {
      id: 0,
      name: '',
    },
  ],
  setCartItems: () => {},
});

export const useCartItemsContext = () => useContext(CartItemsContext);
