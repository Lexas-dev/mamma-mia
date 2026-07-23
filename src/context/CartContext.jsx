import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaExists = cart.find((item) => item.id === pizza.id);
    if (pizzaExists) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((pizza) => pizza.id !== id);
    setCart(updatedCart);
  };

  const increaseCount = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const decreaseCount = (id) => {
    const pizzaToDecrease = cart.find((pizza) => pizza.id === id);
    if (pizzaToDecrease && pizzaToDecrease.count === 1) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      });
      setCart(updatedCart);
    }
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseCount,
        decreaseCount,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
