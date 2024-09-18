import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BusData from '../../location.json'; // Assuming this is where bus data is stored
import { GiSteeringWheel } from 'react-icons/gi';

const seatRows = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4'],
    ['D1', 'D2', 'D3', 'D4'],
    ['E1', 'E2', 'E3', 'E4'],
    ['F1', 'F2', 'F3', 'F4'],
    ['G1', 'G2', 'G3', 'G4'],
];


const Booking = () => {
    const { id } = useParams();
    const [busDetails, setBusDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrice, setSeatPrice] = useState(null);

    useEffect(() => {
        const bus = BusData.find(data => data.id === Number(id));
        setBusDetails(bus);
        setSeatPrice(bus.price)
    }, [id]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const totalPrice = selectedSeats.length * seatPrice;

    return (
        <div className="min-h-screen">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-start min-h-screen md:p-6 p-3 ">
                {/* Bus Details Section */}
                <div className="border p-4 rounded-lg mr-8 md:w-1/3 w-full bg-gray-100 ">
                    {busDetails && (
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl font-bold mb-2">Bus Details</h2>
                            <p><strong>Bus ID:</strong> {busDetails.id}</p>
                            <p><strong>Bus Name:</strong> {busDetails.bus_name}</p>
                            <p><strong>Type:</strong> {busDetails.bus_type}</p>
                            <p><strong>Pickup Pointer:</strong> {busDetails.pickup_point}</p>
                            <p><strong>Pickup Time:</strong> {busDetails.pickup_time}</p>
                            <p><strong>Dropoff Pointer:</strong> {busDetails.dropoff_point}</p>
                            <p><strong>Pickup Time:</strong> {busDetails.dropoff_time}</p>
                        </div>
                    )}
                </div>

                {/* Seat Selection Section */}
                <div className="border p-4 rounded-lg mr-8 md:w-1/3 w-full bg-gray-100">
                    <div className="text-center mb-4 font-bold">FRONT</div>
                    <div className="flex justify-between mb-4">
                        <h1>DOOR</h1>
                        <GiSteeringWheel className="text-5xl" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {seatRows.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((seat, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        onClick={() => handleSeatClick(seat)}
                                        className={`w-16 h-16 flex items-center justify-center border rounded-lg cursor-pointer ${selectedSeats.includes(seat) ? 'bg-primary' : 'bg-white'
                                            }  ${selectedSeats.includes(seat) ? 'text-white' : 'text-black'
                                            }`}
                                    >
                                        {seat}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Selected Seats and Total Price Section */}
                <div className="border  rounded-lg bg-gray-100 md:w-1/3 w-full">
                    <div className="font-bold mb-4 bg-primary p-4 text-white rounded-t-lg">Selected Seats</div>
                    {selectedSeats.length > 0 ? (
                        <>
                            <div>
                                {selectedSeats.map(seat => (
                                    <div key={seat} className="mb-2 text-lg font-medium flex justify-between hover:bg-blue-gray-200/30 p-3 rounded-md cursor-pointer">
                                        <p>{seat}</p>  <p>${seatPrice}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 font-bold text-lg flex justify-between  bg-primary p-4 text-white rounded-b-lg">
                                <p>Total Price:</p> <p>${totalPrice}</p>
                            </div>
                        </>
                    ) : (
                        <div>No seats selected</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
