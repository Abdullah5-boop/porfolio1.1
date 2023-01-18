import logo from './logo.svg';
import './App.css';
import Nav1 from './Component/Nav/Nav1';
import Banner1 from './Component/Banner/Banner1';
import About from './Component/About/About';
import Marquee from './Component/Marquee/Marquee';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import './Hook/locamotive.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { gsap, TweenMax, Power3 } from 'gsap';
import LocamotiveScrollHook from './Hook/LocamotiveScrollHook';
import ProxyHook from './Hook/ProxyHook';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  let cls1 = ".line1"
  useEffect(() => {

    const scroll = LocamotiveScrollHook();

    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector(".App"),
    //   smooth: true,
    //   // multiplier: 0.4,
    //   class: 'is-reveal'
    // });


    // ------proxy----------------

    // console.log(scroll)
    // ProxyHook({ cls1, scroll })


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

    // -----------------------gsap-------------------------------

    //  const value= ProxyHook({cls1})
    //  console.log(value)
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

  }, [])


  return (
    <div className="App"

    >
      <div data-scroll-container>
        {/* <Nav1></Nav1> */}
        {/* <Banner1></Banner1> */}
        {/* <About></About> */}
        {/* <Marquee></Marquee> */}


        <div className="text-center text-6xl w-screen h-screen flex justify-center items-end">
          <div className="line1">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>

        </div>
        <div className="div h-screen bg-red-500"></div>
      </div>


    </div>
  );
}

export default App;
