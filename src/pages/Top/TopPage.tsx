import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import studyImage from '../../cat_study.png';

import './TopPage.css';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="App">
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
      <Outlet />
    </div>
  );
}

export default App;
