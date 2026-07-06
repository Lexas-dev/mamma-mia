import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const getPizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error fetching pizza details:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, [id]);

  if (!pizza.id) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden mb-3" style={{ maxWidth: '850px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={pizza.img}
              className="img-fluid h-100 w-100 object-fit-cover"
              alt={pizza.name}
              style={{ minHeight: '350px' }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div className="card-body p-4">
              <h2 className="card-title fw-bold text-capitalize text-dark mb-3">
                Pizza {pizza.name}
              </h2>
              <p className="card-text text-muted mb-4 fs-6 lh-base">
                {pizza.desc}
              </p>

              <div className="mb-4">
                <h6 className="text-secondary fw-semibold mb-2">Ingredientes:</h6>
                <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                  {pizza.ingredients?.map((ingredient, index) => (
                    <li key={index} className="badge bg-light text-dark border py-2 px-3 text-capitalize rounded-pill">
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-footer bg-white border-top-0 p-4 pt-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small d-block">Precio actual:</span>
                  <span className="fs-3 fw-bold text-danger">
                    ${formatPrice(pizza.price)}
                  </span>
                </div>
                <button className="btn btn-dark btn-lg px-4 py-2 shadow-sm rounded-pill hover-zoom" onClick={() => addToCart(pizza)}>
                  Añadir al Carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
