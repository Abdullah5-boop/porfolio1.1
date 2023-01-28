import gsap from 'gsap';
import React, { useEffect } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3 } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Banner2.css';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
const Banner2 = () => {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
    const tl = gsap.timeline();
    const cls1 = ".img-cover"
    useEffect(() => {

        const scroll = LocamotiveScrollHook();
        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(cls1, {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) : scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector(cls1).style.transform ? "transform" : "fixed"
        });
        ScrollTrigger.addEventListener("refresh", () => scroll.update());
        ScrollTrigger.defaults({ scroller: cls1 });





        // -----------------------animation---
        const ctx = gsap.context(() => {
            tl.to(cls1, 1.5, {
                ease: Power3.easeInOut,
                transformOrigin: 'top',
                height: '0%',
                scrollTrigger: {
                    trigger: cls1,
                    start: 'top 80%',
                    // end: 'bottom 50%',
                    // scrub: true

                }
            })
            // tl.to('.temp1', 1, {
            //     backgroundColor: 'white',
            //     delay: 0.5,
            //     scrollTrigger: {
            //         trigger: '.temp1',
            //         start: 'top 100%',
            //         scrub: true,
            //     }

            // })


        })
        return () => ctx.revert()
    }, [])
    return (
        <div
            data-scroll-section
            className='box-cover lg:px-10 px-3 w-[100vw] h-[150vh] lg:h-[90vh] mt-64 '>

            <div className="box  grid grid-cols-1 lg:grid-cols-6 lg:gap-5">
                <div id="box1" className="  box1 row-span-2 lg:row-span-3 lg:col-span-2  flex items-center ">

                    <div className="box1-img-container py-5  ">
                        {/* <img src="https://i.ibb.co/SJgnvyk/IMG-20230128-WA0003.jpg" alt="" /> */}
                        <img src="https://i.ibb.co/Rjg9V09/IMG-20230128-230455.jpg" alt="" />
                        <div className="img-cover"></div>
                    </div>

                </div>
                <div className="box2  row-start-1  lg:col-span-4 lg:row-span-2  pt-7">
                    <h1 className='text-xl'>my favorite Line</h1>
                    <h1>
                        Optimism is an occupational hazard of programming: feedback is the treatment. ~
                         “ Kent Beck ”

                    </h1>
                </div>
                <div className="box3  lg:col-span-3 flex items-end ">
                    <p className='lg:w-4/6 pb-8'>
                        Great user experience websites come for this step.
                    </p>
                </div>
                <div className="box4 flex items-end justify-end lg:pb-8  ">
                    <ul>
                        <li>Research</li>

                        <li>Stategy</li>

                        <li> Structure</li>
                        <li>Development</li>
                    </ul>

                </div>


            </div>

        </div>
    );
};

export default Banner2;