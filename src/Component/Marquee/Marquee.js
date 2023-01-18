import React, { useEffect, useRef } from 'react';
import './Marquee.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const Marquee = () => {
    const marqueRef = useRef(null);
    const innerContainer2 = useRef(null);
    const innerContainer1 = useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    const cls1 = ".marquee-inner-container2";

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.to(innerContainer1.current, 1, {
    //             backgroundColor: 'red',
    //             y: '-10vw'
    //             , scrollTrigger: {
    //                 trigger: innerContainer1.current,
    //                 markers: true,
    //                 start: 'top 80%',
    //                 end: 'bottom 50%',
    //                 scrub: true,
    //                 pin: true

    //             }
    //         })
    //     }, marqueRef)
    //     return () => ctx.revert();
    // }, [])
    return (
      
            <div className='marquee-container'
            data-scroll-section
            data-scroll 
            data-scroll-speed="2"
            
            >
                <div className="marquee-inner-container1"
                ref={innerContainer1}
                >
                    <h1>This is page1 </h1>
                </div>
                <div className="marquee-inner-container2"
                    ref={innerContainer2}
                    
                  
                >
                    <h1>This is page 2</h1>
                </div>
            </div>
        
    )
};

export default Marquee;