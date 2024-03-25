import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as styles from './styled';
import tabValue from '../../tabValue.json'

import MobileSlide1 from './_MobileSlide1/MobileSlide1';
import LogoWhite from '../../assets/LogoWhite_.svg';


import SneakersMobileSlide2 from './SneakersMobileSlides/MobileSlide2/MobileSlide2';
import SneakersMobileSlide3 from './SneakersMobileSlides/MobileSlide3/MobileSlide3';
import SneakersMobileSlide4 from './SneakersMobileSlides/MobileSlide4/MobileSlide4';
import SneakersMobileSlide5 from './SneakersMobileSlides/MobileSlide5/MobileSlide5';
import SneakersMobileSlide6 from './SneakersMobileSlides/MobileSlide6/MobileSlide6';
import SneakersMobileSlide7 from './SneakersMobileSlides/MobileSlide7/MobileSlide7';
import SneakersMobileSlide8 from './SneakersMobileSlides/MobileSlide8/MobileSlide8';
import SneakersMobileSlide9 from './SneakersMobileSlides/MobileSlide9/MobileSlide9';
import SneakersMobileSlide10 from './SneakersMobileSlides/MobileSlide10/MobileSlide10';
import SneakersMobileSlide11 from './SneakersMobileSlides/MobileSlide11/MobileSlide11';
import SneakersMobileSlide12 from './SneakersMobileSlides/MobileSlide12/MobileSlide12';
import SneakersMobileSlide13 from './SneakersMobileSlides/MobileSlide13/MobileSlide13';

import GravityMobileSlide2 from './GravityMobileSlides/MobileSlide2/MobileSlide2';
import GravityMobileSlide3 from './GravityMobileSlides/MobileSlide3/MobileSlide3';
import GravityMobileSlide4 from './GravityMobileSlides/MobileSlide4/MobileSlide4';
import GravityMobileSlide5 from './GravityMobileSlides/MobileSlide5/MobileSlide5';
import GravityMobileSlide6 from './GravityMobileSlides/MobileSlide6/MobileSlide6';
import GravityMobileSlide7 from './GravityMobileSlides/MobileSlide7/MobileSlide7';
import GravityMobileSlide8 from './GravityMobileSlides/MobileSlide8/MobileSlide8';
import GravityMobileSlide9 from './GravityMobileSlides/MobileSlide9/MobileSlide9';
import GravityMobileSlide10 from './GravityMobileSlides/MobileSlide10/MobileSlide10';
import GravityMobileSlide11 from './GravityMobileSlides/MobileSlide11/MobileSlide11';
import GravityMobileSlide12 from './GravityMobileSlides/MobileSlide12/MobileSlide12';
import GravityMobileSlide13 from './GravityMobileSlides/MobileSlide13/MobileSlide13';
import GravityMobileSlide14 from './GravityMobileSlides/MobileSlide14/MobileSlide14';

import TimeMobileSlide2 from './TimeMobileSlides/MobileSlide2/MobileSlide2';
import TimeMobileSlide3 from './TimeMobileSlides/MobileSlide3/MobileSlide3';
import TimeMobileSlide4 from './TimeMobileSlides/MobileSlide4/MobileSlide4';
import TimeMobileSlide5 from './TimeMobileSlides/MobileSlide5/MobileSlide5';
import TimeMobileSlide6 from './TimeMobileSlides/MobileSlide6/MobileSlide6';
import TimeMobileSlide7 from './TimeMobileSlides/MobileSlide7/MobileSlide7';
import TimeMobileSlide8 from './TimeMobileSlides/MobileSlide8/MobileSlide8';
import TimeMobileSlide9 from './TimeMobileSlides/MobileSlide9/MobileSlide9';
import TimeMobileSlide10 from './TimeMobileSlides/MobileSlide10/MobileSlide10';
import TimeMobileSlide11 from './TimeMobileSlides/MobileSlide11/MobileSlide11';
import TimeMobileSlide12 from './TimeMobileSlides/MobileSlide12/MobileSlide12';
import TimeMobileSlide13 from './TimeMobileSlides/MobileSlide13/MobileSlide13';


