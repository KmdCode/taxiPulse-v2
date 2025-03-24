import { FaPlus } from "react-icons/fa";
import ManagerTaskBar from "./ManagerTaskBar";

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

      <ManagerTaskBar/>

          
    </div>
  );
};

export default ManagerHome;
