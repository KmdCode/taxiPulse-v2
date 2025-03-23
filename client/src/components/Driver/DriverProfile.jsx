import { FaHome, FaBell, FaUser } from "react-icons/fa";

const DriverProfile = () => {
  const driver = {
    name: "Karabo Modise",
    email: "karabo@email.com",
    phone: "+27 123 456 7890",
    carModel: "Toyota Quantum",
    carPlate: "XTT 556 GP",
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">{driver.name}</span>
          <img
            src="/profile.jpg"
            alt="Driver Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Profile Info Section */}
      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">Profile Information</h2>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Name:</span> {driver.name}
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span> {driver.email}
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone:</span> {driver.phone}
            </p>
          </div>

          <h2 className="text-lg font-semibold mt-4 mb-2">Taxi Information</h2>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Taxi Model:</span> {driver.carModel}
            </p>
            <p className="text-sm">
              <span className="font-medium">License Plate:</span> {driver.carPlate}
            </p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <button className="w-full rounded-md bg-blue-600 py-2 text-white font-medium shadow-md hover:bg-blue-700">
          Update Profile
        </button>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-3 shadow-md">
        <button className="flex flex-col items-center">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <FaBell className="text-xl" />
          <span className="text-xs">Notifications</span>
        </button>
        <button className="flex flex-col items-center">
          <FaUser className="text-xl text-blue-500" />
          <span className="text-xs text-blue-500">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default DriverProfile;
