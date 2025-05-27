import React from 'react';
import CropChart from '../Charts/CropChart';
import WeatherWidget from '../Weather/WeatherWidget';
import SoilStatus from '../Soil/SoilStatus';
import Notifications from '../Notification/Notification';
import GuidancePanel from '../Guidance/GuidancePanel';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Farm Dashboard</h1>
      <Notifications />
      <WeatherWidget />
      <CropChart />
      <SoilStatus />
      <GuidancePanel />
    </div>
  );
}

export default Dashboard;