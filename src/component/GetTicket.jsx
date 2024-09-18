// import { Option, Select } from '@material-tailwind/react';
// import React from 'react';
// import DatePicker from './DatePicker';
// import { Button } from '@material-tailwind/react';
// import location from '../../location.json'
// import { Chip } from '@material-tailwind/react';
// import { useState } from 'react';


// const GetTicket = () => {
//     const [date, setDate] = useState();
//     const [pickup, setPickup] = useState();
//     const [dropoff, setDropoff] = useState();

//     const findTicket = () => {
//         //api call to get ticket
//         console.log('findTicket', pickup, dropoff, date)
//         //set ticket data in state
//         //...
//     }

//     return (
//         <div className='min-h-screen px-20'>
//             <div className='w-full p-7   flex flex-col gap-4 '>
//                 <div className='flex gap-3'>
//                     <Select value={pickup} onChange={(e) => setPickup(e)} label='Pickup Point'>
//                         <Option value='Rangpur'>Rangpur</Option>
//                         <Option value='Dhaka'>Dhaka</Option>
//                         <Option value='Dinajpur'>Dinajpur</Option>
//                     </Select>
//                     <Select value={dropoff} onChange={(e) => setDropoff(e)} label='Pickup Point'>
//                         <Option value='Rangpur'>Rangpur</Option>
//                         <Option value='Dhaka'>Dhaka</Option>
//                         <Option value='Dinajpur'>Dinajpur</Option>
//                     </Select>
//                     <DatePicker date={date} setDate={setDate} />
//                     <Button className='bg-primary w-1/2' onClick={() => findTicket()}>find Tickets</Button>
//                 </div>

//             </div>

//             <div>
//                 <div>
//                     {
//                         location.map((e, i) => (
//                             <div key={i} className='p-4 shadow-md rounded-md flex flex-col gap-4'>
//                                 <div className='flex justify-between'>
//                                     <h1>{e.bus_name}</h1>
//                                     <p>{e.price}</p>
//                                 </div>
//                                 <div className='flex justify-between'>
//                                     <p>Seat Layout - 2 x 2</p>
//                                     <div className='flex gap-2'>
//                                         <div>
//                                             <h1>{e.pickup_point}</h1>
//                                             <h1>{e.pickup_time}</h1>
//                                         </div>
//                                         <div>
//                                             <h1>{e.dropoff_point}</h1>
//                                             <h1>{e.dropoff_time}</h1>
//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className='flex justify-between'>
//                                     <div>
//                                         <h1>{e.bus_type}</h1>

//                                     </div>
//                                     <Button className='bg-primary'>select seat </Button>

//                                 </div>
//                                 <hr className="my-8 border-blue-gray-100" />
//                                 <div className='flex gap-4'>
//                                     <div>
//                                         <h1>Facilities - </h1>
//                                     </div>
//                                     <div className='flex gap-3'>
//                                         {
//                                             e.facilities.length > 0 && (e.facilities).map((e, i) => <Chip key={i} variant="ghost" value={e} />)
//                                         }
//                                     </div>
//                                 </div>

//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetTicket;



import { Option, Select } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import DatePicker from './DatePicker';
import { Button } from '@material-tailwind/react';
import locationData from '../../location.json'; // Import JSON data
import { Chip } from '@material-tailwind/react';

const GetTicket = () => {
    const [date, setDate] = useState();
    const [pickup, setPickup] = useState();
    const [dropoff, setDropoff] = useState();
    const [pickupOptions, setPickupOptions] = useState([]);
    const [dropoffOptions, setDropoffOptions] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState(locationData); // Initialize with all data

    useEffect(() => {
        // Extract unique pickup and dropoff points from location data
        const pickupPoints = [...new Set(locationData.map(e => e.pickup_point))];
        const dropoffPoints = [...new Set(locationData.map(e => e.dropoff_point))];
        setPickupOptions(pickupPoints);
        setDropoffOptions(dropoffPoints);
    }, []);

    const findTicket = () => {
        const selectedDate = date ? new Date(date).toISOString().split('T')[0] : null; // Convert the date to 'YYYY-MM-DD' format
        console.log(selectedDate);

        const filtered = locationData.filter(ticket => {
            // Convert JSON date_time to 'YYYY-MM-DD' format for comparison
            const ticketDate = new Date(ticket.date_time).toISOString().split('T')[0];

            const isPickupMatch = pickup ? ticket.pickup_point === pickup : true;
            const isDropoffMatch = dropoff ? ticket.dropoff_point === dropoff : true;
            const isDateMatch = selectedDate ? ticketDate === selectedDate : true;

            return isPickupMatch && isDropoffMatch && isDateMatch;
        });

        // Set filtered data or all data if no filters are applied
        console.log(filtered);
        setFilteredTickets(filtered.length > 0 ? filtered : locationData);
    };


    return (
        <div className='min-h-screen px-20'>
            <div className='w-full p-7 flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <Select value={pickup} onChange={(e) => setPickup(e)} label='Pickup Point'>

                        {pickupOptions.map((point, index) => (
                            <Option key={index} value={point}>{point}</Option>
                        ))}
                    </Select>
                    <Select value={dropoff} onChange={(e) => setDropoff(e)} label='Dropoff Point'>

                        {dropoffOptions.map((point, index) => (
                            <Option key={index} value={point}>{point}</Option>
                        ))}
                    </Select>
                    <DatePicker date={date} setDate={setDate} />
                    <Button className='bg-primary w-1/2' onClick={findTicket}>Find Tickets</Button>
                </div>

            </div>

            <div>
                <div>
                    {filteredTickets.map((e, i) => (
                        <div key={i} className='p-4 shadow-md rounded-md flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <h1>{e.bus_name}</h1>
                                <p>{e.price}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Seat Layout - 2 x 2</p>
                                <div className='flex gap-2'>
                                    <div>
                                        <h1>{e.pickup_point}</h1>
                                        <h1>{e.pickup_time}</h1>
                                    </div>
                                    <div>
                                        <h1>{e.dropoff_point}</h1>
                                        <h1>{e.dropoff_time}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <h1>{e.bus_type}</h1>
                                </div>
                                <Button className='bg-primary'>Select Seat</Button>
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
