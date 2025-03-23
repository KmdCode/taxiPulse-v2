import { FaHome, FaChartBar, FaClipboardList, FaUser, FaPlus } from "react-icons/fa";

const ManagerHome = () => {
  const managerName = "Sanele Ndlovu";
  const routes = [
    "Pretoria to Johannesburg",
    "Cape Town to Durban",
    "Sandton to Centurion",
    "Port Elizabeth to East London",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-text pb-16">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <span className="text-sm font-medium">{managerName}</span>
      </header>

      <section className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Routes</h2>
          <button className="p-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700">
            <FaPlus className="text-lg" />
          </button>
        </div>
        <div className="space-y-3">
          {routes.map((route, index) => (
            <button
              key={index}
              className="w-full rounded-lg bg-white p-4 text-left shadow-md hover:bg-gray-100"
            >
              {route}
            </button>
          ))}
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-3 shadow-md">
        <button className="flex flex-col items-center">
          <FaHome className="text-xl text-blue-500" />
          <span className="text-xs text-blue-500">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <FaClipboardList className="text-xl" />
          <span className="text-xs">Dashboard</span>
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

export default ManagerHome;
