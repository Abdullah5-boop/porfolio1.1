// import React, { useRef } from 'react';
// import './Temp.css'
// import { useEffect } from 'react';
// import gsap from 'gsap';
// import LocamotiveScrollHook from '../../Hook/LocamotiveScrollHook';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import SplitText from '../../Hook/SplitText';
// const Temp2 = () => {
//     const temp2ref = useRef(null);
//     const temppref = useRef(null)


//     useEffect(() => {
//         // var splt = new SplitText("#abouText", {
//         //     type: 'words',
//         //     linesClass: 'lineChildren'
//         // });

//         const cls1 = '.box'
//         // console.log(temppref.current.children[0])

//         const ctx = gsap.context(() => {
//             const scroll = LocamotiveScrollHook();
//             scroll.on("scroll", ScrollTrigger.update);
//             ScrollTrigger.scrollerProxy(cls1, {
//                 scrollTop(value) {
//                     return arguments.length ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) : scroll.scroll.instance.scroll.y;
//                 },
//                 getBoundingClientRect() {
//                     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//                 },
//                 pinType: document.querySelector(cls1).style.transform ? "transform" : "fixed"
//             });
//             ScrollTrigger.addEventListener("refresh", () => scroll.update());
//             ScrollTrigger.defaults({ scroller: cls1 });
//             // ------------------------animation------------------------------------
//             gsap.to('.box p', {
//                 backgroundPositionX: "0%",
//                 stagger: 1,
//                 scrollTrigger: {
//                     trigger: '.box p',
//                     scrub: 1,
//                     start: "top 60%",
//                     end: "bottom 20%",
//                 },
//             });

//         }, temp2ref)
//         return () => ctx.revert();
//     }, [])

//     return (
//         <div className='tempcontainer' data-scroll-section ref={temp2ref}>
//             <div className='box '>
//                 <p > Lorem ipsum dolor sit amet</p>
//                 <p > Lorem ipsum dolor sit amet2</p>



//             </div>

//         </div>
//     );
// };

// export default Temp2;