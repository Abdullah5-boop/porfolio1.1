import React from 'react';
import './About2.css';
const About2 = () => {
    return (
        <div data-scroll-section>
            <div className='about2-container flex justify-center items-center'>
                <div className=" grid grid-cols-1 lg:grid-cols-7 gap-5">
                    <div className='lg:col-span-3 lg:row-span-2 flex justify-center  '>
                        <div className=' '>
                            {/* <h1 className='text-center text-6xl banner2-h1'></h1> */}
                        </div>
                    </div>
                    <div className=' lg:col-span-4 lg:row-span-2 lg:flex justify-center items-center banner2-p1 '>
                        <p>
                            "Our drive is to make your brand stand out with meaning and purpose.  Our vehicle is exceptional visual communication, digital literacy and contemporary <div className='inline-block  underlines italic'>
                                marketing strategies
                            </div> . Our route is having an interdisciplinary approach that generates solutions to complex problems".

                        </p>
                    </div>
                    <div className='  lg:col-span-3 lg:col-start-2 lg:flex items-end '>
                        <p className='banner2-p2 lg:mt-14'>YOUR BRAND’S JOURNEY STARTS HERE AND TOGETHER
                            WE WILL TRAVEL FURTHER THAN YOU HAVE EVER
                            IMAGINED!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About2;