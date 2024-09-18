import { Option, Select } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import React from 'react';
import DatePicker from './DatePicker';
import { useState } from 'react';

const Hero = () => {
    const [date, setDate] = useState();

    const [pickup, setPickup] = useState();
    const [dropoff, setDropoff] = useState();

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-4 px-20 pb-7 '>
                <h1 className='text-5xl font-bold pt-28'>Get Your Ticket Online, <br /> Easy and Safely</h1>

                <Button className='bg-primary w-48'>Get ticket now</Button>
                <h3 className='text-3xl font-semibold'>Choose Your Ticket</h3>
                <div className='w-fit p-7 border  flex flex-col gap-4 shadow-lg rounded-md'>
                    <div className='flex gap-3'>
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
                    <div className='text-center '>
                        <Button className='bg-primary w-1/2'>find Tickets</Button>
                    </div>
                </div>
            </div>
            <div>
                <img src="/src/assets/image/haderimg.png" alt="" srcset="" width={500} />
            </div>
        </div>
    );
};

export default Hero;