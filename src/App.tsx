import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import studyImage from './cat_study.png';
import './App.css';
import Login from './pages/Login/LoginPage';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <img src={studyImage} alt="cat_study" />
              <p>学習時間を記録しよう</p>
              <div className='Button-Area'>
                <button type="button">はじめる</button>
                <button type="button" style={{ marginLeft: '10px' }} onClick={handleLoginClick}>
                  ログイン
                </button>
              </div>
            </header>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
