import React from 'react';
import Marquee from 'react-fast-marquee';

import building from '../assets/image/bilding.png'
import bus from '../assets/image/bus.png'

const Marque = () => {
    return (
        <div className="relative w-full h-auto overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={building}
                    alt="Building"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Marquee with Bus Image */}
            <Marquee className="relative z-10" speed={50} gradient={false}>
                <img
                    src={bus}
                    alt="Bus"
                    className="w-auto h-20 object-contain"
                />
            </Marquee>
        </div>
    );
};

export default Marque;
