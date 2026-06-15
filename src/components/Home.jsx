import { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
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
    <>
      <Header />

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;