import React from 'react';
import About2 from '../About/About2';
import './Experiment.css';
const Expertice1 = () => {
    return (
        <div data-scroll-section >
            <div className=' h-[120vh] lg:h-[90vh] pt-5 lg:pt-36 bg-[#1c1c1c] text-white px-6'>
                <div className="experiment1-container w-[100vw] h-[100vh] lg:h-[40vh]">
                    <div className="experiment1-tiltle ">
                        <h1>Lorem ipsum </h1>
                    </div>
                    <div className="experiment1-hr"></div>
                    <div className="experiment1-content grid grid-cols-1 lg:grid-cols-8 lg:gap-2 ">
                        <div className="experiment2-content-1st  lg:col-span-4 lg:row-span-2 lg:mt-8">
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis quos suscipit.<div className='inline-block  underlines italic'>
                                marketing strategies
                            </div>  Possimus unde maxime, inventore qui voluptates ducimus quisquam  </h1>

                        </div>
                        <div className="experiment2-content-2nd  lg:col-span-3 lg:col-start-7 flex flex-col justify-center">
                            <h1 className='text-2xl font-bold '>My motive</h1>
                            <p className='w-5/6'>To wake up human emotion is the highest level of art</p>
                        </div>
                        <div className="flex items-end experiment2-content-2nd  lg:col-span-3 lg:col-start-7">
                            <div className=' '>
                                <h1 className='text-2xl font-bold'>
                                <div className='inline-block  underlines '>
                                Usually I worked with
                                </div>
                                    </h1>
                                <ul className='text-xl'>
                                  
                                    <li>Javascript</li>
                                    <li>react</li>
                                    <li>Redux</li>
                                    <li>Gsap</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="experiment1-hr"></div>
                </div>
            </div>
        </div>
    );
};

export default Expertice1;