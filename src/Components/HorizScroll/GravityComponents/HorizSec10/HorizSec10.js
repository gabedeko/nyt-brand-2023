import React, { SyntheticEvent, useEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import handleViewport from "react-in-viewport";

import * as styles from './styled';

import GravityVideo from '../../../../assets/air_jordan_1_og.png';
import PlaceholderImg from '../../../../assets/Screenshot-2023-04-04-at-3.png';

function BrandVideo(props) {

  function TrackPlay() {
    window.module_02_sub_x_gravity();
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


    let vid = document.getElementById("brandVideo")
    let duration = 0; // will hold length of the video in seconds
    let watched = new Array(0);
    let reported50percent = false;
    let reported100percent = false;

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

      let sum = watched.reduce(function(acc, val) {return acc + val;}, 0);
      
      if ((sum >= 30) && !reported50percent) {
          
          reported50percent = true;
          window.report_gravity_50_percent();
            
      }
      if ((sum >= 60) && !reported100percent) {

        reported100percent = true;
        window.report_gravity_100_percent();
      
      } 
  }

  }); 

  return (
    <video 
      ref={props.forwardedRef}
      id="brandVideo"
      className={styles.GoVideo}
      poster={PlaceholderImg}
      onPlay={TrackPlay}
      controls 
      >
      <source src={GravityVideo} type="video/mp4"/>
    </video>
  )
}


function HorizSec10() {
  const ViewportVideo = handleViewport(BrandVideo);  

  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.HorizSec10} id="HorizSec10">
      <div className={styles.HorizSec10Content}>
        <h2 className={styles.GoMsg}>More of life brought to life.</h2>

        <ViewportVideo
          onEnterViewport={() => window.module_02_sub_gravity()} 
        />
        <a href="#root" className={styles.GoBackLink}><h3 className={styles.GoBack} onClick={ScrollTop} >Back to the start</h3></a>
      </div>
    </div>
  );
}

export default HorizSec10;