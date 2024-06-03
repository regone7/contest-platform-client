import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";


const ManageUser = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: auser = [], isLoading } = useQuery({
        queryKey: ['auser'],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get('/userss')
            return data;
        },
    })
    console.log(auser)
    const { name, email } = auser;
    return (
        <div>
            <div className="p-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                                <th>Block/Unblock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                auser.map((aauser, index) =>
                                    <tr key={aauser._id}>
                                        <th>{index + 1}</th>
                                        <td>{aauser.name}</td>
                                        <td>{aauser.email}</td>
                                        <td>
                                            <select defaultValue={aauser.role} name="role" className="font-bold" >
                                                <option value="User">User</option>
                                                <option value="Contest Creator"> Contest Creator</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button><MdDelete className="text-red-600 text-3xl" /></button>
                                        </td>
                                        {
                                            aauser.role == 'Admin' ? <td>Admin</td> :
                                                <td>
                                                    <select name="blocks"  >
                                                        <option value="Block">Block</option>
                                                        <option value="Unblock">Unblock</option>
                                                    </select>
                                                </td>
                                        }
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="flex ">
                        <a className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            previous
                        </a>

                        <a className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            1
                        </a>

                        <a className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            2
                        </a>

                        <a className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            3
                        </a>

                        <a className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;