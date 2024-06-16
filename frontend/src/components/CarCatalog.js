import React, { useState } from 'react';
import '../css/car.css';

const CarCatalog = ({ cars, selectedLocation, selectedBrand }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Filtrer les voitures en fonction de la localisation et de la marque sélectionnées
  let filteredCars = cars;

  if (selectedLocation && selectedLocation !== "") {
    filteredCars = filteredCars.filter(car => car.city === selectedLocation);
  }

  if (selectedBrand && selectedBrand !== "") {
    filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
  }

  filteredCars = filteredCars.filter(car => car.id !== '664e2e2a23a8e0dcdc3e567f');

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

export default CarCatalog;
