import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='relative '>
            <div className='absolute'>
                <img src="/src/assets/script.viserlab.com/Viserbus_-_Home/10012.png" alt="" srcset="" />
            </div>

            <Marquee className='relative '>
                <img src="/src/assets/script.viserlab.com/Viserbus_-_Home/10005.png" alt="" srcset="" />
            </Marquee>
        </div>
    );
};

export default Marque;