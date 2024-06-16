import React, { useState, useEffect } from 'react';
import '../css/home.css';
import logo from '../img/pretarouler-logo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection
import Car from '../components/Car';
import FAQ from '../components/FAQ';

function Home() {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cars/664e2e2a23a8e0dcdc3e567f');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCar(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, []);

  useEffect(() => {
    const userIsLoggedIn = true; // Example: user is logged in
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  useEffect(() => {
    updateActiveNavLink();
  }, []);

  const updateActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const handleLogout = () => {
    // Ajouter ici la logique de déconnexion, par exemple supprimer le token JWT ou vider le localStorage
    // Après la déconnexion, rediriger l'utilisateur vers la page de connexion
    navigate('/login'); // Redirection vers la page de connexion après déconnexion
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="Home">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home" className="active">Accueil</a></li>
            <li><a href="#catalogue">Catalogue</a></li>
            <li><a href="#about">À propos</a></li>
          </ul>
        </nav>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>Se déconnecter</button>
        ) : (
          <Link to="/login">
            <button className="login-button">Se connecter</button>
          </Link>
        )}
      </header>
      <main className="car-details">
        <div className="main-container">
          <div className="car-container">
            <h1>{car.model}</h1>
            <div className="car-img">
              <img src={`http://localhost:8000${car.img}`} alt={`${car.brand} ${car.model}`} />
            </div>
          </div>
        </div>
        <div className="car-info">
          <div className="car-info-item">
            <span className="car-info-value">{car.horsepower}</span>
            <span className="car-info-title">Chevaux</span>
          </div>
          <div className="car-info-separator"></div>
          <div className="car-info-item">
            <span className="car-info-value">{car.acceleration_0_100}s</span>
            <span className="car-info-title">0-100 km/h</span>
          </div>
          <div className="car-info-separator"></div>
          <div className="car-info-item">
            <span className="car-info-value">{car.autonomy} km</span>
            <span className="car-info-title">Autonomie</span>
          </div>
          <div className="car-info-separator"></div>
          <div className="car-info-item">
            <span className="car-info-value">{car.fuel_type}</span>
            <span className="car-info-title">Type d'essence</span>
          </div>
          <div className="reserve-container">
            <button className="reserve-button">Réserver</button>
          </div>
        </div>
      </main>
      <section className="most-rented">
        <h2 className="most-rented-title">Les plus louées</h2>
        <h3 className="most-rented-subtitle">Réserve ta voiture dès maintenant !</h3>
        <Car />
      </section>
      <section className="most-rented">
        <h2 className="most-rented-title">Proche de chez vous</h2>
        <h3 className="most-rented-subtitle">Loue une voiture à côté de chez toi</h3>
        <Car />
      </section>
      <section className="advertisement">
        <h1 className="bottom-section-title">Conduit la tienne aujourd’hui</h1>
        <h2 className="bottom-section-subtitle">Visite dès maintenant notre catalogue de véhicule et réserve la voiture de tes rêves !</h2>
        <button className="bottom-section-button">Réservez maintenant</button>
      </section>
      <section className="faq-section-wrapper">
        <FAQ />
      </section>
      <footer>
        <p>&copy; 2024 Pret A Rouler</p>
      </footer>
    </div>
  );
}

export default Home;
