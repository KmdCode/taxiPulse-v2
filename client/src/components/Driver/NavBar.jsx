import { FaHome, FaBell, FaUser } from "react-icons/fa";

const NavBar = () => {

    return(
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
            <FaUser className="text-xl" />
            <span className="text-xs">Profile</span>
            </button>
      </nav>
    )
}

export default NavBar;