import React, { SyntheticEvent, useEffect } from 'react';
import handleViewport from "react-in-viewport";

import * as styles from './styled';

import SneakersVideo from '../../../../assets/YNYT0409000H_NYT_Understanding_Sneakers_60_Landing_Page.mp4';
import SneakersPlaceholder from '../../../../assets/sneakers_placeholder_.png';

function BrandVideo(props) {

  function TrackPlay() {
    window.module_02_sub_x_sneakers();
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
      //console.log("duration:" + vid.duration)
      // get the duration in seconds, rounding up, to size the array
      duration = parseInt(roundUp(vid.duration,1));
      // resize the array, defaulting entries to zero
      //console.log("resizing arrary to " + duration + " seconds.");
      watched.resize(duration,0)
  }

  function timeupdate() {
      let currentTime = parseInt(vid.currentTime);
      // set the current second to "1" to flag it as watched
      watched[currentTime] = 1;

      // show the array of seconds so you can track what has been watched
      // you'll note that simply looping over the same few seconds never gets
      // the user closer to the magic 80%...
      //console.log(watched);

      // sum the value of the array (add up the "watched" seconds)
      let sum = watched.reduce(function(acc, val) {return acc + val;}, 0);
      //console.log("the sum is" + sum);
      // take your desired action on the ?80% completion
      if ((sum >= 30) && !reported50percent) {
          // set reported50percent to true so that the action is triggered once and only once
          // could also unregister the timeupdate event to avoid calling unneeded code at this point
          // vid.removeEventListener('timeupdate',timeupdate)
          reported50percent = true;
          window.report_sneakers_50_percent();
          //console.log("50% watched...")
          // your ajax call to report progress could go here...   
      }
      if ((sum >= 60) && !reported100percent) {

        reported100percent = true;
        window.report_sneakers_100_percent();
      
      } 
      //console.log('the sum is ' + sum);
  }

  }); 

  return (
    <video 
      ref={props.forwardedRef}
      id="brandVideo"
      className={styles.GoVideo}
      poster={SneakersPlaceholder}
      onPlay={TrackPlay}
      controls 
      >
      <source src={SneakersVideo} type="video/mp4" />
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

        <ViewportVideo />
        <a href="#root" className={styles.GoBackLink}><h3 className={styles.GoBack} onClick={ScrollTop} >Back to the start</h3></a>
      </div>
    </div>
  );
}

export default HorizSec10;