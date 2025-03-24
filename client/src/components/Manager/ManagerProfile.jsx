import { FaUserPlus, FaEdit } from "react-icons/fa";
import ManagerTaskBar from "./ManagerTaskBar";

const ManagerProfile = () => {
  const managerName = "Sanele Ndlovu";
  const taxiAssociation = "Johannesburg Taxi Association";
  const totalDrivers = 25;

  return (
    <div className="flex min-h-screen flex-col bg-background text-text pb-16">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <span className="text-sm font-medium">{managerName}</span>
      </header>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">Manager Profile</h2>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Name:</span> {managerName}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Taxi Association:</span> {taxiAssociation}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Drivers Managed:</span> {totalDrivers}
          </p>
        </div>
      </section>

      {/* Update Profile Button */}
      <section className="p-4">
        <button className="w-full rounded-md bg-blue-600 py-2 text-white font-medium shadow-md hover:bg-blue-700 flex items-center justify-center">
          <FaEdit className="mr-2" /> Update Profile
        </button>
      </section>

      {/* Add Driver Button */}
      <section className="p-4">
        <button className="w-full rounded-md bg-green-600 py-2 text-white font-medium shadow-md hover:bg-green-700 flex items-center justify-center">
          <FaUserPlus className="mr-2" /> Add New Driver
        </button>
      </section>

      <ManagerTaskBar/>
    </div>
  );
};

export default ManagerProfile;
