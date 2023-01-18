import LocomotiveScroll from 'locomotive-scroll';
import './locamotive.css';
const ScrollHook = new LocomotiveScroll({
    el: document.querySelector(".App"),
    smooth: true,
    // multiplier: 0.4,
    class: 'is-reveal'
  });
  export default ScrollHook;