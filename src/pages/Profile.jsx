import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { token, logout, getProfile } = useContext(UserContext);
  const [profileEmail, setProfileEmail] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await getProfile();
      if (data && data.email) {
        setProfileEmail(data.email);
      }
    };
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  return (
    <div className="container my-5 text-center" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Perfil de Usuario</h2>
      <p className="text-muted mb-4">Email: <strong>{profileEmail || 'Cargando...'}</strong></p>
      <button className="btn btn-danger w-100" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
