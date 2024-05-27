import React, { useEffect, useState } from 'react';

const Car = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Filtrer les voitures pour exclure celle avec l'ID spécifique
  const filteredCars = cars.filter(car => car.id !== '664e2e2a23a8e0dcdc3e567f');

  return (
    <div>
      {filteredCars.map((car, index) => (
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

export default Car;
