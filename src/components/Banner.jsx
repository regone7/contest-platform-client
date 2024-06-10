
import { useEffect, useState } from 'react';
import useAxiosPublic from '../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Banner = () => {
    // const axiosPublic = useAxiosPublic()
    // const { data: allcontstsc = [], refetch } = useQuery({
    //     queryKey: ['allcontstsc'],
    //     // enabled: !loading && !!user?.email,
    //     queryFn: async () => {
    //         const { data } = await axiosPublic.get('/allcontstsearch?search${search}')
    //         return data;

    //     },
    // })
    // const [allcontstsec,setAllcontstsc] = useState([allcontstsc])
    // console.log(allcontstsec)
    const [allcontstsec, setAllcontstsec] = useState([])
    const [search, setSearch] = useState('')
    const handelSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    useEffect(() => {
        fetch(`http://localhost:7000/allcontstsearch?search=${search}`)
            .then(res => res.json())
            .then(data => setAllcontstsec(data))
    }, [search])

    console.log(allcontstsec)



    return (
        <div >
            <div className="bg-gradient-to-b from-blue-200 via-orange-100 to-blue-100 h-[450px] flex justify-center items-center">
                <div className="flex flex-col">
                    <h1 className="text-center text-xl text-gray-800 dark:text-gray-700" >Welcome to <p className="btn btn-ghost  text-xl text-white">  Innovate <span className=" text-orange-500">Contest</span> </p> the ultimate platform where innovation meets recognition!</h1>
                    <p className="text-center text-gray-800 dark:text-gray-700">Contest Creation Platform</p>
                    <form onSubmit={handelSearch} >
                        <div className="mt-12 flex  justify-center items-center">

                            <input type="text" name='search' placeholder="Type here" className="input input-bordered input-warning w-50% md:w-full md:max-w-xs  rounded-sm" />
                            <input className="btn bg-orange-400 hover:bg-orange-500 rounded-sm rounded-r-full text-white " type="submit" value="Search" />

                        </div>
                    </form>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3 ">
                    {
                        allcontstsec?.filter(j => j.conformation === 'Confirm' ).slice(0, 9).map((allcontstsrc) => (
                            <div key={allcontstsrc._id} className="card  bg-base-100 shadow-xl image-full h-[310px] md:h-[270px]">
                                <figure><img src={allcontstsrc.photoURL} alt="" /></figure>
                                <div className="card-body">
                                    <div>
                                        <h2 className="card-title">{allcontstsrc.contest_name}</h2>
                                        <p> Total Attempted: <span className="text-red-500 font-bold">{allcontstsrc.attempt}</span></p>
                                        <p>Contest Type: {allcontstsrc.tags}</p>

                                    </div>
                                    <p > Description: {allcontstsrc.text_instruction.slice(0, 50)}...</p>
                                    <div className="card-actions justify-end">

                                        <Link to={`/allcontestditeals/${allcontstsrc._id}`} ><button className="btn btn-sm  hover:bg-blue-500 hover:text-white">Details</button></Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Banner;
