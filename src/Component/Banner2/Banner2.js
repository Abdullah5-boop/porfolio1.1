import React from 'react';
import './Banner2.css'
const Banner2 = () => {
    return (
        <div
            data-scroll-section
            className='box-cover px-10'>
                
            <div className="box  grid grid-cols-6 gap-5">
                <div className="box1 row-span-3 col-span-2  flex items-center ">
                    <div className="box1-img-container ">
                        <img src="https://source.unsplash.com/-lFhGNUVnJ4" alt="" />
                    </div>
                </div>
                <div className="box2  col-span-4 row-span-2 pt-5">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos in eos ex qui eius molestiae fugit optio ipsa minus iusto, </h1>
                </div>
                <div className="box3  col-span-3 flex items-end">
                    <p className='w-4/6 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam earum aut ea reprehenderit dolorum illo veniam, cum ipsum fuga aliquid, voluptas reiciendis, debitis ut repudiandae? Magni maxime esse voluptatum!</p>
                </div>
                <div className="box4 flex items-end justify-end pb-8  ">
                    <ul>
                        <li>Research</li>
                        {/* <li>research</li> */}
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