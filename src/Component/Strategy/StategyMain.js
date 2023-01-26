
import React, { useEffect, useRef } from 'react';
import './Stategy.css'
import StrategyTable from './StrategyTable';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
const StategyMain = () => {
    const stategydata = [
        {
            title: 'Define your website goals ',
            content: " Our video will introduce you to the basics and get you up and running quickly. "
        },
        {
            title: 'Create on-site funnel',
            content: " An on-site funnel is a series of steps you present to website visitors to guide them closer to working with your business. "
        },
        {
            title: 'Define target audience',
            content: " Many businesses miss this step in their website development process. Or, they make their target audience category too broad."
        },
        {
            title: 'Research keywords',
            content: "Before you start planning or writing any content, use keyword research tools to figure out what relevant keywords you want your business to rank for"
        },
        {
            title: 'Create pages and posts',
            content: " Many businesses miss this step in their website development process. Or, they make their target audience category too broad."
        },

    ]
    const tl = gsap.timeline();
    const stategyRef = useRef(null)
    useEffect(() => {
        // console.log(stategyRef.current.children[0])

        const clsh1 = ".table-container"
        const el = document.querySelectorAll('.table-container')
        // ----------------------------scrolltriggersetup-------------------------------------------------
        const scroll = LocamotiveScrollHook();
        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(el, {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) : scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // pinType: document.querySelector(el).style.transform ? "transform" : "fixed"
        });
        ScrollTrigger.addEventListener("refresh", () => scroll.update());
        ScrollTrigger.defaults({ scroller: el });

        // ----------------------------scrolltriggersetup-------------------------------------------------
        // ----------------------------Startanimation-------------------------------------------------
        // const ctx = gsap.context(() => {
        //     tl.from(el, 0.5, { y: 50, opacity: 0, stagger: 0.08 })
        //     tl.to(el, 0.5, {
        //         y: 0, opacity: 1, stagger: 0.08,
        //     })
        // }, stategyRef)
        // return () => ctx.revert();



        const ctx = gsap.context(() => {
            tl.from(el, 0.5, { y: 50, opacity: 0, stagger: 0.08 })
            tl.to(el, 0.5, {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                delay:0.5,
                scrollTrigger: {
                    trigger: el,
                    // markers: true,
                    start: "top 40%",
                    scrub: true
                    // end: "bottom 50%"
                }
            })
        }, stategyRef)
        return () => ctx.revert();





    }, [])



    return (
        <div className='flex justify-center items-center bg-[#1c1c1c] text-white pt-36'>
            <main className='stategy grid grid-cols-1 lg:grid-cols-8 gap-2'>
                <div className=' lg:col-span-2 lg:col-start-3'>
                    <h1 className='lg:text-5xl text-3xl pb-12 stategy-h1'
                    // data-scroll
                    // data-scroll-speed="-4"
                    >Process 
                   <span> & </span>
                     service</h1>
                </div>
                <div className=' lg:col-span-3 px-5'>
                    {
                        stategydata.map((e,index)=><StrategyTable key={e.index} index={index+1} data={e}></StrategyTable>)
                    }
                    
                </div>
            </main>
        </div>
    );
};

export default StategyMain;