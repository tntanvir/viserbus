import { Option, Select } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import React from 'react';
import DatePicker from './DatePicker';
import { useState } from 'react';

import heder from '../assets/image/haderimg.png'

const Hero = () => {
    const [date, setDate] = useState();

    const [pickup, setPickup] = useState();
    const [dropoff, setDropoff] = useState();

    return (
        <div className='flex justify-between  '>
            <div className='flex flex-col gap-4 md:px-20 px-3 pb-7 w-full  '>
                <h1 className='md:text-5xl text-3xl font-bold pt-28'>Get Your Ticket Online, <br /> Easy and Safely</h1>

                <Button className='bg-primary w-fit md:w-48'>Get ticket now</Button>
                <h3 className='md:text-3xl text-2xl font-semibold'>Choose Your Ticket</h3>
                <div className='md:w-fit w-full p-7 border  flex flex-col gap-4 shadow-lg rounded-md'>
                    <div className='flex md:flex-row flex-col   gap-3'>
                        <Select value={pickup} onChange={(e) => setPickup(e.target.value)} label='Pickup Point'>
                            <Option value='Rangpur'>Rangpur</Option>
                            <Option value='Dhaka'>Dhaka</Option>
                            <Option value='Dinajpur'>Dinajpur</Option>
                        </Select>
                        <Select label='Dropping Point'>
                            <Option>dhaka</Option>
                            <Option>dhaka</Option>
                            <Option>dhaka</Option>
                        </Select>
                    </div>
                    <div className='w-full '>
                        <DatePicker date={date} setDate={setDate} />
                    </div>
                    <div className='text-center  '>
                        <Button className='bg-primary md:w-1/2'>find Tickets</Button>
                    </div>
                </div>
            </div>
            <div className='hidden md:block' >
                <img src={heder} alt="" width={500} />
            </div>
        </div>
    );
};

export default Hero;