import { FaHome, FaChartBar, FaClipboardList, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerTaskBar = () => {

    return(
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-3 shadow-md">
            <Link to="/managerhome" className="flex flex-col items-center text-black">
                <FaHome className="text-xl" />
                <span className="text-xs">Home</span>
            </Link>

            <Link to="/dashboard" className="flex flex-col items-center text-black">
                <FaClipboardList className="text-xl" />
                <span className="text-xs">Dashboard</span>
            </Link>

            <Link to="/analytics" className="flex flex-col items-center text-black">
                <FaChartBar className="text-xl" />
                <span className="text-xs">Analytics</span>
            </Link>

            <Link to="/driverprofile" className="flex flex-col items-center text-black">
                <FaUser className="text-xl" />
                <span className="text-xs">Profile</span>
            </Link>
    </nav>            
    )
}

export default ManagerTaskBar;