import { createContext, ReactNode, useContext, useState } from 'react';

type CartProps = {
  children: ReactNode;
};

type ListContext = {
  getItemQuantity: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  deleteItem: (id: number) => void;
  totalCartAmount: () => number;
  toggleModal: () => void;
  cartItems: CartItem[];
  openModal: boolean;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as ListContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  function toggleModal() {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }

  function getItemQuantity(id: number) {
    const searchedItem = cartItems.find((element) => element.id === id);
    if (searchedItem) {
      return searchedItem.quantity;
    }
    return 0;
  }

  function addItem(id: number) {
    const searchedItem = cartItems.find((element) => element.id === id);
    setCartItems((items) => {
      if (!searchedItem) {
        return [...items, { id, quantity: 1 }];
      }
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decreaseItem(id: number) {
    const searchedItem = cartItems.find((element) => element.id === id);
    setCartItems((items) => {
      if (searchedItem && searchedItem.quantity === 1) {
        return items.filter((item) => item.id !== id);
      }
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  function deleteItem(id: number) {
    const searchedItem = cartItems.find((element) => element.id === id);
    setCartItems((items) => {
      if (searchedItem) {
        return items.filter((item) => item.id !== id);
      }
      return items;
    });
  }

  function totalCartAmount() {
    const amount = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return amount;
  }

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        getItemQuantity,
        cartItems,
        addItem,
        decreaseItem,
        deleteItem,
        totalCartAmount,
        toggleModal,
        openModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
