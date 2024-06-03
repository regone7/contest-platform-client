import { TfiCup } from "react-icons/tfi";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-64 md:min-h-screen bg-blue-400 ">
                    <ul className="menu ">
                        <Link to='/' ><li><h1 className="btn btn-ghost text-2xl -ml-7 lg:-ml-3 text-white text-center mb-5"> <TfiCup /> Innovate <span className="-ml-2 text-orange-500">Contest</span> </h1></li></Link>
                        
                        <NavLink to='/dashboard' end className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                        <li><p >My Participated Contest</p></li>
                        </NavLink>
                        <NavLink to='/dashboard/mywincontest' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                        <li><p >My Winning Contest Page</p></li>
                        </NavLink>
                        <NavLink to='/dashboard/myprofile' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                        <li><p >My Profile</p></li>
                        </NavLink>

                        <div className="p-9">
                            <Link to='/' ><li >Home</li></Link>
                            <Link to='/logout' ><li>Log Out</li></Link>
                            {/* <TbHomeSearch /> */}
                        </div>
                        
                    </ul>
                    
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;