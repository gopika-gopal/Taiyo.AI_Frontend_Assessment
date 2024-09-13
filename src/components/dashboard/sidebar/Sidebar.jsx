import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar md:w-64 md:py-6">
            <Link className="sidebar-btn active text-white font-bold rounded-md hover:bg-blue-600 transition duration-300" to={"/"}>Contact</Link>
            <Link className="sidebar-btn active text-white font-bold rounded-md hover:bg-blue-600 transition duration-300" to={"/dashboard-chart-map"}>Charts and Maps</Link>
        </div>
    );
}
export default SideBar;
