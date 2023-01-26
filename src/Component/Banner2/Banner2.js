import gsap from 'gsap';
import React, { useEffect } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3 } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Banner2.css';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
const Banner2 = () => {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);


    // var rule = CSSRulePlugin.getRule(".box1::after");
    const tl = gsap.timeline();
    // const cls1 = ".box1"
    const cls1 = ".img-cover"

    // var boxAfter = window.getComputedStyle(box, "::after");




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
                    start: 'top 30%',
                    // end: 'bottom 50%',
                    // scrub: true

                }
            })


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
                        {/* <img src="https://source.unsplash.com/-lFhGNUVnJ4" alt="" /> */}
                        <img src="https://source.unsplash.com/xpzlSBYKGMQ" alt="" />
                        <div className="img-cover"></div>
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