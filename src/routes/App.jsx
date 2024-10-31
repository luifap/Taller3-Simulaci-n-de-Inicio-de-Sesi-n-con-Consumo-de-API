import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ApiResults from '../pages/ApiResults';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from '../components/Navbar';
import { Navigate } from 'react-router-dom'; // Importa Navigate

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <ApiResults />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/register" />} /> {/* Redirige a registro */}
        <Route path="*" element={<div>Página no encontrada - 404</div>} />
      </Routes>
    </Router>
  );
};

export default App;
