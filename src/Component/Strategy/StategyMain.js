
import React, { useEffect, useRef } from 'react';
import './Stategy.css'
import StrategyTable from './StrategyTable';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
const StategyMain = () => {
    const stategydata = [
        {
            title: 'Discovery ',
            content: "I focus thoroughly researched and evaluated leading to meaningful partnership and communication. "
        },
        {
            title: 'Strategy',
            content: "Create e strong strategy and discuss it with clients."
        },
        {
            title: 'Design & Identity',
            content: "Design uniquely and give priority user experience."
        },
     
        {
            title: 'Implementation',
            content: "Define reliable technology base on the designs"
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
        <div className='flex justify-center items-center bg-[#1c1c1c] text-white pt-36 mb-100'>
            <main className='stategy grid grid-cols-1 lg:grid-cols-8 gap-2 h-[200vh] lg:h-[100vh]'>
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