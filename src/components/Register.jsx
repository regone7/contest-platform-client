import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl  border-2 border-blue-300 ">
                        <h1 className="text-2xl text-center pt-5 -mb-5 font-bold ">Register Now!</h1>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPassword(!showPassword) }}>
                                            {
                                                showPassword ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>

                                </div>
                                <div className="form-control ">
                                    <input type="submit" value="Register" className="btn mt-5 bg-blue-400 hover:bg-blue-600 text-white" />
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-between px-9 mb-7">
                            <h2>Alraedy have an account!</h2>
                            <Link to='/login'><p className=" text-blue-500">Log In</p></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;