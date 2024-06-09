import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    // const [error, setError] = useState("");
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const axiosPublic = useAxiosPublic()
    const { creatUser, updateUserProfile, setLoading } = useContext(AuthContext)


    // const handelRegisterPg = (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const photoURL = e.target.photoURL.value;
    //     const password = e.target.password.value;
    //     console.log(name, email, password)

    //     if (password.length < 6) {
    //         setError("Password must be at least 6 character")
    //         return;
    //     }
    //     if (!/(?=.*[A-Z])/.test(password)) {
    //         setError("Password Must have One Uppercase letter in the password")
    //         return;
    //     }
    //     if (!/(?=.*[a-z])/.test(password)) {
    //         setError("Password Must have One Lowercase letter in the password")
    //         return;
    //     }
    //     setError('')

    //     creatUser(email, password)
    //         .then(() => {
    //             updateUserProfile(name, photoURL)
    //                 .then(() => {
    //                     console.log("success update")


    //                 })

    //         })
    //         .catch((error) => {
    //             console.error(error)


    //         })

    // }
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        creatUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data?.name,
                            email: data?.email,
                            role: 'User',
                            blocks: 'Unblock'
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("success ")
                                    toast.success(' Successfuly login')
                                    navigate(location?.state ? location.state : '/');
                                    setLoading(false)
                                }
                            })



                    })

            })
            .catch((error) => {
                console.error(error)


            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl  border-2 border-blue-300 ">
                        <h1 className="text-2xl text-center pt-5 -mb-5 font-bold ">Register Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered " />
                                    {errors.name && <p className="text-red-500" >Name is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered required" />
                                    {errors.email && <p className="text-red-500" >Email is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" name="photoURL" className="input input-bordered required" />
                                    {errors.photoURL && <p className="text-red-500" >photoURL is required</p>}
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 6 })} name="password" placeholder="password" className="input input-bordered relative w-full" />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPassword(!showPassword) }}>
                                            {
                                                showPassword ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                        {errors.password?.type === "required" && (
                                            <p className="text-red-500" >Password name is required</p>
                                        )}
                                        {errors.password?.type === "minLength" && (
                                            <p className="text-red-500" >Password must be at least 6 character</p>
                                        )}
                                        {/* {errors.password?.type === "pattern" && (
                                            <p className="text-red-500" >Password Must have One Uppercase, One Lowercase, One Number letter in the password</p>
                                        )} */}

                                        {/* {
                                            error && <small className="text-red-500">{error}</small>
                                        } */}

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
            <Toaster position="top-center" />
        </div>
    );
};

export default Register;