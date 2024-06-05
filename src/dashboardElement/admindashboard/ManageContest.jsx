import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageContest = () => {
    // const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: manage = [], refetch } = useQuery({
        queryKey: ['manage'],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get('/managecontent')
            return data;

        },
    })
    console.log(manage)

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

                fetch(`http://localhost:7000/contentcrdelete/${_id}`, {
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
                                <th>Contest Description</th>
                                <th>Tags</th>
                                <th>Delete</th>
                                <th>Confirm</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                manage?.map((manages, index) =>
                                    <tr key={manages._id} >
                                        <th>{index + 1}</th>
                                        <td>{manages.contest_name}</td>
                                        <td>{manages.contest_description}</td>
                                        <td>{manages.tags}</td>
                                        <td><button onClick={() => handleDelete(manages._id)} className="btn btn-sm hover:bg-red-500">Delete</button></td>
                                        <td><Link to={`/dashboard/conformconst/${manages._id}`}><button className="btn btn-sm">Confirm</button></Link></td>
                                        <td>
                                            <Link to={`/dashboard/comment/${manages._id}`}><button className="btn btn-sm">Comment</button></Link>
                                        </td>
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

export default ManageContest;