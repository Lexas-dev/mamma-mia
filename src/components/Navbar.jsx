import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold text-white me-4" style={{ textDecoration: 'none' }}>
          Pizzería Mamma Mia!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-info btn-sm text-info border-info fw-bold px-3 py-2">
              🛒 Total: ${formatPrice(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
