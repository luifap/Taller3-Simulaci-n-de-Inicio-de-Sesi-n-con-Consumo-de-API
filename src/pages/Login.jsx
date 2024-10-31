import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../routes/authSlice'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username && credentials.password) {
      dispatch(login());
      navigate('/results'); 
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Usuario" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;