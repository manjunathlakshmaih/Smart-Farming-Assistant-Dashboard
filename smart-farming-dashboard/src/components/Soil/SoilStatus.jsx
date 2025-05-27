import React, { useState } from 'react';

const SoilStatus = () => {
  const [moisture, setMoisture] = useState(0);
  const [ph, setPh] = useState(7);
  const [fertility, setFertility] = useState(5);

  const handleMoistureChange = (e) => {
    setMoisture(e.target.value);
  };

  const handlePhChange = (e) => {
    setPh(e.target.value);
  };

  const handleFertilityChange = (e) => {
    setFertility(e.target.value);
  };

  return (
    <div>
      <h2>Soil Health Status</h2>
      <div>
        <label>
          Moisture (%):
          <input type="number" value={moisture} onChange={handleMoistureChange} />
        </label>
      </div>
      <div>
        <label>
          pH Level:
          <input type="number" step="0.1" value={ph} onChange={handlePhChange} />
        </label>
      </div>
      <div>
        <label>
          Fertility Rating (1-10):
          <input type="number" min="1" max="10" value={fertility} onChange={handleFertilityChange} />
        </label>
      </div>
      <div>
        <h3>Current Soil Status:</h3>
        <p>Moisture: {moisture}%</p>
        <p>pH Level: {ph}</p>
        <p>Fertility Rating: {fertility}</p>
      </div>
    </div>
  );
};

export default SoilStatus;