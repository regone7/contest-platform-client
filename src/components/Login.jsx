import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const [showPasswords, setShowPasswords] = useState(false)

    const { signInUsers, setLoading } = useContext(AuthContext)
    
    // const location = useLocation()
    // const navigate = useNavigate()

    const handelLoginPg = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUsers(email, password)
            .then(result => {
                console.log(result.user)
                console.log('success')

                e.target.reset()


            })
            .catch(error => {
                console.error(error)


            })
    }
    // const handelgoogleLogin = () => {
    //     googleLogin()
    //         .then((result) => {
    //             // const userInfo = {
    //             //     name: result.data?.name,
    //             //     email: result.data?.email
    //             // }
    //             // axiosPublic.post('/users', userInfo)
    //             //     .then(res => {
    //             //         console.log(res.data)
    //             //         console.log("success update")

    //             //     })
    //             console.log(result.user)
    //             console.log("google success")

    //         })
    //         .catch(error => {
    //             console.error(error)

    //         })
    // }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl border-2 border-blue-300">
                        <h1 className="text-2xl text-center pt-5 -mb-5 font-bold">Log In Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelLoginPg} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPasswords ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPasswords(!showPasswords) }}>
                                            {
                                                showPasswords ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LogIn" className="btn  bg-blue-400 hover:bg-blue-600 text-white" />
                                </div>

                            </form>
                        </div>

                        <div className="flex items-center justify-between px-9">
                            <h1>New User?  </h1>
                            <Link to='/register'><p className=" text-blue-500 flex items-center font-semibold ">Registration <MdOutlineNavigateNext className="text-xl" /></p></Link>
                        </div>

                        <div className="divider divider-gray-100 px-9">OR Login With </div>
                        {/* <div className="px-9 flex flex-col w-full gap-3 mb-12">
                            <button onSubmit={handelgoogleLogin} className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>

                        </div> */}
                        <SocialLogin></SocialLogin>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;