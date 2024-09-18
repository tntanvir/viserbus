import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='relative '>
            <div className='absolute'>
                <img src="/src/assets/image/bilding.png" alt="" srcset="" />
            </div>

            <Marquee className='relative '>
                <img src="/src/assets/image/bus.png" alt="" srcset="" />
            </Marquee>
        </div>
    );
};

export default Marque;