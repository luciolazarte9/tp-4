import React, { useState, useEffect } from 'react';

const Punto3 = () => {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const fetchAge = async () => {
      try {
        const response = await fetch('https://api.agify.io/?name=Lucio');
        const data = await response.json();
        setAge(data.age);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAge();
  }, []);

  return (
    <div>
      <h1>Edad propuesta: {age}</h1>
    </div>
  );
};

export default Punto3;