function MobileSlides({ userType }) {
  // Initialize variable for detecting swipe
  const sliderRef = useRef();
  // Initialize logo image

  // IF next arrow is clicked, fade in from right
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        //style={{ ...style, display: "block", background: "red" }}
        onClick={() => { 
          console.log("it's next");
          sliderRef.current.slickNext();
          const timeout = setTimeout(() => {
            document.getElementsByClassName("slick-active")[0].classList.add("fadeInRight");
          }, 1)
        }}
      />
    );
  }
  
  // IF prev arrow is clicked, fade in from left
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        //style={{ ...style, display: "block", background: "green" }}
        onClick={() => { 
          console.log("it's prev");
          sliderRef.current.slickPrev();
          const timeout = setTimeout(() => {
            document.getElementsByClassName("slick-active")[0].classList.add("fadeInLeft");
          }, 1)
        }}
      />
    );
  }

  function DetectSwipe() {
    //console.log("we swiped");
    // var currentIndex = parseInt($(this).data('index'));
    // console.log(currentIndex);
    let dataIndex1;
    let dataIndex2;
    
    dataIndex1 = document.getElementsByClassName("slick-active")[0].getAttribute("data-index");
    //console.log("the data index 1 is " + dataIndex1);

    const timeout = setTimeout(() => {
      dataIndex2 = document.getElementsByClassName("slick-active")[0].getAttribute("data-index");
    //console.log("the data index 2 is " + dataIndex2);
    }, 1)
    
    const timeout2 = setTimeout(() => {
    if (Number(dataIndex1) < Number(dataIndex2)){
      
        document.getElementsByClassName("slick-active")[0].classList.add("fadeInRight");
        //console.log("we went right");
      
      
    } else {
      
        document.getElementsByClassName("slick-active")[0].classList.add("fadeInLeft");
        //console.log("we went left");
      
      
    }
  }, 10)
  }
  
  // If viewer is in last slide with video then trigger video module impression
  function VideoImpression() {
    let dataIndex;
    const timeout = setTimeout(() => {
      dataIndex = document.getElementsByClassName("slick-active")[0].getAttribute("data-index");
    //console.log("the data index is " + dataIndex);
    }, 1)
    if (dataIndex = 12){
      //window.module_02_sub();
      //console.log("video is onscreen");
    }
    
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  //useState Hook to receive data from <BrandIntroSection /> to update Tabs
  //const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState(tabValue.value);
  const sendData = (activeTab) => {
    setActiveTab(activeTab);
    console.log(activeTab);
    sliderRef.current.slickNext();
  }

  //Use State Hook to determine which horizontal section to show
  let theSlides;
  if(activeTab === "tab1") {
    theSlides = 
    <>
      <Slider ref={sliderRef} {...settings} className={styles.BrandSlider} onSwipe={DetectSwipe} afterChange={VideoImpression}>
        <MobileSlide1 sendData={sendData}  />
        <SneakersMobileSlide2 />
        <SneakersMobileSlide3 />
        <SneakersMobileSlide4 />
        <SneakersMobileSlide5 />
        <SneakersMobileSlide6 />
        <SneakersMobileSlide7 />
        <SneakersMobileSlide8 />
        <SneakersMobileSlide9 />
        <SneakersMobileSlide10 />
        <SneakersMobileSlide11 />
        <SneakersMobileSlide12 />
        <SneakersMobileSlide13 userType={userType} />
      </Slider>
    </>
  } else if(activeTab === "tab2") {
    theSlides = 
    <>
      <Slider ref={sliderRef} {...settings} className={styles.BrandSlider} onSwipe={DetectSwipe} afterChange={VideoImpression}>
        <MobileSlide1 sendData={sendData}  />
        <GravityMobileSlide2 />
        <GravityMobileSlide3 />
        <GravityMobileSlide4 />
        <GravityMobileSlide5 />
        <GravityMobileSlide6 />
        <GravityMobileSlide7 />
        <GravityMobileSlide8 />
        <GravityMobileSlide9 />
        <GravityMobileSlide10 />
        <GravityMobileSlide11 />
        <GravityMobileSlide12 />
        <GravityMobileSlide13 />
        <GravityMobileSlide14 userType={userType} />
      </Slider>
    </>
  } else {
    theSlides = 
    <>
      <Slider ref={sliderRef} {...settings} className={styles.BrandSlider} onSwipe={DetectSwipe} afterChange={VideoImpression}>
        <MobileSlide1 sendData={sendData}  />
        <TimeMobileSlide2 />
        <TimeMobileSlide3 />
        <TimeMobileSlide4 />
        <TimeMobileSlide5 />
        <TimeMobileSlide6 />
        <TimeMobileSlide7 />
        <TimeMobileSlide8 />
        <TimeMobileSlide9 />
        <TimeMobileSlide10 />
        <TimeMobileSlide11 />
        <TimeMobileSlide12 />
        <TimeMobileSlide13 userType={userType} />
      </Slider>
    </>
  }

  return (
    <div className={styles.MobileBrand} id="MobileBrand">
      <a className={styles.LogoLink} href="https://www.nytimes.com/" target="_blank"><img className={styles.LogoWhite} src={LogoWhite} alt="New York Times Logo White" /></a>
      
        {theSlides}
      
    </div>
  );
}

export default MobileSlides;
