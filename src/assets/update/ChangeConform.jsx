
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ChangeConform = () => {
    const loader = useLoaderData()
    // 
    const navigate = useNavigate()
    const {conformation, contest_name, contest_price, email, photoURL, prize_money, startDate, tags, comment, text_instruction,  attempt, _id }= loader
    const handelConformation= async (e)=>{
        e.preventDefault();
        const conformation = e.target.conformation.value;
        const infoConfirm={ conformation, contest_name, contest_price, email, photoURL, prize_money, startDate, tags, comment, text_instruction,  attempt }
        console.log(infoConfirm)

        try {
            const { data } = await axios.put(
              `https://contest-platform-server-eight.vercel.app/updatecontests/${_id}`,
              infoConfirm
            )
            console.log(data)
            console.log('success')
            toast.success(' Success ')
            navigate('/dashboard/ddmanagecontest');
            
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
                            <form onSubmit={handelConformation} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Publish Status - {conformation} </span>
                                    </label>
                                    <select defaultValue={conformation}  name="conformation" className="h-12 p-3 input-bordered " >
                                        <option value="Pending">Pending</option>
                                        <option value="Confirm">Confirm</option>
                                    </select>
                                </div>


                                <div className="form-control mt-6">
                                    <input type="submit" value="Publish" className="btn  bg-blue-300 hover:bg-blue-400 text-white" />
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

export default ChangeConform;
