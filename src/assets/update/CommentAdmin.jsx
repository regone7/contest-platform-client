import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const CommentAdmin = () => {
    const loader = useLoaderData()
    // 
    const {conformation, contest_name, contest_price, email, photoURL, prize_money, startDate, tags, text_instruction,  attempt, _id }= loader
    const handelComment= async (e)=>{
        e.preventDefault();
        const comment = e.target.comment.value;
        const infoConfirm={ conformation, contest_name, contest_price, email, photoURL, prize_money, startDate, tags, text_instruction, comment,  attempt }
        console.log(infoConfirm)

        try {
            const { data } = await axios.put(
              `http://localhost:7000/updatecontests/${_id}`,
              infoConfirm
            )
            console.log(data)
            console.log('success')
            
          } catch (err) {
            console.log(err)
            
          }
    }
    return (
        <div>
            <div className="hero min-h-screen  text-gray-700">
                <div className="hero-content  ">

                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none">
                        <div className="card-body -mt-5">
                            <form onSubmit={handelComment} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <textarea name='comment'  placeholder='comment' className='input h-32 border-2 border-gray-200'></textarea>
                                </div>


                                <div className="form-control mt-6">
                                    <input type="submit" value="Comment" className="btn  bg-blue-300 hover:bg-blue-400 text-white" />
                                </div>

                            </form>
                        </div>



                    </div>
                </div>
                {/* <Toaster position="top-center" /> */}

            </div>
        </div>
    );
};

export default CommentAdmin;