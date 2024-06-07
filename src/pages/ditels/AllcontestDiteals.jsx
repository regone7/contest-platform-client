
import { GiPartyPopper } from 'react-icons/gi';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { TbCalendarTime } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';

const AllcontestDiteals = () => {
    const dtls = useLoaderData()
    console.log(dtls)
    return (
        <div>
   
            <div >
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src={dtls.photoURL} ></img>
                    </div>

                    <div className="flex flex-col items-center mt-6 text-center md:text-start xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-2xl font-semibold tracking-tight ">
                            {dtls.contest_name}
                        </h2>

                        <p > {dtls.contest_description} </p>
                        <div className='flex justify-center items-center gap-1'>
                            <RiMoneyEuroCircleLine />
                            <p >  Contest Price: {dtls.contest_price} </p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <GiPartyPopper />
                            <p >Prize Money: {dtls.prize_money} </p>
                        </div>

                        <p >Instruction: {dtls.text_instruction} lor </p>
                        <div className='my-3'>
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" ></img>

                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                    
                                    <p className="md:mt-7 text-gray-500 capitalize ">design director</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <TbCalendarTime />
                            <p >Deadline: {dtls.startDate} </p>
                        </div>

                    </div>
                    <div>
                        <button className='btn btn-sm my-7 text-blue-500 '>Registration</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllcontestDiteals;