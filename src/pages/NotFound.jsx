import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5 text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4">Página No Encontrada</h2>
      <p className="text-muted mb-4">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="btn btn-dark btn-lg">
        Volver al Inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;
