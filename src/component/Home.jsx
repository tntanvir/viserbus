import React from 'react';
import Hero from './Hero';
import Marque from './Marque';
import Steps from './Steps';
import Amenities from './Amenities';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='min-h-screen '>
            <Hero />
            <Marque />
            <Steps />
            <Amenities />
            <Testimonials />

        </div>
    );
};

export default Home;