import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
import './About2.css';
const About2 = () => {
    const aboutref = useRef(null);
    useEffect(() => {
        const cls1 = '.text1'
        const ctr = gsap.context(() => {
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





            gsap.to('.text1 p', {
                backgroundPositionX: "0%",
                // backgroundPositionY: "10%",
                stagger: 1,
                scrollTrigger: {
                    trigger: '.text1 p',
                    scrub: 1,
                    start: "top 70%",
                    end: "bottom 50%",
                },
            });
        }, aboutref);
        return () => ctr.revert();
    })
    return (
        <div data-scroll-section ref={aboutref}>
            <div className='about2-container flex justify-center items-center'>
                <div className=" grid grid-cols-1 lg:grid-cols-7 gap-5">
                    <div className='lg:col-span-3 lg:row-span-2 flex justify-center  '>
                        <div className=' '>
                            {/* <h1 className='text-center text-6xl banner2-h1'></h1> */}
                        </div>
                    </div>
                    <div className=' text1 lg:col-span-4 lg:row-span-2  banner2-p1 '>
                        <p className=' inline'>
                            My name is Abdullah Al Mahmood. I am a web developer. I have built many types of font-ends and back-ends designs. My current location is Dhaka, Bangladesh. I like to build craft solid and scalable front-end and 
back-ends products with great user experiences.

                        </p>
                        {/* <p>
                            "Our drive is to make your brand stand out with meaning2

                        </p> */}
                    </div>
                    <div className='  lg:col-span-3 lg:col-start-2 lg:flex items-end '>
                        <p className='banner2-p2 lg:mt-14'>YOUR BRAND’S JOURNEY STARTS HERE AND TOGETHER
                            WE WILL TRAVEL<div className='inline-block  underlines italic mx-2'> FURTHER THAN YOU HAVE EVER
                            </div>
                            IMAGINED!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About2;