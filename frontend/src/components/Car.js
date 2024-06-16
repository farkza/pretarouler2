import React, { useEffect, useState } from 'react';
import '../css/car.css';

const Car = ({ accessToken, selectedLocation, selectedBrand, sortOrder }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchUserCity = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(`http://localhost:8000/api/get_user_by_token/${accessToken}`);
        if (!response.ok) {
          throw new Error('Error fetching user city');
        }
        const userData = await response.json();
        setCity(userData.city);
      } catch (error) {
        setError(error);
      }
    };

    fetchUserCity();
  }, [accessToken]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cars');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let filteredCars = cars;

  // Filter cars by user's city if accessToken is provided
  if (accessToken && city) {
    filteredCars = filteredCars.filter(car => car.city === city);
  }

  // Filter cars by selectedLocation
  if (selectedLocation && selectedLocation !== "") {
    filteredCars = filteredCars.filter(car => car.city === selectedLocation);
  }

  // Filter cars by selectedBrand
  if (selectedBrand && selectedBrand !== "") {
    filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
  }

  // Exclude specific car by ID
  filteredCars = filteredCars.filter(car => car.id !== '664e2e2a23a8e0dcdc3e567f');

  // Inverser l'ordre des voitures si l'ordre est "newest"
  if (sortOrder === "newest" && selectedLocation === "" && selectedBrand === "") {
    filteredCars = filteredCars.reverse();
  }

  const handleCardClick = (car) => {
    setSelectedCar(car);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedCar(null);
  };

  return (
    <div>
      {filteredCars.map((car, index) => (
        <div className="car-card" key={index} onClick={() => handleCardClick(car)}>
          <div className="car-card-details">
            <h3>{car.model}</h3>
            <h4>{car.brand}</h4>
            <img src={`http://localhost:8000${car.img}`} alt={`${car.brand} ${car.model}`} />
            <p>
              <span>{car.price_per_day}€</span><span>/jour</span>
            </p>
          </div>
        </div>
      ))}
      {isPopupVisible && selectedCar && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-left">
              <div className="popup-image-container">
                <img src={`http://localhost:8000${selectedCar.img}`} alt={`${selectedCar.brand} ${selectedCar.model}`} />
              </div>
              <p>Autres photos à venir</p>
            </div>
            <div className="popup-right">
              <h3>{selectedCar.model}</h3>
              <h4>{selectedCar.brand}</h4>
              <p><strong>Horsepower:</strong> {selectedCar.horsepower}</p>
              <p><strong>Autonomy:</strong> {selectedCar.autonomy}</p>
              <p><strong>Acceleration (0-100):</strong> {selectedCar.acceleration_0_100}s</p>
              <p><strong>GPS:</strong> {selectedCar.GPS ? 'Yes' : 'No'}</p>
              <p><strong>Air Conditioning:</strong> {selectedCar.air_conditioning ? 'Yes' : 'No'}</p>
              <p><strong>Fuel Consumption:</strong> {selectedCar.fuel_consumption}L/100km</p>
              <p><strong>Fuel Type:</strong> {selectedCar.fuel_type}</p>
              <p><strong>City:</strong> {selectedCar.city}</p>
              <p><strong>Price per day:</strong> {selectedCar.price_per_day}€</p>
              <button className="reserve-button">Réserver</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
