import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import './LoginPage.css';

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/sign-in', {
        email: email,
        password: password
      });
      const token = response.data.token;
      setAuth({ token });
      console.log("Accept Token");
      navigate('/records');
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

export default Login;
