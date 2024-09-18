import React from 'react';
import { FaAmazonPay } from 'react-icons/fa';
import { IoTicketOutline } from 'react-icons/io5';
import { LiaSearchSolid } from 'react-icons/lia';

const Steps = () => {
    return (
        <div className='min-h-screen pt-20 flex flex-col  items-center gap-12 px-20'>
            <div className='w-1/2 flex items-center flex-col text-center gap-3'>
                <h1 className='text-4xl font-bold'>Get Your Tickets With Just 3 Steps</h1>
                <p>Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey. !</p>
            </div>

            <div className='flex gap-4'>
                <div className='shadow-md hover:shadow-lg p-3 py-10 px-5 flex flex-col gap-3 rounded-lg cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <div className='bg-primary/30 w-24 h-24 rounded-full flex justify-center items-center border-8 '>
                            <LiaSearchSolid className='text-4xl text-primary' />

                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Search Your Bus</h1>
                        <p className='leading-9'>Choose your origin, destination,Just choose a Bus journey dates and search for buses</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-lg p-3 py-10 px-5 flex flex-col gap-3 rounded-lg cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <div className='bg-primary/30 w-24 h-24 rounded-full flex justify-center items-center border-8 '>
                            <IoTicketOutline className='text-4xl text-primary' />

                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Choose The Ticket</h1>
                        <p className='leading-9'>Choose your origin, destination,Just a Bus for your great journey dates and search for buses</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-lg p-3 py-10 px-5 flex flex-col gap-3 rounded-lg cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <div className='bg-primary/30 w-24 h-24 rounded-full flex justify-center items-center border-8 '>
                            <FaAmazonPay className='text-4xl text-primary' />

                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Pay Bill</h1>
                        <p className='leading-9'>Choose your origin, destination,choose a Bus for your great journey dates and search for buses</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;