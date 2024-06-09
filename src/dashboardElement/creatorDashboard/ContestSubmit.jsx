import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { Link } from "react-router-dom";



const ContestSubmit = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allsub = [] } = useQuery({
        queryKey: ['allsub'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/userlistes')
            return data;

        },
    })
    console.log(allsub)
    return (
        <div>
            <div className="overflow-x-auto p-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contents Title</th>
                            <th>Prize</th>
                            <th>participant name</th>
                            <th>submitted task</th>
                            <th>Declare Win</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allsub?.map((alldata, index) =>
                                <tr key={alldata._id} >
                                    <th>{index + 1}</th>
                                    <td>{alldata?.contest_name}</td>
                                    <td>{alldata?.prize_money}</td>
                                    <td>{alldata?.ur_name}</td>
                                    <td>{alldata?.contest_answer}</td>
                                    <td>
                                        <Link to={`/dashboard/userlist/${alldata?._id}`} >
                                            <button className="btn btn-sm">Declare Win</button>
                                        </Link>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContestSubmit;