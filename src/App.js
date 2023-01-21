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
import Temp1 from './Component/Temp1/Temp1';
import Join1 from './Others/Join1';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  let cls1 = ".line1"
  useEffect(() => {

    const scroll = LocamotiveScrollHook();



  }, [])


  return (
    <div className="App"

    >
      <div data-scroll-container>
        <Nav1></Nav1>
        <Banner1></Banner1>
        <About></About>
        <Temp1></Temp1>
        <Marquee></Marquee>
        <Temp1></Temp1>
        {/* <Join1></Join1> */}

     

      </div>


    </div>
  );
}

export default App;
