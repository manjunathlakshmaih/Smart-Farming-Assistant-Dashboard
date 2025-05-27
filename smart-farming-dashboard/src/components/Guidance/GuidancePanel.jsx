import React from 'react';

const GuidancePanel = ({ crop, soilData }) => {
  const getGuidance = () => {
    // Example guidance logic based on crop and soil data
    if (crop === 'corn') {
      return soilData.moisture < 20 ? 'Increase irrigation.' : 'Irrigation levels are adequate.';
    } else if (crop === 'wheat') {
      return soilData.pH < 6 ? 'Consider adding lime to the soil.' : 'Soil pH is optimal.';
    }
    return 'No specific guidance available for this crop.';
  };

  return (
    <div className="guidance-panel">
      <h2>Guidance and Recommendations</h2>
      <p>{getGuidance()}</p>
    </div>
  );
};

export default GuidancePanel;