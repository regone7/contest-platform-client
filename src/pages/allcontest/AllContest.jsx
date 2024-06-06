import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";


const AllContest = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allcontst = [], refetch } = useQuery({
        queryKey: ['allcontst'],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get('/allcontests')
            return data;

        },
    })
    console.log(allcontst)
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3 ">
                    {
                        allcontst.map((allcontsts) => (
                            <div key={allcontsts._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                <figure><img src={allcontsts.photoURL} alt="" /></figure>
                                <div className="card-body">
                                    <div>
                                        <h2 className="card-title">{allcontsts.contest_name}</h2>
                                        <p>Attempted: <span className="text-red-500 font-bold">{allcontsts.attempt}</span></p>
                                        <p>Contest Type: {allcontsts.tags}</p>
                                       
                                    </div>
                                    <p > Description: {allcontsts.text_instruction.slice(0,50)}...</p>
                                    <div className="card-actions justify-end">

                                        <button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllContest;