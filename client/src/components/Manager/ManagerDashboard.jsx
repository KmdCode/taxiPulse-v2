import { useState } from "react";
import { FaHome, FaChartBar, FaClipboardList, FaUser } from "react-icons/fa";

const ManagerDashboard = () => {
  const managerName = "Sanele Ndlovu";
  const route = "Garankuwa to Pretoria";
  const [queue, setQueue] = useState(["Driver 1", "Driver 2", "Driver 3"]);
  const [driversServed, setDriversServed] = useState(15);

  // Notify the next driver in the queue
  const notifyNextDriver = () => {
    if (queue.length > 0) {
      alert(`Notifying ${queue[0]}`);
    }
  };

  // Add a driver to the queue
  const addDriver = () => {
    const newDriver = `Driver ${queue.length + 1}`;
    setQueue([...queue, newDriver]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-text pb-16">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <span className="text-sm font-medium">{managerName}</span>
      </header>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">{route}</h2>
          <p className="text-gray-600 text-sm mb-2">Queue</p>
          <ul className="space-y-2">
            {queue.map((driver, index) => (
              <li key={index} className="rounded-md bg-gray-100 p-2 text-sm">
                {driver}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-4 flex space-x-4">
        <button
          onClick={notifyNextDriver}
          className="w-1/2 rounded-md bg-blue-600 py-2 text-white font-medium shadow-md hover:bg-blue-700"
        >
          Notify Next Driver
        </button>
        <button
          onClick={addDriver}
          className="w-1/2 rounded-md bg-green-600 py-2 text-white font-medium shadow-md hover:bg-green-700"
        >
          Add Driver
        </button>
      </section>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 text-center shadow-md">
          <h2 className="text-lg font-semibold">Drivers Served Today</h2>
          <p className="text-3xl font-bold text-blue-600">{driversServed}</p>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-3 shadow-md">
        <button className="flex flex-col items-center">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <FaClipboardList className="text-xl text-blue-500" />
          <span className="text-xs text-blue-500">Dashboard</span>
        </button>
        <button className="flex flex-col items-center">
          <FaChartBar className="text-xl" />
          <span className="text-xs">Analytics</span>
        </button>
        <button className="flex flex-col items-center">
          <FaUser className="text-xl" />
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ManagerDashboard;
