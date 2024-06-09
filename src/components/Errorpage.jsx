import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col w-full h-96 gap-7">

                    <h1 className="text-3xl font-bold text-center">Opps! <span className='text-5xl text-red-700'>404 Page not Found</span></h1>
                    <Link to='/'>
                        <p className=" border-b-2 border-green-100 mt-9 text-green-300 hover:text-green-500 hover:text-2xl">Go to Home page Click...</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;