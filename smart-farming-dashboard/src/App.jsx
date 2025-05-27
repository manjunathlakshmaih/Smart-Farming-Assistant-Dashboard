import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './components/DashBoard/Dashboard';
import Notifications from './components/Notification/Notification';
import WeatherWidget from './components/Weather/WeatherWidget';
import SoilStatus from './components/Soil/SoilStatus';
import GuidancePanel from './components/Guidance/GuidancePanel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/weather" element={<WeatherWidget />} />
          <Route path="/soil" element={<SoilStatus />} />
          <Route path="/guidance" element={<GuidancePanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;