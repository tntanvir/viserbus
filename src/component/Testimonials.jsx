import React from 'react';
import { CarouselCustomNavigation } from './CarouselCustomNavigation';

const Testimonials = () => {
    return (
        <div className='min-h-screen pt-20 flex flex-col  items-center gap-12 px-20 bg-gray-100 mt-20 pb-20'>
            <div className='w-1/2 flex items-center flex-col text-center gap-3'>
                <h1 className='text-4xl font-bold'>Our Testimonials</h1>
                <p>Have a look at our popular reason. why you should choose you bus. Just choose a Bus and get a ticket for your great journey!</p>
            </div>
            <div className='flex justify-center items-center '>

                <CarouselCustomNavigation />
            </div>
        </div>
    );
};

export default Testimonials;