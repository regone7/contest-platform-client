import { useQuery } from "@tanstack/react-query";
import { MdOutlineCelebration } from "react-icons/md";
import useAxiosPublic from "../hook/useAxiosPublic";


const ContestWinnerCard = () => {
    const axiosPublic = useAxiosPublic()
    const { data: homewin = [], refetch } = useQuery({
        queryKey: ['homewin'],

        queryFn: async () => {
            const { data } = await axiosPublic.get('/userlistes')
            return data;

        },
    })
    console.log(homewin)
    return (
        <div className="font-lato">
            {/* <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/1fbS2H1/real-estate-4955087-1280.jpg" />
                <div className="flex-1 my-4">
                    <p className="text-lg font-semibold leading-snug">Leroy Jenkins</p>
                    <p className="text-sm">Visual Designer</p>
                </div>
                <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <div className="flex justify-center items-center text-xl text-green-400 gap-2" >
                        <MdOutlineCelebration />
                        <p>winner</p>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-col-1 md:grid-col-3 mt-2 md:mt-7">
                {
                    homewin?.filter(j => j.win === 'Winner').slice(0, 3).map(homewins =>
                        <div className="flex flex-col justify-center  px-8 mx-6 my-12 text-center rounded-md w-62 md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={homewins.ur_photo}/>
                            <div className="flex-1 my-4">
                                <p className="text-lg font-semibold leading-snug">Winner Name: {homewins.ur_name}</p>
                                <p className="text-sm"> Contest Name: {homewins.contest_name}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <div className="flex justify-center items-center text-xl text-green-400 gap-2" >
                                    <MdOutlineCelebration />
                                    <p className="text-sm">{homewins.win}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ContestWinnerCard;