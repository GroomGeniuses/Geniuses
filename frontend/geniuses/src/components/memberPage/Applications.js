import React from 'react';

const Applications = ({ applications }) => {
  return (
    <div className="status-section">
      {Object.keys(applications).map(status => (
        <div className="status-row" key={status}>
          <span className="status-label">{status}</span>
          {applications[status].map((app, index) => (
            <div key={index} className="post-box">
              {app.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Applications;
