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
    //   var splt = new SplitText("#maincontainer", {
    //     type: 'lines',
    //     linesClass: 'lineChildren'
    // });

    // -------------copycode-----------
    // TweenMax.staggerFrom([...aboutref.current.children], 1, { opacity: 0, y: 44, ease: Power3.easeInOut}, 0.2)
    // TweenMax.staggerTo([...aboutref.current.children], 1, { opacity: 1, y: 0, ease: Power3.easeInOut,scrollTrigger:{
    //   trigger:aboutref,
    //   markers:true,

    // } }, 0.2)
    // -----------------owncode------------

    // console.log(aboutref.current.children)







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


      gsap.to(cls1, 1, {
        backgroundColor: '#CF4DCE'
        , scrollTrigger: {
          trigger: cls1,
          markers: true,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true
        }
      })

      // gsap.from(cls1, 1, { opacity: 0, y: 100 }, 0.04)
      // gsap.to(cls1, 1, {
      //   opacity: 0, y: 0,
      //   fontWeight: 'bold',
      //   scrollTrigger: {
      //     trigger: aboutref.current,
      //     markers: true,
      //     start: 'top 75%',
      //     end: 'bottom 45%',
      //     scrub: true,
      //     onUpdate() {
      //       console.log("Update")
      //     }
      //   }
      // }, 0.02)

    }, aboutContainer);
    return () => ctr.revert();

    // gsap.to(cls1, 1, {
    //   backgroundColor: '#CF4DCE'
    //   , scrollTrigger: {
    //     trigger: cls1,
    //     markers: true,
    //     start: 'top 80%',
    //     end: 'bottom 40%',
    //     scrub: true
    //   }
    // })
  })
  return (

    <div
      data-scroll-section
      ref={aboutContainer}
      className="about-container italic">
      <div className="about-title">
        <h3 className='text-3xl '>About Us</h3>
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
      </div>
    </div>

  );
};

export default About;