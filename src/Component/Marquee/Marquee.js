import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Marquee.css';
import { TimelineMax, Power3 } from 'gsap/all';
import StategyMain from '../Strategy/StategyMain';
const Marquee = () => {
    const marqueeRef = useRef(null);
    const tranferRef = useRef(null);
    const tranferRef1 = useRef(null);
    const tl = gsap.timeline({ repeat: -1 })
    // let cls1 = 
    //------------ precode---
    // ------------------end-----precode ---

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scroll = LocamotiveScrollHook();
            scroll.on("scroll", ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(tranferRef1.current, {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                // pinType: document.querySelector(cls1).style.transform ? "transform" : "fixed"
            });
            ScrollTrigger.addEventListener("refresh", () => scroll.update());
            ScrollTrigger.defaults({ scroller: tranferRef1.current });

            // -----------------------animation---------------

            gsap.to(tranferRef1.current, 1,
                {

                    ease: Power3.easeInOut,

                    scrollTrigger: {
                        trigger: tranferRef1.current,
                        start: 'top 60%',
                        end: 'bottom 142%',
                        scrub: true,
                        pin: true

                    }

                })
            tl.to('.marquee-page2-h1', 20, { x: '-520vw' })
        }, marqueeRef)
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className=' marque-container relative' data-scroll-section ref={marqueeRef}>
                <h1 className='text-3xl text-white'>This is backgroundColor</h1>
                <div className="marquee-page1 " ref={tranferRef1}>
                    <StategyMain></StategyMain>
                </div>


                <div className="marquee-page2" ref={tranferRef}>
                    <h1 className='marquee-page2-h1 border'> My Name is Abdullah. I am a Web developer. </h1>
                </div>

            </div>
        </>
    );
};

export default Marquee;