import React, { useEffect, useRef } from 'react';
import './Banner1.css';
import gsap from 'gsap';
import { Power3 } from 'gsap/all';
import arrow from '../img/arrow_forward_FILL0_wght400_GRAD0_opsz48.png'
const Banner1 = () => {
    const cls1 = ".banner-1st-line"
    const bannerRef = useRef(null);
    const fstln = useRef(null)
    const scndtln = useRef(null)
    const thirdrf = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {


            gsap.from([...fstln.current.children], 1, { y: 1000 })
            gsap.to([...fstln.current.children], 1, { y: 0, stagger: 0.02 })
            gsap.from([...scndtln.current.children], 1, { delay: 0.5, y: 1000 })
            gsap.to([...scndtln.current.children], 1, { y: 0, delay: 0.45, stagger: 0.02 })
            gsap.from([...thirdrf.current.children], 1, { delay: 0.5, y: 1000 })
            gsap.to([...thirdrf.current.children], 1, { y: 0, delay: 1, stagger: 0.02 })


        }, bannerRef)
        return () => ctx.revert();
    }, [])
    return (

        <div
            data-scroll-section
            ref={bannerRef}
            className='banner1-container '>
            <div className='banner1-inner-container flex justify-center items-center '>
                <div>
                    <div className='temp'>
                        <h1 className='banner-1st-line flex'
                            ref={fstln}
                        >
                            {/* Systems that */}

                            <div>S</div>
                            <div>y</div>
                            <div>s</div>
                            <div>t</div>
                            <div>e</div>
                            <div className='mr-12'>m</div>
                            <div >t</div>
                            <div>h</div>
                            <div>a</div>
                            <div>t</div>
                        </h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className=' h1-2nd-line pl-5 lg:pl-64 flex'
                            ref={scndtln}
                        >
                            <div>c</div>
                            <div>o</div>
                            <div>n</div>
                            <div>n</div>
                            <div>e</div>
                            <div>c</div>
                            <div>t</div>
                        </h1>
                        <p className='pl-12 p-2nd-line invisible lg:visible'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='flex items-center '>
                        <p className='p-3nd-line  invisible lg:visible
                             '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit..
                        </p>
                        <h1 className=' h1-3nd-line flex'
                            ref={thirdrf}
                        >
                            <div>P</div>
                            <div>e</div>
                            <div>o</div>
                            <div>p</div>
                            <div>l</div>
                            <div>e</div>
                        </h1>
                    </div>
                    <section className='banner-circle1-container'>
                        {/* <div className="banner-circle1">
                                <img src={arrow} alt="" />
                             
                            </div> */}

                    </section>
                </div>
            </div>
            <div className="hr"></div>
            {/* <div className='flex justify-around font-serif'>
                <p>About</p>
                <p>About</p>
                <p>About</p>
            </div> */}
        </div>


    );
};

export default Banner1;