
import { useContext } from "react";
import { TfiCup } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handelLogout = () => {
        signOutUser()
            .then(() => {
                console.log("sign out")

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="navbar-start lg:w-96">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>

                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <h1 className="btn btn-ghost text-2xl -ml-7 lg:-ml-3 text-white"> <TfiCup /> Innovate <span className="-ml-2 text-orange-500">Contest</span> </h1>
                </div>
                <div className="navbar hidden lg:flex lg:ml-">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-gray-900 font-bold  h-9 flex justify-center items-center text-md' : ' text-gray-700 h-9 flex justify-center items-center text-md'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'text-gray-900 font-bold  h-9 flex justify-center items-center text-md' : ' text-gray-700 h-9 flex justify-center items-center text-md'}>LogIn</NavLink>
                        </li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="" src={user?.photoURL || 'https://i.ibb.co/vwWq42z/pexels-pixabay-162137.jpg'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <p >  Profile Name:{user?.displayName} </p>
                                    </li>
                                    <Link to='/dashboard' ><li><p>Dashboard</p></li></Link>
                                    <li><p onClick={handelLogout}>Logout</p></li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;