import { formatPrice } from '../utils/format';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title fw-light mb-3 text-capitalize">Pizza {name}</h4>

        <hr />

        <div className="text-center py-2">
          <p className="text-muted fs-6 fw-light mb-1">Ingredientes:</p>
          <ul className="list-unstyled mb-0 small">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-capitalize">
                🍕 {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <hr />

        <div className="text-center py-2">
          <h2 className="text-dark pb-3">Precio: ${formatPrice(price)}</h2>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light border">Ver Más 👀</button>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
