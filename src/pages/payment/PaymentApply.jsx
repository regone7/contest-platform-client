import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const PaymentApply = () => {
    const loaderp = useLoaderData()
    // console.log(loaderp)
    
    const { contest_name, photoURL, contest_description, contest_price, prize_money, text_instruction, tags, conformation, email, comment, attempt,startDate, _id } = loaderp
    const { user } = useContext(AuthContext)
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const infoAddss = {
            attempt: parseInt(data.attempt)
        }
        // console.log(infoAddss)
        // console.log(data)
        try {
            const { data } = await axios.patch(
                `http://localhost:7000/updatecontestss/${contest_name}`,
                infoAddss
            )
            // console.log(data)
            // console.log('success')

        } catch (err) {
            console.log(err)

        }

        const infoPayment = {
            p_number:data.p_number,
            t_id:data.t_id,
            p_amount:data.p_amount,
            contest_answer:data.contest_answer,
            ur_email:user?.email,
            ur_name:user?.displayName,
            ur_photo:user?.photoURL,
            urattempt_id:_id,
            ur_payment:'Completed Payment',
            contest_description:contest_description,
            prize_money:prize_money,
            contest_name:contest_name,
            win:'Panding'
        }
        // console.log(infoAddss)
        // console.log(data)
        try {
            const { data } = await axios.post(
                'http://localhost:7000/paymentcontest',
                infoPayment
            )
            console.log(data)
            console.log('success')
            toast.success(' Success ')
            

        } catch (err) {
            console.log(err)
            toast.error(' error')

        }

    }
    return (
        <div>
            <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row  font-lato mt-7 p-3">
                <div className="md:flex md:items-center md:justify-center md:w-1/2   ">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h1 className="text-lg font-bold ">Payment To Registration and Perticipation Contest</h1>

                        <h2 className="mt-2">Payment Information: At This moment only <span className="text-green-400">bKash/Rocket/Nagad</span>  Mobile banking Accept.</h2>
                        <p className="mt-1 font-semibold">Payment Number: <span className="text-orange-400"> +880 1795552887</span> </p>
                        <p className="mt-1">Amount to Pay: {contest_price} </p>
                        <p className="mt-1"> Winner Prize Money: {prize_money} </p>
                        <h1 className="mt-3">Perticipate Contest Name: {contest_name} </h1>
                        <p className="mt-1">Description: {contest_description} </p>
                    </div>


                </div>

                <div className="flex items-center justify-center pb-6 md:py-5 md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">The Phone Number from which the payment was made</span>
                            </label>
                            <input type="text" {...register("p_number", { required: true })} name="p_number" placeholder="Phone number" className="h-12 p-3 input input-bordered" />
                            {errors.p_number && <span className="text-red-500 ">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Transaction ID</span>
                            </label>
                            <input type="text"  {...register("t_id", { required: true })} name="t_id" placeholder="Transaction ID" className="h-12 p-3 input input-bordered" />
                            {errors.t_id && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment Amount</span>
                            </label>
                            <input type="text"  {...register("p_amount", { required: true })} name="p_amount" placeholder="Payment Amount" className="h-12 p-3 input input-bordered" />
                            {errors.p_amount && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Contest Answer: Drive or Any Link</span>
                            </label>
                            <textarea  {...register("contest_answer", { required: true })} name="contest_answer" placeholder="Answer" className=" h-20 p-3 input input-bordered" ></textarea>
                            {errors.contest_answer && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="form-control mt-5">
                            <input type="checkbox" {...register("attempt", { required: true })} name="attempt"  />
                            {errors.attempt && <span className="text-red-500">This checkbox is required</span>}
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit"  value="Submit" className="btn  bg-blue-300 hover:bg-blue-400 text-white" />
                        </div>

                    </form>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default PaymentApply;
