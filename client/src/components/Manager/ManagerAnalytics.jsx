import {FaDownload } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import ManagerTaskBar from "./ManagerTaskBar";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const ManagerAnalytics = () => {
  const managerName = "Sanele Ndlovu";

  const totalDriversServed = 120;
  const avgWaitingTime = "15 mins";
  const peakHours = "7 AM - 12 PM";

  // Bar Chart Data - Drivers Served per Hour
  const barChartData = {
    labels: ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"],
    datasets: [
      {
        label: "Drivers Served",
        data: [5, 12, 18, 22, 19, 25, 30, 18, 15, 12, 10, 8],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  // Route Popularity Pie Chart Data
  const pieChartData = {
    labels: ["Pretoria to Johannesburg", "Cape Town to Durban", "Sandton to Centurion", "Garankuwa to Pretoria"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-text pb-16">

      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">TaxiPulse</h1>
        <span className="text-sm font-medium">{managerName}</span>
      </header>

      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">Analytical Overview</h2>
          <p className="text-sm text-gray-600">Total Drivers Served: <span className="font-bold">{totalDriversServed}</span></p>
          <p className="text-sm text-gray-600">Avg Waiting Time: <span className="font-bold">{avgWaitingTime}</span></p>
          <p className="text-sm text-gray-600">Peak Hours: <span className="font-bold">{peakHours}</span></p>
        </div>
      </section>

      {/* Bar Chart - Drivers Served per Hour */}
      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">Drivers Served per Hour</h2>
          <Bar data={barChartData} />
        </div>
      </section>

      {/* Pie Chart - Route Popularity */}
      <section className="p-4">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">Route Popularity</h2>
          <Pie data={pieChartData} />
        </div>
      </section>

      {/* Download Report Button */}
      <section className="p-4">
        <button className="w-full rounded-md bg-blue-600 py-2 text-white font-medium shadow-md hover:bg-blue-700 flex items-center justify-center">
          <FaDownload className="mr-2" /> Download Report
        </button>
      </section>

      <ManagerTaskBar/>
    </div>
  );
};

export default ManagerAnalytics;
