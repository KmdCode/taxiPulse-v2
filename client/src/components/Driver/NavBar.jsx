import { FaHome, FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-3 shadow-md">
            <Link to="/driverhome" className="flex flex-col items-center text-black">
                <FaHome className="text-xl" />
                <span className="text-xs">Home</span>
            </Link>

            <Link to="/notifications" className="flex flex-col items-center text-black">
                <FaBell className="text-xl" />
                <span className="text-xs">Notifications</span>
            </Link>

            <Link to="/driverprofile" className="flex flex-col items-center text-black">
                <FaUser className="text-xl" />
                <span className="text-xs">Profile</span>
            </Link>
    </nav>            
    )
}

export default NavBar;