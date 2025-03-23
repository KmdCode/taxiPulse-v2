import React from 'react';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import DriverHome from './components/Driver/DriverHome';
import DriverNotifications from './components/Driver/DriverNotifications';
import DriverProfile from './components/Driver/DriverProfile';

function App() {
  return (
    <div className="App">
      <DriverHome/>
    </div>
  );
}

export default App;
