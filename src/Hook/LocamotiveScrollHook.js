import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './locamotive.css';

function LocamotiveScrollHook(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".App"),
    smooth: true,
    // multiplier: 0.4,
    class: 'is-reveal'
  });
  return scroll
};

export default LocamotiveScrollHook;