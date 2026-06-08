import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import { formatPrice } from '../utils/format';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Incrementar la cantidad de una pizza
  const increaseCount = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  // Decrementar la cantidad de una pizza (eliminar si llega a 0)
  const decreaseCount = (id) => {
    const pizzaToDecrease = cart.find((pizza) => pizza.id === id);
    if (pizzaToDecrease && pizzaToDecrease.count === 1) {
      // Usar filter para eliminar la pizza del estado
      const filteredCart = cart.filter((pizza) => pizza.id !== id);
      setCart(filteredCart);
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

  // Calcular el total
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Detalles del pedido:</h3>
      
      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3">
              {/* Lado izquierdo: Imagen pequeña y Nombre capitalizado */}
              <div className="d-flex align-items-center gap-3">
                <img 
                  src={pizza.img} 
                  alt={pizza.name} 
                  className="rounded"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <span className="text-capitalize fw-bold">{pizza.name}</span>
              </div>

              {/* Lado derecho: Precio, botón -, cantidad, botón + */}
              <div className="d-flex align-items-center gap-2">
                <span className="me-2">${formatPrice(pizza.price)}</span>
                <button 
                  className="btn btn-outline-danger btn-sm" 
                  onClick={() => decreaseCount(pizza.id)}
                >
                  -
                </button>
                <span className="fw-semibold px-1">{pizza.count}</span>
                <button 
                  className="btn btn-outline-primary btn-sm" 
                  onClick={() => increaseCount(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h3 className="my-4">Total: ${formatPrice(total)}</h3>
          <button className="btn btn-dark">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
