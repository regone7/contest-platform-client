import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const ChangeRole = () => {
    const loader = useLoaderData()
    const navigate = useNavigate()
    console.log(loader)
    const { name, email, blocks, role, _id } = loader;
    const handelRole = async (e) => {
        e.preventDefault();
        const role = e.target.role.value;
        const infoRole = { name, email, blocks, role }
        console.log(infoRole)

        try {
            const { data } = await axios.put(
                `https://contest-platform-server-eight.vercel.app/userupds/${_id}`,
                infoRole
            )
            console.log(data)
            console.log('success')
            toast.success(' Success ')
            navigate('/dashboard/ddmanageuser');

        } catch (err) {
            console.log(err)
            toast.error(' error')

        }
    }
    return (
        <div>

            <div className="hero min-h-screen  text-gray-700">
                <div className="hero-content  ">

                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none">
                        <div className="card-body -mt-5">
                            <form onSubmit={handelRole} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Role Change</span>
                                    </label>
                                    <select defaultValue={role} name="role" className="h-12 p-3 input-bordered " >
                                        <option value="User">User</option>
                                        <option value="Contest Creator"> Contest Creator</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>


                                <div className="form-control mt-6">
                                    <input type="submit" value="Change" className="btn  bg-blue-300 hover:bg-blue-400 text-white" />
                                </div>

                            </form>
                        </div>



                    </div>
                </div>
                <Toaster position="top-center" />

            </div>
        </div>
    );
};

export default ChangeRole;