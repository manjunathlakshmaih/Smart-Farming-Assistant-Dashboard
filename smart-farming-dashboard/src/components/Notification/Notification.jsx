import React from 'react';

const Notifications = ({ alerts = [] }) => {
  return (
    <div className="notifications">
      <h2>Alerts & Notifications</h2>
      {alerts.length === 0 ? (
        <p>No alerts at the moment.</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} className={`alert ${alert.type}`}>
              {alert.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;