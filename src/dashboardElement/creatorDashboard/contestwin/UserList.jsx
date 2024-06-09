
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const UserList = () => {
    const winloader = useLoaderData()
    const navigate = useNavigate()
    // console.log(winloader)
    const { win, _id } = winloader
    const handelWin = async (e) => {
        e.preventDefault();
        const win = e.target.win.value;
        const infoWin = { win }
        // console.log(infoRole)

        try {
            const { data } = await axios.patch(
                `http://localhost:7000/userwin/${_id}`,
                infoWin
            )
            console.log(data)
            console.log('success')
            toast.success(' Success ')
            navigate('/dashboard/contestsubmit');

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
                            <form onSubmit={handelWin} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blocks Change</span>
                                    </label>
                                    <select defaultValue={win} name="win" className="h-12 p-3 input-bordered"  >
                                        <option value="Winner">Winner</option>
                                        <option value="Panding">Panding</option>
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

export default UserList;