import React from 'react';
import NavBar from './NavBar';

const DriverHome = () => {
  const driverName = "Karabo Modise";
  const route = "Pretoria to Johannesburg";
  const queue = ["Driver 1", "Driver 2", "Driver 3", "Driver 4", "Driver 4", "Driver 4", "Driver 4", "Driver 5"];

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">{driverName}</span>
          
        </div>
      </header>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h2 className="text-sm font-medium text-gray-600">Current Route</h2>
          <p className="text-lg font-semibold">{route}</p>
        </div>
      </section>

      <section className="p-4">
        <img
          src="https://picsum.photos/400/150"
          alt="Burner"
          className="w-full rounded-lg shadow-md"
        />
      </section>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md max-h-60 overflow-y-auto">
            <h2 className="mb-2 text-lg font-semibold">Next in Line</h2>
            <ul className="space-y-2">
            {queue.map((driver, index) => (
                <li key={index} className="rounded-md bg-gray-100 p-2 text-sm">
                {driver}
                </li>
            ))}
            </ul>
        </div>
      </section>
      
      <NavBar/>
      
    </div>
  );
};

export default DriverHome;
