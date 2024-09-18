import React from 'react';
import { AccordionCustomIcon } from './Accoding';
import bus from '../assets/image/about.jpg'

const About = () => {
    return (
        <div className='min-h-screen md:px-20 px-3 pt-10'>
            <div className='flex md:flex-row flex-col justify-between gap-5'>
                <div className=' md:w-1/2 w-full'>
                    <h1 className='text-4xl font-bold pb-10'>Know Few Words About Autobus</h1>
                    <p className='flex flex-col gap-10 '>
                        <p className='text-1.5xl font-semibold'>
                            Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sit reprehenderit non voluptas quam quod facilis, doloribus impedit magni. Numquam ipsum placeat ullam alias temporibus non quas aperiam odio pariatur.

                        </p>
                        <p className='leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eveniet inventore blanditiis maxime doloremque minima. Quisquam, ex! Architecto laudantium culpa cupiditate hic facere est magni, possimus repudiandae, rerum eius omnis.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus illum quis beatae quam officia ad.ri sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus illum quis beatae quam officia ad.</p></p>
                </div>
                <div className=' md:w-1/2 w-full'>
                    <img src={bus} alt="" className='rounded-md' />
                </div>
            </div>
            <div className='py-9'>
                <h1 className='text-3xl py-4'>About Us</h1>
                <p className='leading-7'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>
            </div>

            <div>
                <h1 className='text-3xl py-4'> Why Make Bus Reservations With AutoBus</h1>
                <p className='leading-7  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>

                <ul className='list-disc pl-10 pt-3'>
                    <li>Free Cancellation</li>
                    <li>Instant Refunds</li>
                    <li>Easy & Quick Bus Booking</li>
                    <li>Exciting Cashback & Bus Offers</li>
                    <li>Best Price Assured</li>
                    <li>24/7 Customer Assistance</li>
                </ul>
            </div>

            <div className='flex justify-center flex-col items-center pt-20'>
                <div className=' md:w-1/2 w-full flex items-center flex-col text-center gap-3' >
                    <h1 className='text-4xl font-bold'> Frequently Asked Questions</h1>
                    <p>Nobis minus earum perferendis nemo cupiditate optio, rem neque incidunt quia laborum ut praesentium corporis quam exercitationem, atque illo aut excepturi cum.</p>
                </div>
                <div className='py-10'>
                    <AccordionCustomIcon />
                </div>
            </div>
        </div>
    );
};

export default About;