import React from 'react';
import Temp1 from '../Temp1/Temp1';

const GarlleryPage1 = () => {
    return (
        <>
            <div className='GarlleryPage1-container'
                data-scroll-section>
                <div className=' flex flex-col items-start'>
                    <div className="gallary-photo-container1  ">
                      
                            <img
                                data-scroll
                                data-scroll-speed="-3"
                                src="https://source.unsplash.com/BxQeZ9UQQhA" alt="" />
                        
                 
                    <h1 className='bg-fuchsia-400'>Hello world</h1>
                    </div>
                </div>
                <div className=''>
                    <Temp1></Temp1>
                    <div className="gallary-photo-container m-auto lg:ml-36 ">

                        <img
                            data-scroll
                            data-scroll-speed="-4"
                            src="https://source.unsplash.com/4BkcYeQruFE" alt="" />
                    </div>
                    <Temp1></Temp1>
                </div>
                <div className=' flex justify-center lg:justify-end m-auto lg:pr-36 lg:m-0'>
                    <div className="gallary-photo-container   ">
                        <img
                            data-scroll
                            data-scroll-speed="-4"
                            src="https://source.unsplash.com/zKvJXXbpsxI" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GarlleryPage1;