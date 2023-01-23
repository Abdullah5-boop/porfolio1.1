import React, { useEffect, useRef } from 'react';
import './About.css'
import { gsap, TweenMax, Power3 } from 'gsap';
import SplitText from '../../Hook/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProxyHook from '../../Hook/ProxyHook';
import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
const About = () => {
  const aboutref = useRef(null);
  const aboutContainer = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const cls1 = ".about-content"
  useEffect(() => {
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





      gsap.from(cls1, 1, { opacity: 0, y: 100 }, 0.04)
      gsap.to(cls1, 1, {
        opacity: 1, y: 0,
        fontWeight: 'bold',
        scrollTrigger: {
          trigger: cls1,
          // markers: true,
          start: 'top 100%',
          end: 'bottom 40%',
          scrub: true
        }
      }, 0.02)
    }, aboutContainer);
    return () => ctr.revert();
  })
  return (

    <div
      data-scroll-section
      ref={aboutContainer}
      className="about-container italic mb-80  text-xl lg:text-6xl ">
      <div className="about-title">
        <h3 className='text-3xl '>
          <div className='flex'>

            <div data-scroll data-scroll-speed="2">A</div>
            <div data-scroll data-scroll-speed="1">b</div>
            <div data-scroll data-scroll-speed="2">o</div>
            <div data-scroll data-scroll-speed="1">u</div>
            <div data-scroll data-scroll-speed="2">t</div>
          </div>

        </h3>
      </div>
      <div className="about-content ">
        <h1
          id='maincontainer'
          ref={aboutref}>
          <div className='lg:ml-52 inline-block'>
            sdfsdf
          </div>
          ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos esse atque nisi fuga enim temporibus, autem minima odio impedit. Fugiat nemo minima culpa , praesentium quos perspiciatis. Inventore, quidem eveniet. Lorem, ipsum dolor  <div className='inline-block  underlines'>sdfsdf
          </div> sit amet consectetur adipisicing elit. Sed, praesentium ipsum! sp Laborum dolori
        </h1>
        <div
          className='flex justify-end about-imgholder '>
          <img
            width='50vw'
            height='400px'
            data-scroll
            data-scroll-speed="8"
            // className='pr-0 lg:pr-64'
            className='mr-0 lg:mr-64 w-5/6 lg:w-2/5 h-4/6 lg:h-full'
            src="https://source.unsplash.com/zmiMJS7jVGA" alt="" />
        </div>
      </div>

    </div>

  );
};

export default About;