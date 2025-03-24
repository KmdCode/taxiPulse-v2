import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import DriverHome from './components/Driver/DriverHome';
import DriverNotifications from './components/Driver/DriverNotifications';
import DriverProfile from './components/Driver/DriverProfile';
import ManagerHome from './components/Manager/ManagerHome';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import ManagerAnalytics from './components/Manager/ManagerAnalytics';
import ManagerProfile from './components/Manager/ManagerProfile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/driverhome" element={<DriverHome/>}/>
          <Route path="/notifications" element = {<DriverNotifications/>}/>
          <Route path="/driverprofile" element={<DriverProfile/>}/>
          <Route path="/managerhome" element={<ManagerHome/>}/>
          <Route path="/dashboard" element={<ManagerDashboard/>}/>
          <Route path="/analytics" element={<ManagerAnalytics/>}/>
          <Route path="/managerprofile" element={<ManagerProfile/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
