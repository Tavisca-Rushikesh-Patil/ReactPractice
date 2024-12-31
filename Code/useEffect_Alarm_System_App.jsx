// Let’s make it relatable. Imagine building a Smart Alarm System 
// that activates when someone opens the door and deactivates when the door is closed.
import React, { useState, useEffect } from 'react';

const SmartAlarmSystem = () => {
  const [doorOpen, setDoorOpen] = useState(false);
  const [alarmActive, setAlarmActive] = useState(false);

  // Effect to handle the alarm activation
  useEffect(() => {
    if (doorOpen) {
      console.log('Door opened! Activating alarm...');
      setAlarmActive(true);
    } else {
      console.log('Door closed. Deactivating alarm...');
      setAlarmActive(false);
    }

    // Cleanup logic when the component unmounts
    return () => {
      console.log('System shutting down. Alarm deactivated.');
      setAlarmActive(false);
    };
  }, [doorOpen]); // Dependency array tracks 'doorOpen'

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Alarm System</h1>
      <p>Door Status: {doorOpen ? 'Open' : 'Closed'}</p>
      <p>Alarm Status: {alarmActive ? 'Active' : 'Inactive'}</p>
      <button onClick={() => setDoorOpen(!doorOpen)}>
        {doorOpen ? 'Close Door' : 'Open Door'}
      </button>
    </div>
  );
};

export default SmartAlarmSystem;