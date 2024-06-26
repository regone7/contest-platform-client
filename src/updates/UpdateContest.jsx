import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdateContest = () => {
    const loader = useLoaderData()
    // console.log(loader)
    const { contest_name, photoURL, contest_description, contest_price, prize_money, text_instruction, tags, conformation, email, comment, attempt, _id } = loader
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const infoAdds = {
            contest_name: data.contest_name,
            photoURL: data.photoURL,
            contest_description: data.contest_description,
            contest_price: data.contest_price,
            prize_money: data.prize_money,
            text_instruction: data.text_instruction,
            tags: data.tags,
            startDate: startDate,
            conformation: conformation,
            email: email,
            comment: comment,
            attempt: parseInt(attempt)
        }
        // console.log(infoAdds)
        // console.log(data)
        try {
            const { data } = await axios.put(
                `https://contest-platform-server-eight.vercel.app/updatecontests/${_id}`,
                infoAdds
            )
            console.log(data)
            console.log('success')
            toast.success(' Success ')
            navigate('/dashboard/mycreatedconts');

        } catch (err) {
            console.log(err)
            toast.error(' error')

        }
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen  text-gray-700 ">
                    <div className="hero-content  ">

                        <div className="card shrink-0  shadow-2xl rounded-none ">
                            <h1 className="text-2xl text-center pt-5  font-bold md:text-3xl ">Update Contest</h1>
                            <div className="card-body -mt-5">
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contest Name</span>
                                        </label>
                                        <input type="text" defaultValue={contest_name} {...register("contest_name", { required: true })} name="contest_name" placeholder="contest_name" className="h-12 p-3 input input-bordered" />
                                        {errors.contest_name && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" defaultValue={photoURL} {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="h-12 p-3 input input-bordered" />
                                        {errors.photoURL && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contest Description</span>
                                        </label>
                                        <textarea defaultValue={contest_description} {...register("contest_description", { required: true })} name="contest_description" placeholder="contest_description" className=" h-20 p-3 input input-bordered" required ></textarea>
                                        {errors.contest_description && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-3 ">
                                        <div className="form-control w-full ">
                                            <label className="label">
                                                <span className="label-text">Contest Price</span>
                                            </label>
                                            <input type="text" defaultValue={contest_price} {...register("contest_price", { required: true })} name="contest_price" placeholder="contest_price" className="h-12 p-3 input input-bordered" required />
                                            {errors.contest_price && <span className="text-red-500">This field is required</span>}
                                        </div>
                                        <div className="form-control w-full ">
                                            <label className="label">
                                                <span className="label-text">Prize money</span>
                                            </label>
                                            <input type="text" defaultValue={prize_money} {...register("prize_money", { required: true })} name="prize_money" placeholder="prize_money" className="h-12 p-3 input input-bordered" required />
                                            {errors.prize_money && <span className="text-red-500">This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Task Submission text instruction</span>
                                        </label>
                                        <textarea defaultValue={text_instruction} {...register("text_instruction", { required: true })} name="text_instruction" placeholder="text_instruction" className=" h-32 p-3 input input-bordered" required ></textarea>
                                        {errors.text_instruction && <span className="text-red-500">This field is required</span>}
                                    </div>


                                    <div className="flex flex-col md:flex-row gap-3 " >
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Contest Type/Tags </span>
                                            </label>
                                            <select defaultValue={tags} {...register("tags", { required: true })} name="tags" className="h-12 p-3 border-2 border-gray-500 rounded-md input-bordered  " required >
                                                <option value="Movie Review">Movie Review</option>
                                                <option value="Business Idea Concerts">Business Idea Concerts</option>
                                                <option value="Book Review">Book Review</option>
                                                <option value="Gaming Review">Gaming Review</option>
                                                <option value="Digital advertisement Contests">Digital advertisement Contests</option>
                                                <option value="Marketing Strategy">Marketing Strategy</option>
                                                <option value="Article Writing">Article Writing</option>
                                                <option value="Image Design Contests">Image Design Contests</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Contest Deadline</span>
                                            </label>
                                            <DatePicker className="h-12 p-3 input input-bordered " selected={startDate} onChange={(date) => setStartDate(date)} required />
                                            {/* <input type="date" defaultValue={startDate} {...register("startDate", { required: true })} name="startDate" className="h-12 p-3 input input-bordered " /> */}
                                        </div>
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Seat To Attempted</span>
                                        </label>
                                        <input type="text" defaultValue={attempt} {...register("attempt", { required: true })} name="attempt" placeholder="attempt" className="h-12 p-3 input input-bordered" required />
                                        {errors.attempt && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control mt-6">
                                        <input type="submit" value="Update" className="btn  bg-blue-300 hover:bg-blue-400 text-white" />
                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>


                </div>
                <Toaster position="top-center" />
            </div>
        </div>
    );
};

export default UpdateContest;