import { TfiCup } from "react-icons/tfi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import useRole from "../../hook/useRole";

import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const Dashboard = () => {
    const [role] = useRole()
    // console.log(role)
    const navigate = useNavigate()
    const { user, signOutUser } = useContext(AuthContext)
    const handelLogout = () => {
        signOutUser()
            .then(() => {
                console.log("sign out")
                toast.success(' Successfuly logout')
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                toast.error(' error')
            })
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-64 md:min-h-screen bg-blue-400 ">
                    <ul className="menu ">
                        <Link to='/' ><li><h1 className="btn btn-ghost text-2xl -ml-7 lg:-ml-3 text-white text-center mb-5"> <TfiCup /> Innovate <span className="-ml-2 text-orange-500">Contest</span> </h1></li></Link>

                        {
                            role === 'User' && <>
                                <NavLink to='/dashboard/myparticipatecount' end className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >My Participated Contest</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/mywincontest' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >My Winning Contest Page</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/myprofile' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >My Profile</p></li>
                                </NavLink>
                            </>
                        }
                        {
                            role === 'Admin' && <>
                                <NavLink to='/dashboard/ddmanageuser' end className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >Manage User</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/ddmanagecontest' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >Manage Contests</p></li>
                                </NavLink>

                            </>
                        }
                        {
                            role === 'Contest Creator' && <>
                                <NavLink to='/dashboard/addcontest' end className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >Add Contest</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/mycreatedconts' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >My Created Contest</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/contestsubmit' className={({ isActive }) => isActive ? ' font-bold   flex  items-center justify-start text-md text-white' : ' text-gray-700  flex  items-center justify-start text-md font-semibold'}>
                                    <li><p >Contest Submitted </p></li>
                                </NavLink>

                            </>
                        }


                        <div className="p-9 ">
                            <Link to='/' ><li className="text-gray-700 font-bold" > <button> | Home | </button> </li></Link>
                            <li onClick={handelLogout} className="text-gray-700 font-bold" ><button > | Log Out | </button></li>
                            {/* <TbHomeSearch /> */}
                        </div>

                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Dashboard;