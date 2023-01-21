import React, { useEffect, useRef } from 'react';
import About from '../Component/About/About';
import gsap from 'gsap';
import Marquee from '../Component/Marquee/Marquee';
import Temp1 from '../Component/Temp1/Temp1';
import { Power3 } from 'gsap';
import './join1.css'
const Join1 = () => {
    const tl = gsap.timeline({ repeat: -1 })
    const joinref = useRef(null);
    const cls1 = ".join-inner-container4"

    useEffect(() => {
        tl.to(cls1, 6, { x: '-150vw', repeat: -1 })

    }, [])

    return (

        <div className="join-main-container " data-scroll-section>
            {/* <div className="join-container ">
                <div className="join-inner-container">
                    <h1>I am Abdullah. I am good boy.I live in Bagladesh</h1>
                </div>

            </div> */}

            {/* <div>
                <div className="join-container2">
                    <h1>Hello</h1>
                </div>
            </div> */}
            {/* <div className="join-container3">
                <h1 className='join-container3-h1'>
                    I am Abdullah.
                </h1>
            </div> */}
            <div className="join-container4">
                <div className="join-inner-container4">
                    <h1>Lorem ipsum dolo</h1>
                </div>
            </div>

        </div>
    );
};

export default Join1;