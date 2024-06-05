import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCreatedConts = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: mysubm = [], refetch } = useQuery({
        queryKey: ['mysubm', user?.email],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/addcontentss/${user?.email}`)
            return data;

        },
    })

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:7000/addsubdelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch()
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Succesfully  deleted.",

                                icon: "success"
                            });


                        }


                    })
            }
        });
    }

    console.log(mysubm)
    return (
        <div>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Contest Name</th>
                                <th>Tags</th>
                                <th>Contest price</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                mysubm?.map((mysubms, index) =>
                                    <tr key={mysubms?._id}>
                                        <th>{index + 1}</th>
                                        <td>{mysubms?.contest_name}</td>
                                        <td>{mysubms?.tags}</td>
                                        <td>{mysubms?.contest_price}</td>
                                        <td className={`px-3 py-1 ${mysubms?.conformation ==='Confirm' && 'text-blue-700 font-semibold'} ${mysubms?.conformation ==='Pending' && 'text-red-700 font-semibold'} `} >{mysubms?.conformation}</td>
                                        <td><Link to={`/dashboard/updatecontest/${mysubms?._id}`} ><button disabled={mysubms?.conformation ==='Confirm'} className="btn btn-sm border-2 border-green-300">Update</button></Link></td>
                                        <td><button disabled={mysubms?.conformation ==='Confirm'} onClick={() => handleDelete(mysubms?._id)} className="btn btn-sm border-2 border-red-300">Delete</button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyCreatedConts;