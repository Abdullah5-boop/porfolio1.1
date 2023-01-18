import gsap from 'gsap';
import { Power3 } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import './Nav1.css';

const Nav1 = () => {
    let pageclr = '#222222'
    const [active, setactive] = useState(false);
    const navPageRef = useRef(null)

    const hambIsClicked = () => {
        setactive(pre => !pre)
        const el = document.querySelectorAll('.isclicked')
        el.forEach(element => {
            element.classList.toggle('activeNav')
        });
    }

    useEffect(() => {
        if (active) {
            gsap.from('.nav-page', 0.2, {backgroundColor: pageclr, y: '70vh', opacity: 1})
            gsap.to('.nav-page', 0.2, { backgroundColor: pageclr, y: 0 })
            gsap.from([...navPageRef.current.children[0].children], 1.5, { x: "-500px" })
            gsap.to([...navPageRef.current.children[0].children], 1.5, { x: "0", delay: 1,  stagger:{each:0.5,ease:Power3.easeOut} })
            


        }
        if (!active) {
            gsap.to('.nav-page', 0.2, {
                y: '-70vh',
                opacity: 1,
                visibility: 'visible'
            })
    
        }


        // console.log()
    }, [active])
    const liList = <>
        <li className='text-2xl lg:text-4xl mb-10'>Home</li>
        <li className='text-2xl lg:text-4xl mb-10'>About</li>
        <li className='text-2xl lg:text-4xl mb-10'>Contact</li>

    </>

    return (
      
        <div className='nav1'
        data-scroll-section
        >
            <div className="nav1-container">
                <h1>Potfolio</h1>
                <section
                    onClick={hambIsClicked}
                    id='isclicked'>
                    <div
                        className="nav1-upper-bar isclicked"></div>
                    <div className="nav1-lower-bar isclicked"></div>
                </section>
            </div>
            <div className="nav-page">
                <div className='Nav-ul'
                    ref={navPageRef}>
                    <ul>{liList}</ul>
                </div>
            </div>
            {/* {
                active && <div
                    ref={navPageRef}
                    className="nav-page">
                </div>
            } */}
            </div>
    
    );
};

export default Nav1;