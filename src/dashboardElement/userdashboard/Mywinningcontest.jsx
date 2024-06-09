import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Mywinningcontest = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: useratmp = [] } = useQuery({
        queryKey: ['useratmp', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/myuserattempt/${user?.email}`)
            return data;
        },
    })
    return (
        <div>
            <div className="overflow-x-auto p-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contents Name</th>
                            <th>Prize</th>
                            <th>Contest Description</th>
                            <th>Win</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            useratmp?.filter(j => j.win === 'Winner').map((useratmps, index) =>
                                <tr key={useratmps._id} >
                                    <th>{index + 1}</th>
                                    <td>{useratmps?.contest_name}</td>
                                    <td>{useratmps?.prize_money}</td>
                                    <td>{useratmps?.contest_description}</td>
                                    <td>{useratmps?.win}</td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mywinningcontest;