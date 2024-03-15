import React from 'react';
import studyImage from './cat_study.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={studyImage} alt="cat_study" />
        <p>学習時間を記録しよう</p>
        <div className='Button-Area'>
          <button type="button">はじめる</button>
          <button type="button" style={{ marginLeft: '10px' }}>ログイン</button>
        </div>
      </header>
    </div>
  );
}

export default App;
