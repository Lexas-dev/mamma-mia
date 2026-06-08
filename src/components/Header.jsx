import headerImage from '../assets/Header.jpg';
const Header = () => {
  return (
    <div
      className="position-relative text-center text-white d-flex align-items-center justify-content-center flex-column shadow-sm"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '30vh',
        padding: '2rem'
      }}
    >
      <div style={{ zIndex: 1 }}>
        <h1 className="display-4 fw-bold text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          ¡Pizzería Mamma Mia!
        </h1>
        <p className="lead fs-5 mb-0" style={{ fontWeight: '300', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
};

export default Header;
