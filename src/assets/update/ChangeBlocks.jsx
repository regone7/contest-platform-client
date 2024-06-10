import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const ChangeBlocks = () => {
    const loader = useLoaderData()
    // console.log(loader)
    const navigate = useNavigate()
    const { name, email, blocks, role , _id } = loader;
    const handelBlocks= async (e)=>{
        e.preventDefault();
        const blocks = e.target.blocks.value;
        const infoRole={ name, email, blocks, role }
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
                            <form onSubmit={handelBlocks} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blocks Change</span>
                                    </label>
                                    <select defaultValue={blocks} name="blocks"  className="h-12 p-3 input-bordered"  >
                                        <option value="Block">Block</option>
                                        <option value="Unblock">Unblock</option>
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

export default ChangeBlocks;