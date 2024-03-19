import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

function AppRouter() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/sign-in', {
        email: email,
        password: password
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <label htmlFor="email">メールアドレス</label>
      <input type="text" id="email" name="email" required onChange={e => setEmail(e.target.value)} /><br/>

      <label htmlFor="password">パスワード</label>
      <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} /><br/>

      <input type="submit" value="ログイン" onClick={handleLogin} />
    </div>
  );
}

export default AppRouter;
