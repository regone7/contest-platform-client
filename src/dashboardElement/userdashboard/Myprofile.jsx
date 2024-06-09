import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Myprofile = () => {
    const { user, updateUserProfile, setLoading } = useContext(AuthContext)
    const handelUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUserProfile(name, photoURL)
            .then(() => {
                setLoading(false)
                console.log("success");

                toast.success("Succesfully Update")

            })
            .catch((error) => {
                console.error(error)
                toast.error(' error')
            })
    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img   src={user?.photoURL || 'https://i.ibb.co/vwWq42z/pexels-pixabay-162137.jpg'} className="max-w-sm rounded-lg shadow-2xl w-32 lg:w-72" />
                        <div>
                            <h1  className="text-3xl font-bold text-center">{user?.displayName}</h1>
                            <p className="py-6">{user?.email}</p>

                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex">

                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <h1 className="text-2xl text-center text-sky-500 mt-5">Update Profile</h1>
                                <form onSubmit={handelUpdate} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input type="text" placeholder="photoURL" name='photoURL' className="input input-bordered" />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn bg-blue-600 hover:bg-blue-800 hover:text-white">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Toaster position="top-center" />
                </div>
            </div>
        </div>
    );
};

export default Myprofile;