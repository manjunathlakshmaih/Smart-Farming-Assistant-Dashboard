import React from 'react';
import CropChart from '../components/Charts/CropChart';
import WeatherWidget from '../components/Weather/WeatherWidget';
import SoilStatus from '../components/Soil/SoilStatus';
import Notifications from '../components/Notification/Notification';
import GuidancePanel from '../components/Guidance/GuidancePanel';

function Home() {
  return (
    <div>
      <h1>Smart Farming Dashboard</h1>
      <Notifications />
      <WeatherWidget />
      <CropChart />
      <SoilStatus />
      <GuidancePanel />
    </div>
  );
}

export default Home;