import React from 'react';
import { FaBottleWater, FaWineGlassEmpty } from 'react-icons/fa6';
import { IoBedOutline, IoWifi } from 'react-icons/io5';

const Amenities = () => {
    return (
        <div className=' pt-20 flex flex-col  items-center gap-12 px-20'>
            <div className='w-1/2 flex items-center flex-col text-center gap-3'>
                <h1 className='text-4xl font-bold'>Our Amenities</h1>
                <p>Have a look at our popular reason. why you should choose you bus.Just choose a Bus and get a ticket for your great journey!</p>
            </div>
            <div className='flex  justify-center items-center gap-8'>
                <div className='w-48 h-48 border flex flex-col gap-3 hover:text-primary cursor-pointer justify-center items-center  duration-300 rounded-md hover:shadow-sm hover:shadow-primary'>
                    <IoWifi className=' border-b-2 text-8xl   hover:border-primary duration-300' />
                    <p className='text-sm'>Free Wi-Fi</p>
                </div>
                <div className='w-48 h-48 border flex flex-col gap-3 hover:text-primary cursor-pointer justify-center items-center  duration-300 rounded-md hover:shadow-sm hover:shadow-primary'>
                    <IoBedOutline className=' border-b-2 text-8xl   hover:border-primary duration-300' />
                    <p className='text-sm'>Pillow</p>
                </div>
                <div className='w-48 h-48 border flex flex-col gap-3 hover:text-primary cursor-pointer justify-center items-center  duration-300 rounded-md hover:shadow-sm hover:shadow-primary'>
                    <FaBottleWater className=' border-b-2 text-8xl   hover:border-primary duration-300 pb-1' />
                    <p className='text-sm'>Water Bottol</p>
                </div>
                <div className='w-48 h-48 border flex flex-col gap-3 hover:text-primary cursor-pointer justify-center items-center  duration-300 rounded-md hover:shadow-sm hover:shadow-primary'>
                    <FaWineGlassEmpty className=' border-b-2 text-8xl   hover:border-primary duration-300 pb-1' />
                    <p className='text-sm'>Soft Drink</p>
                </div>



            </div>
        </div>
    );
};

export default Amenities;