import { FaHome, FaBell, FaUser } from "react-icons/fa";
import NavBar from "./NavBar";

const DriverNotifications = () => {
  const driverName = "Karabo Modise";
  const notifications = [
    { message: "New ride request available", time: "10:45 AM" },
    { message: "Your queue position has been updated", time: "9:30 AM" },
    { message: "Reminder: Vehicle inspection tomorrow", time: "8:00 AM" },
    { message: "New app update available", time: "Yesterday, 6:00 PM" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">{driverName}</span>
        </div>
      </header>

      <section className="p-4">
        <h2 className="mb-3 text-lg font-semibold">Today’s Notifications</h2>
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 rounded-lg bg-white p-3 shadow-md"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
                <FaBell className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NavBar/>
    </div>
  );
};

export default DriverNotifications;
