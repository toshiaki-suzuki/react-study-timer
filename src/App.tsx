import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import studyImage from './cat_study.png';
import Login from './pages/Login/LoginPage';
import AuthProvider from './contexts/authContext';

import './App.css';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
