import { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
