import { formatPrice } from '../utils/format';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-white me-4" style={{ cursor: 'pointer' }}>
          Pizzería Mamma Mia!
        </span>
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
              <button className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                🍕 Home
              </button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔓 Profile
                  </button>
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
                  <button className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm text-white border-secondary px-3 py-2">
                    🔐 Register
                  </button>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-info btn-sm text-info border-info fw-bold px-3 py-2">
              🛒 Total: ${formatPrice(total)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
