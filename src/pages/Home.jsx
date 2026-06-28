import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
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