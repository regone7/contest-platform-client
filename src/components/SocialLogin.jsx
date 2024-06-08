import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelgoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const userInfos = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'User',
                    blocks: 'Unblock'

                }
                axiosPublic.post('/users', userInfos)
                    .then(res => {
                        console.log(res.data)
                        toast.success(' Successfuly login')
                        navigate(location?.state ? location.state : '/');
                        console.log("success update")

                    })
                // console.log(result.user)
                // console.log("google success")


            })
            .catch(error => {
                console.error(error)
                toast.error(' error')

            })
    }
    return (
        <div>
            <div className="px-9 flex flex-col w-full gap-3 mb-12">
                <button onClick={handelgoogleLogin} className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
            </div>
            <Toaster position="top-center" />

        </div>
    );
};

export default SocialLogin;