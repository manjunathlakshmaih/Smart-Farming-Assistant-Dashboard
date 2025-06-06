// import React from 'react';
// import './content.css';

import React from 'react';
import WheatImg from '../../assets/Content-images/wheat.jpg';
import whitecotton from '../../assets/Content-images/white-cotton.jpg';
import pexelstodd from '../../assets/Content-images/pexels-todd.jpg';
import rice from '../../assets/Content-images/rice.jpg';
import sugarcane from '../../assets/Content-images/sugarcane.jpg';

const cropData = {
  crops: [
    {
      name: "Wheat",
      image_url: WheatImg,
      type: "Rabi",
      description: "Wheat is a cereal grain...",
      climate: "Cool, dry climate",
      soil_type: "Loamy soil",
      growing_season: "Nov to Apr",
      harvest_time: "120–150 days"
    },
    {
      name: "Rice",
      image_url: rice,
      type: "Kharif",
      description: "Rice is a staple food...",
      climate: "Hot, humid",
      soil_type: "Clayey loam",
      growing_season: "Jun to Nov",
      harvest_time: "100–180 days"
    },
    {
      name: "Cotton",
      image_url: whitecotton,
      type: "Kharif",
      description: "Cotton is a fiber crop used in the textile industry, growing best in warm climates.",
      climate: "Warm climate with low humidity",
      soil_type: "Black soil or alluvial soil",
      growing_season: "June to November",
      harvest_time: "150–180 days"
    },
    {
      name: "Maize",
      image_url: pexelstodd,
      type: "Kharif",
      description: "Maize, or corn, is used for food, fodder, and industrial purposes including ethanol production.",
      climate: "Warm and sunny climate",
      soil_type: "Well-drained loamy soil",
      growing_season: "June to September",
      harvest_time: "90–120 days"
    },
    {
      name: "Sugarcane",
      image_url: sugarcane,
      type: "Annual",
      description: "Sugarcane is a tropical grass cultivated for its juice from which sugar is processed.",
      climate: "Hot and humid with high water requirements",
      soil_type: "Deep, rich loam soil",
      growing_season: "October to March (planting)",
      harvest_time: "10–18 months"
    }
    // Add more crops...
  ]
};

const CropCard = ({ crop }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: 10, padding: 20, margin: 10, width: 300 }}>
    <img src={crop.image_url} alt={crop.name} style={{ width: '100%', borderRadius: 8 }} />
    <h2>{crop.name}</h2>
    <p><strong>Type:</strong> {crop.type}</p>
    <p><strong>Description:</strong> {crop.description}</p>
    <p><strong>Climate:</strong> {crop.climate}</p>
    <p><strong>Soil:</strong> {crop.soil_type}</p>
    <p><strong>Season:</strong> {crop.growing_season}</p>
    <p><strong>Harvest:</strong> {crop.harvest_time}</p>
  </div>
);

const CropList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cropData.crops.map((crop, index) => (
        <CropCard crop={crop} key={index} />
      ))}
    </div>
  );
};

export default CropList;
