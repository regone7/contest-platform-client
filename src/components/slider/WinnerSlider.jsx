import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const WinnerSlider = () => {
    const axiosPublic = useAxiosPublic()
    const { data: homewin = [], refetch } = useQuery({
        queryKey: ['homewin'],

        queryFn: async () => {
            const { data } = await axiosPublic.get('/userlistes')
            return data;

        },
    })
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    homewin?.filter(j => j.win === 'Winner').map(homewins =>
                        <SwiperSlide key={homewins._id}>
                            <div className='p-9 flex justify-center items-center -mt-12 font-lato'>
                                <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <div class="flex justify-center -mt-16 md:justify-end">
                                        <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="" src={homewins.ur_photo}></img>
                                    </div>

                                    <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{homewins.contest_name}</h2>
                                    <p className='text-gray-800 dark:text-white'>Winner name:{homewins.ur_name}</p>

                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">Winner Of our contest. You can also make yourself as a winner by participation on contest. Do not be late , try it Now.  </p>

                                    <div class="flex justify-end mt-4">
                                        <h1>Prize: <span className='text-orange-400'>{homewins.prize_money}</span> </h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default WinnerSlider;