import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
import './Stategy.css'
const StrategyTable = (props) => {

    const index = props.index;
    const data = props.data;

    const stategyRef = useRef(null)
    const tl = gsap.timeline();
    useEffect(() => {
        const clsh1 = ".table-container"
        const el = document.querySelectorAll('.table-container')

        // el.forEach(e=>{console.log(e)})


    }, [])
    return (

        <>
            <div ref={stategyRef}>

                <div className='table-container'>
                    <h1 className='text-3xl stategy-table-h1 mb-4 '

                    >{data.title}
                    </h1>

                    <div className='flex items-center relative '>
                        <div className="line "></div>
                        <h1 className='stategy-table-h1 absolute right-0 bottom-0 invisible lg:visible '
                            data-scroll data-scroll-speed="1.2"
                        ><span

                        >0</span>
                            <span>{index + 1}</span></h1>
                    </div>

                    <p className='lg:w-3/6 stategy-table-p lg:mb-12 mt-2  '>{data.content}</p>
                </div>
            </div>
            {/* <h1>hellow world</h1> */}
        </>

    );
};

export default StrategyTable;