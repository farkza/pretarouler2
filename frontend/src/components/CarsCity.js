import React, { useEffect, useState } from 'react';

const CarsCity = ({ accessToken }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchUserCity = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/get_user_by_token/${accessToken}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
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
        const response = await fetch(`http://localhost:8000/api/cars`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredCars = data.filter(car => car.city === city && car.id !== '664e2e2a23a8e0dcdc3e567f'); // Exclude car with specific ID
        setCars(filteredCars);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (city) {
      fetchCars();
    }
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {cars.map((car, index) => (
        <div className="car-card" key={index}>
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
    </div>
  );
}

export default CarsCity;
