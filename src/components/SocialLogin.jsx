import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const { googleLogin } = useContext(AuthContext)
    const handelgoogleLogin = () => {
        googleLogin()
            .then((result) => {
                 const userInfos = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'User'
                    
                }
                axiosPublic.post('/users', userInfos)
                    .then(res => {
                        console.log(res.data)
                        
                        console.log("success update")

                    })
                // console.log(result.user)
                // console.log("google success")

               
            })
            .catch(error => {
                console.error(error)
                
            })
    }
    return (
        <div>
            <div className="px-9 flex flex-col w-full gap-3 mb-12">
                <button onClick={handelgoogleLogin} className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
            </div>

        </div>
    );
};

export default SocialLogin;