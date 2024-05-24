import React from 'react';
import '../css/login.css'; // Assurez-vous que ce fichier CSS est correctement référencé

const Login = () => {
  return (
    <div className="login-container">
      <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      <h2>Connectez-vous</h2>
      <form className="login-form">
        <input type="text" placeholder="Nom d'utilisateur" className="login-input" />
        <input type="password" placeholder="Mot de passe" className="login-input" />
        <div className="form-footer">
          <button type="button" className="create-account-btn">Créer un compte</button>
          <button type="submit" className="login-btn">Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
