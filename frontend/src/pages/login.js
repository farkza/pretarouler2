import React, { useState } from 'react';
import '../css/login.css';
import logo from '../img/pretarouler-logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const userData = await response.json();
      const { access_token } = userData;

      // Stocker l'access token dans le stockage local
      localStorage.setItem('access_token', access_token);

      // Rediriger l'utilisateur vers "/home"
      window.location.href = `/home`; 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt={logo} className="logo" />
      <h2>Connectez-vous</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          className="login-input" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          className="login-input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {error && <p className="error-message">{error}</p>}
        <div className="form-footer">
          <button type="button" className="create-account-btn">Créer un compte</button>
          <button type="submit" className="login-btn">Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
