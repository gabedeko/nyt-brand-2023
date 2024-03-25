import React, { useRef, useEffect, useLayoutEffect, useState  }  from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import handleViewport from "react-in-viewport";

import * as styles from './styled';

import tabValue from '../../tabValue.json'


import BrandIntroSection from './BrandIntroSection/BrandIntroSection';

import SneakersHorizSec2 from './SneakerComponents/HorizSec2/HorizSec2';
import SneakersHorizSec3 from './SneakerComponents/HorizSec3/HorizSec3';
import SneakersHorizSec4 from './SneakerComponents/HorizSec4/HorizSec4';
import SneakersHorizSec5 from './SneakerComponents/HorizSec5/HorizSec5';
import SneakersHorizSec6 from './SneakerComponents/HorizSec6/HorizSec6';
import SneakersHorizSec7 from './SneakerComponents/HorizSec7/HorizSec7';
import SneakersHorizSec8 from './SneakerComponents/HorizSec8/HorizSec8';
import SneakersHorizSec9 from './SneakerComponents/HorizSec9/HorizSec9';
import SneakersHorizSec10 from './SneakerComponents/HorizSec10/HorizSec10';

import GravityHorizSec2 from './GravityComponents/HorizSec2/HorizSec2';
import GravityHorizSec3 from './GravityComponents/HorizSec3/HorizSec3';
import GravityHorizSec4 from './GravityComponents/HorizSec4/HorizSec4';
import GravityHorizSec5 from './GravityComponents/HorizSec5/HorizSec5';
import GravityHorizSec6 from './GravityComponents/HorizSec6/HorizSec6';
import GravityHorizSec7 from './GravityComponents/HorizSec7/HorizSec7';
import GravityHorizSec8 from './GravityComponents/HorizSec8/HorizSec8';
import GravityHorizSec9 from './GravityComponents/HorizSec9/HorizSec9';
import GravityHorizSec10 from './GravityComponents/HorizSec10/HorizSec10';

import TimeHorizSec2 from './TimeComponents/HorizSec2/HorizSec2';
import TimeHorizSec3 from './TimeComponents/HorizSec3/HorizSec3';
import TimeHorizSec4 from './TimeComponents/HorizSec4/HorizSec4';
import TimeHorizSec5 from './TimeComponents/HorizSec5/HorizSec5';
import TimeHorizSec6 from './TimeComponents/HorizSec6/HorizSec6';
import TimeHorizSec7 from './TimeComponents/HorizSec7/HorizSec7';
import TimeHorizSec8 from './TimeComponents/HorizSec8/HorizSec8';
import TimeHorizSec9 from './TimeComponents/HorizSec9/HorizSec9';
import TimeHorizSec10 from './TimeComponents/HorizSec10/HorizSec10';

import Endline from "../Endline/Endline";
import Footer from "../Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

/**
 * BrandIntroSection is a component used to present info at the top of the brand landing page
 *
 */


