import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item) => {
    // Use the item's id for accurate removal
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};