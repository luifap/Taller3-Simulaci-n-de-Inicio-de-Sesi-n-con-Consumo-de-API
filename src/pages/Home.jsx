import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

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
    <div className="container">
        <h2>Bienvenido a la Página Principal</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        <button onClick={handleGoToResults}>Ver Resultados</button> 
    </div>
  );
};

export default Home;