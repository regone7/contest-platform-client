import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

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
            {/* <div className="container mx-auto">
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
            </div> */}
            <div className='flex justify-center items-center mt-7 mb-12  flex-grow  '>
                <div className='overflow-x-auto'>
                    <Tabs>
                        <TabList>
                            <Tab ><h1 className='font-semibold text-sm  text-orange-300'>Movie Review</h1></Tab>
                            <Tab><h1 className='font-semibold text-sm text-orange-300'>Gaming Review</h1></Tab>
                            <Tab ><h1 className='font-semibold text-sm text-orange-300'>Book Review</h1></Tab>
                            <Tab><h1 className='font-semibold text-sm text-orange-300'>Business Idea Concerts</h1></Tab>
                            <Tab><h1 className='font-semibold text-sm text-orange-300'>Marketing Strategy</h1></Tab>
                            <Tab ><h1 className='font-semibold text-sm text-orange-300'>Article Writing</h1></Tab>
                            <Tab ><h1 className='font-semibold text-sm text-orange-300'>Digital advertisement Contests</h1></Tab>
                            <Tab><h1 className='font-semibold text-sm text-orange-300'>Image Design Contests</h1></Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Movie Review').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Gaming Review').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Book Review').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Business Idea Concerts').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">
                                                <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Marketing Strategy').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">

                                                <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Article Writing').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">

                                                <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Digital advertisement Contests').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">

                                                <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                                {
                                    allcontst.filter(j => j.tags === 'Image Design Contests').map(tag => (
                                        <div key={tag._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                            <figure><img src={tag.photoURL} alt="" /></figure>
                                            <div className="card-body">
                                                <div>
                                                    <h2 className="card-title">{tag.contest_name}</h2>
                                                    <p>Attempted: <span className="text-red-500 font-bold">{tag.attempt}</span></p>
                                                    <p>Contest Type: {tag.tags}</p>

                                                </div>
                                                <p > Description: {tag.text_instruction.slice(0, 50)}...</p>
                                                <div className="card-actions justify-end">

                                                <Link to={`/allcontestditeals/${tag._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AllContest;