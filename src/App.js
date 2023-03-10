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
import Gallery1 from './Component/Gallery1/Gallery1';
import GarlleryPage1 from './Component/Gallery1/GarlleryPage1';
import Banner2 from './Component/Banner2/Banner2';
import VarticalScroll from './Component/Vartical/VarticalScroll';
import About2 from './Component/About/About2';
import Gallery2 from './Component/Gallery2/Gallery2';
import Expertice1 from './Component/Expertices/Expertice1';
import Temp2 from './Component/Temp1/Temp2';
import Footer1 from './Component/Footer/Footer1';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  let cls1 = ".line1"
  useEffect(() => {

    const scroll = LocamotiveScrollHook();



  }, [])


  return (
    <div className="App">
      <div data-scroll-container>
        {/* <Nav1></Nav1> */}
        <Banner1></Banner1>
        <About2></About2>
        <Marquee></Marquee>
        <Temp1></Temp1>
        <Banner2></Banner2>
        <Temp1></Temp1>
        <Expertice1></Expertice1>
        <Gallery2></Gallery2>
        <Footer1></Footer1>



        {/* <Temp1></Temp1>
      <Expertice1></Expertice1>
        <Temp1></Temp1> */}


      </div>


    </div>
  );
}

export default App;
