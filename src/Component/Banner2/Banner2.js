import React from 'react';
import './Banner2.css'
const Banner2 = () => {
    return (
        <div
            data-scroll-section
            className='box-cover lg:px-10 px-3 w-[100vw] h-[150vh] lg:h-[90vh]'>

            <div className="box  grid grid-cols-1 lg:grid-cols-6 lg:gap-5">
                <div className="  box1 row-span-2       lg:row-span-3 lg:col-span-2  flex items-center "> 
                    <div className="box1-img-container ">
                        <img src="https://source.unsplash.com/-lFhGNUVnJ4" alt="" />
                    </div>
                </div>
                <div className="box2  row-start-1  lg:col-span-4 lg:row-span-2  pt-7"> 
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos in eos ex qui eius molestiae fugit optio ipsa minus iusto, </h1>
                </div>
                <div className="box3  lg:col-span-3 flex items-end "> 
                    <p className='lg:w-4/6 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam earum aut ea reprehenderit dolorum illo veniam, cum ipsum fuga aliquid, voluptas reiciendis, debitis ut repudiandae? Magni maxime esse voluptatum!</p>
                </div>
                <div className="box4 flex items-end justify-end lg:pb-8  "> 4
                    <ul>
                        <li>Research</li>
                  
                        <li>Stategy</li>

                        <li> structure</li>
                        <li>development</li>
                    </ul>

                </div>


            </div>

        </div>
    );
};

export default Banner2;