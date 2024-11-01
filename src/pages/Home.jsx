import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../routes/authSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css'; 

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleGoToResults = () => {
    navigate('/results'); 
  };

  return (
    <div className="home-container">
      <h2 className="welcome-message">Bienvenido a la Página Principal</h2>
      <p className="description">
        Aquí puedes explorar las películas más populares y encontrar información detallada sobre ellas.
      </p>
      <div className="button-container">
        <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
        <button className="results-button" onClick={handleGoToResults}>Peliculas populares</button>
      </div>
      <div className="additional-info">
        <h3>¿Qué puedes hacer?</h3>
        <ul>
          <li>Consultar las películas más populares.</li>
          <li>Buscar detalles sobre tus películas favoritas.</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Home;