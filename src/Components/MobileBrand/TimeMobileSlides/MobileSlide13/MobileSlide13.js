import React, { useState, useEffect, SyntheticEvent } from 'react';
import handleViewport from "react-in-viewport";
import Endline from "../../../../Components/Endline/Endline";
import Footer from "../../../../Components/Footer/Footer";

import * as styles from './styled';
import TimeVideo from '../../../../assets/YNYT0415000H_NYT_Understanding_Time_30_Landing_Page.mp4';

function MobileSlide1({ userType }) {
  const ViewportEndline = handleViewport(Endline);
  const ViewportFooter = handleViewport(Footer);
  //const ViewportVideo = handleViewport(BrandVideo);

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    let topBar;
    setScrollTop(event.currentTarget.scrollTop);
    if (scrollTop > 10) {
      topBar = document.getElementsByClassName("slick-dots")[0].classList.add("hide-top-bar");
    } else {
      topBar = document.getElementsByClassName("slick-dots")[0].classList.remove("hide-top-bar");
    }
    //console.log(scrollTop);
  };

  
  function TrackPlay() {
    window.module_02_sub_x_time();
  }

  //Determine how long the user watches the video
useEffect(() => {
  // handler to let me resize the array once we know the length
Array.prototype.resize = function(newSize, defaultValue) {
  while(newSize > this.length)
      this.push(defaultValue);
  this.length = newSize;
}

// function to round up a number
function roundUp(num, precision) {
  return Math.ceil(num * precision) / precision
} 


  var vid = document.getElementById("brandVideoMobile")
  var duration = 0;
  var watched = new Array(0);
  var reported50percent = false;
  var reported100percent = false;

  vid.addEventListener('loadedmetadata', getDuration, false);
  vid.addEventListener('timeupdate',timeupdate,false)

//Tracking video play 
// https://stackoverflow.com/questions/42310019/how-to-best-track-how-long-a-video-was-played
function getDuration() {
    
    duration = parseInt(roundUp(vid.duration,1));
    
    watched.resize(duration,0)
}

function timeupdate() {
    let currentTime = parseInt(vid.currentTime);
   
    watched[currentTime] = 1;

    var sum = watched.reduce(function(acc, val) {return acc + val;}, 0);
    
    if ((sum >= 30) && !reported50percent) {
      
      reported50percent = true;
      window.report_time_50_percent();
        
    }
    if ((sum >= 60) && !reported100percent) {

      reported100percent = true;
      window.report_time_100_percent();
    
    } 
}

}); 


  return (
    <div className={styles.MobileSlide13} id="MobileSlide13" onScroll={handleScroll}>
      <div className={styles.MobileSlide13Top}>
        <h2 className={styles.TimeIntroMsg} >More of life brought to life.</h2>

        <video 
        //ref={props.forwardedRef}
        id="brandVideoMobile"
        className={styles.MobileBrandSlide2Img} 
        controls
        onPlay={TrackPlay}
        >
          <source src={TimeVideo} type="video/mp4"/>
        </video>

        <div className={styles.MobileSlide13More}>
          <h2 className={styles.TimeIntroMsgBtm} onClick={() => window.location.reload(false)}>Back to the start</h2>
          <svg className={styles.ArrowDown} width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.16605" y1="1.0527" x2="14.8536" y2="14.7402" stroke="white"/>
          <line y1="-0.5" x2="19.357" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28.1875 1.40625)" stroke="white"/>
          </svg>
        </div>
      </div>
      <div className={styles.MobileFooter} id="BrandFooter">
        {/* <Endline /> */}
        <ViewportEndline
          onEnterViewport={() => window.subscribe_bottom()} userType={userType}
        />
        <Footer />
      </div>
    </div>
  );
}

export default MobileSlide1;