function HorizScroll({ userType }) {
  const ViewportEndline = handleViewport(Endline);
  

 // Always reload/refesh from top/beginning
 useEffect(() => {
  window.history.scrollRestoration = 'manual';
  }, []);

  // Prevent scroll on x-axis
  useEffect(() => {
    window.onscroll = function () {
      window.scrollTo(0, window.scrollY);
    };
  }, []); 

  //Initialize Horizontal Scroll Variables
  const component = useRef();
  const slider = useRef();

  //Set up Horizontal Scroll with GSAP.utls and Scrolltrigger
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //let panels = gsap.utils.toArray(".panel");
      let panels = gsap.utils.toArray(["#BrandIntroSection", "#Sec2", "#Sec3", "#Sec4", "#Sec5", "#Sec6", "#Sec7", "#Sec8", "#Sec9", "#Sec10"]);
      let pauseRatio = 0.025;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          pinSpacer: false,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          //markers: true
        }
      });
      tl.to(
        panels,
        {
          xPercent: -100 * (panels.length - 1),
          duration: 1,
          ease: "none"
        },
        pauseRatio
      );
      tl.to({}, { duration: pauseRatio });
    }, component);
    return () => ctx.revert();
  });

  //useState Hook to receive data from <BrandIntroSection /> to update Tabs
  //const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState(tabValue.value);
  const sendData = (activeTab) => {
    setActiveTab(activeTab);
    console.log(activeTab);
  }
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  //Use State Hook to determine which horizontal section to show
  let theSlides;
  if(activeTab === "tab1") {
    theSlides = 
      <>
        <section className={styles.Sec2} id="Sec2">
          <SneakersHorizSec2 />
        </section>
        <section id="Sec3">
          <SneakersHorizSec3 />
        </section>
        <section  className={styles.Sec4} id="Sec4">
          <SneakersHorizSec4 />
        </section>
        <section className={styles.Sec5} id="Sec5">
          <SneakersHorizSec5 />
        </section>
        <section id="Sec6">
          <SneakersHorizSec6 />
        </section>
        <section id="Sec7">
          <SneakersHorizSec7 />
        </section>
        <section id="Sec8">
          <SneakersHorizSec8 />
        </section>
        <section id="Sec9">
          <SneakersHorizSec9 />
        </section>
        <section className={styles.Sec10} id="Sec10"> 
        </section>
    </>
  } else if(activeTab === "tab2") {
    theSlides = 
    <>
        <section className={styles.GravitySec2} id="Sec2">
        <GravityHorizSec2 />
      </section>
      <section className={styles.GravitySec3} id="Sec3">
        <GravityHorizSec3 />
      </section>
      <section  className={styles.GravitySec4} id="Sec4">
        <GravityHorizSec4 />
      </section>
      <section className={styles.GravitySec5} id="Sec5">
        <GravityHorizSec5 />
      </section>
      <section id="Sec6">
        <GravityHorizSec6 />
      </section>
      <section className={styles.GravitySec7} id="Sec7">
        <GravityHorizSec7 />
      </section>
      <section id="Sec8">
        <GravityHorizSec8 />
      </section>
      <section id="Sec9">
        <GravityHorizSec9 />
      </section>
      <section className={styles.Sec10} id="Sec10"> 
      </section>
    </>
  } else {
    theSlides = 
    <>
        <section className={styles.Sec2} id="Sec2">
          <TimeHorizSec2 />
        </section>
        <section id="Sec3">
          <TimeHorizSec3 />
        </section>
        <section  className={styles.Sec4} id="Sec4">
          <TimeHorizSec4 />
        </section>
        <section className={styles.Sec5} id="Sec5">
          <TimeHorizSec5 />
        </section>
        <section id="Sec6">
          <TimeHorizSec6 />
        </section>
        <section id="Sec7">
          <TimeHorizSec7 />
        </section>
        <section id="Sec8">
          <TimeHorizSec8 />
        </section>
        <section id="Sec9">
          <TimeHorizSec9 />
        </section>
        <section className={styles.Sec10} id="Sec10"> 
        </section>
    </>
  }

  let lastSlide;
  if(activeTab === "tab1") {
    lastSlide = <SneakersHorizSec10 userType={userType}/>
    
  } else if(activeTab === "tab2") {
    lastSlide = <GravityHorizSec10 userType={userType}/>
    
  } else {
    lastSlide = <TimeHorizSec10 userType={userType}/>
  }

  return (
    <div className={styles.GsapTest} ref={component}>
      <div className={styles.firstContainer}>
        {/* {activeTab === "tab1" ? <p style={{color: 'white'}}>Tab 1</p> 
        : activeTab === "tab2" ? <p style={{color: 'white'}}>Tab 2</p> 
        : <p style={{color: 'white'}}>Tab 3</p>} */}
      </div>
      <div 
      ref={slider} 
      className={activeTab === "tab1" ? `${styles.container} sneakers-container` 
      : activeTab === "tab2" ? `${styles.container} gravity-container` 
      : `${styles.container} time-container`}
      id="SlideContainer">
        {/* {`${styles.styles.container} footer truth-footer`} */}
        <section id="BrandIntroSection">
          <BrandIntroSection sendData={sendData} />
        </section>
        {theSlides}
      </div>
      {lastSlide}
      <ViewportEndline />
      <Footer />
    </div>
  );
}

export default HorizScroll;
