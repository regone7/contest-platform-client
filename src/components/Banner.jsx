

const Banner = () => {
    return (
        <div >
            <div className="bg-gradient-to-b from-blue-200 via-orange-100 to-blue-100 h-[450px] flex justify-center items-center">
                <div className="flex flex-col">
                    <h1 className="text-center text-xl" >Welcome to <p className="btn btn-ghost  text-xl text-white">  Innovate <span className=" text-orange-500">Contest</span> </p> the ultimate platform where innovation meets recognition!</h1>
                    <p className="text-center">Contest Creation Platform</p>
                    <div className="mt-12 flex  justify-center items-center">
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-50% md:w-full md:max-w-xs  rounded-sm" />
                        <button className="btn bg-orange-400 hover:bg-green-300 rounded-sm rounded-r-full ">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
