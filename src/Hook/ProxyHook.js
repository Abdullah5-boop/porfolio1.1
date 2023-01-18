import React from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, TweenMax, Power3 } from 'gsap';
import LocamotiveScrollHook from './LocamotiveScrollHook';
const ProxyHook = ({ cls1,scroll }) => {
    // console.log(scroll)
    function ProxyHooks() {
        // let scroll = LocamotiveScrollHook();
        gsap.registerPlugin(ScrollTrigger);
        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(cls1,
            {
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

    }

    return ProxyHooks

};

export default ProxyHook;