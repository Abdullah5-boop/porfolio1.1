import React from 'react';
import './Gallery2.css';
const Gallery2 = () => {
    return (
        <>
            <div className='gallery2-container ' data-scroll-section>
                <div className='gallery2-inner-comtaier grid grid-cols-1 lg:grid-cols-12 gap-2 py-12'>

                    <div className=" lg:col-span-3 lg:row-span-1 lg:col-start-2 flex flex-col ">
                        <div className='gallery-inner-container'>
                            <div className="gallery2-img-container">
                                <img
                                    data-scroll
                                    data-scroll-speed='2'
                                    src="https://source.unsplash.com/93lIGb_T1jU" alt="" />
                            </div>
                            <div className='flex justify-between'>
                            <h1 className='text-2xl gallery2-h1'>Travel Agency</h1>
                            <h1>React project</h1>
                        </div>

                        </div>

                    </div>
                    <div className=" lg:col-span-5 lg:row-span-1 lg:row-start-3 lg:col-start-7 flex flex-col ">
                        <div className='gallery2-img-container2'>
                            <img
                                data-scroll
                                data-scroll-speed='2'
                                src="https://source.unsplash.com/2qcAafaVaSs" alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl gallery2-h1'>Travel Agency</h1>
                            <h1>React project</h1>
                        </div>
                    </div>

                    <div className=' lg:row-start-7 lg:col-start-2 lg:row-span-5 lg:col-span-4 flex flex-col'>
                        <div className="gallery-img-container3">
                            <img
                                data-scroll
                                data-scroll-speed='2'
                                src="https://source.unsplash.com/RUe4ZHk0UVg" alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl gallery2-h1'>Travel Agency</h1>
                            <h1>React project</h1>
                        </div>
                    </div>






                </div>
            </div>
        </>
    );
};

export default Gallery2;