



import { Option, Select } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import DatePicker from './DatePicker';
import { Button } from '@material-tailwind/react';
import locationData from '../../location.json';
import { Chip } from '@material-tailwind/react';
import { FaArrowRight, FaBusAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GetTicket = () => {
    const [date, setDate] = useState();
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [pickupOptions, setPickupOptions] = useState([]);
    const [dropoffOptions, setDropoffOptions] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState(locationData);

    useEffect(() => {
        const pickupPoints = [...new Set(locationData.map(e => e.pickup_point))];
        const dropoffPoints = [...new Set(locationData.map(e => e.dropoff_point))];
        setPickupOptions(pickupPoints);
        setDropoffOptions(dropoffPoints);
    }, []);

    const findTicket = () => {
        const selectedDate = date ? new Date(date).toISOString().split('T')[0] : null;


        const filtered = locationData.filter(ticket => {
            // Convert JSON date_time to 'YYYY-MM-DD' format for comparison
            const ticketDate = new Date(ticket.date_time).toISOString().split('T')[0];

            const isPickupMatch = pickup ? ticket.pickup_point === pickup : true;
            const isDropoffMatch = dropoff ? ticket.dropoff_point === dropoff : true;
            const isDateMatch = selectedDate ? ticketDate === selectedDate : true;

            return isPickupMatch && isDropoffMatch && isDateMatch;
        });


        setFilteredTickets(filtered.length > 0 ? filtered : locationData);
    };

    return (
        <div className='min-h-screen px-3 md:px-20'>
            <div className='w-full p-7 flex justify-center flex-col md:flex-row gap-4 shadow-md rounded-md  '>
                <div className='flex justify-center flex-col lg:flex-row w-full  gap-3'>
                    <Select value={pickup} onChange={(e) => setPickup(e.target.value)} label='Pickup Point' >
                        {pickupOptions.map((point, index) => (
                            <Option key={index} value={point}>{point}</Option>
                        ))}
                    </Select>
                    <Select value={dropoff} onChange={(e) => setDropoff(e.target.value)} label='Dropoff Point'>
                        {dropoffOptions.map((point, index) => (
                            <Option key={index} value={point}>{point}</Option>
                        ))}
                    </Select>
                    <DatePicker date={date} setDate={setDate} />
                    <Button className='bg-primary w-1/2' onClick={findTicket}>Find Tickets</Button>
                </div>
            </div>

            <div className='py-4'>
                <div className=' flex gap-3 flex-col'>
                    {filteredTickets.map((e, i) => (
                        <div key={i} className='p-4 shadow-md rounded-md flex flex-col gap-4 '>
                            <div className='flex  justify-between '>
                                <h1 className='text-2xl md:text-4xl'>{e.bus_name}</h1>
                                <p className='font-semibold text-primary'>${e.price}</p>
                            </div>
                            <div className='flex md:flex-row flex-col justify-between  gap-1'>
                                <p>Seat Layout - 2 x 2</p>
                                <div className='flex justify-between   gap-5'>
                                    <div>
                                        <h1>{e.pickup_point}</h1>
                                        <h1>{e.date_time}  <span className='font-semibold'>{e.pickup_time}</span></h1>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <FaArrowRight className='text-2xl text-primary' />
                                    </div>
                                    <div>
                                        <h1>{e.dropoff_point}</h1>
                                        <h1>{e.date_time} <span className='font-semibold'>{e.dropoff_time}</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaBusAlt className='text-2xl text-yellow-900' />
                                    <h1> {e.bus_type}</h1>
                                </div>
                                <Link to={`/ticket/${e.id}`}>
                                    <Button className='bg-primary'>Select Seat</Button>
                                </Link>
                            </div>
                            <hr className="my-8 border-blue-gray-100" />
                            <div className='flex gap-4'>
                                <div>
                                    <h1>Facilities - </h1>
                                </div>
                                <div className='flex gap-3'>
                                    {e.facilities.length > 0 && e.facilities.map((facility, i) => (
                                        <Chip key={i} variant="ghost" value={facility} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetTicket;
