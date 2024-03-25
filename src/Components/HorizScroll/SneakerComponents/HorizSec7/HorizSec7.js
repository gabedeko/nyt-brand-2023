import React, { useLayoutEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import PlaceholderImg from '../../../../assets/Group_11511.jpg';
import ChewingGumImg from '../../../../assets/60_NewYorkTimes_Sneakers_Offline_CoreEdit_04_10_6PM_GUMINWRAPPER.svg';
import ChewingGumGif from '../../../../assets/11_NFA_LP_Video_Gum.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec7() {

  useLayoutEffect(() => {
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=6500',
        end: '+=2000',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl7.from("#HorizSec7Content", {
      opacity: '0',
      x: '-50px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '1',
     x: '-25px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '0',
      x: '0px',
    });

    return () => tl7.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec7} id="HorizSec7">
      {/* <h2 className={styles.GumMidMsg}>
        So you can understand <span className={styles.GumMidWord}>Gum</span>,
      </h2> */}
      <div className={styles.HorizSec7Content} id="HorizSec7Content">
        <div className={styles.GumLeft}>
          {/* <a
            className={styles.GumLeftInfo}
            href="https://www.nytimes.com/2022/08/17/science/chewing-human-evolution.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.GumLeftLabel}>Science</h5>
            <h3 className={styles.GumLeftQuestion}>How Chewing Shaped Human Evolution</h3>
            <p className={styles.GumLeftAuthor}>
              By Kate Golembiewski
              <br />
              <span className={styles.GumLeftDate}>Published Aug. 17, 2022</span>
            </p>
          </a> */}
        </div>
        <div className={styles.GumMid}>
          {/* <div className={styles.GumMidImg} /> */}
          <a
            className={styles.GumRightInfo}
            href="https://www.nytimes.com/2020/01/20/style/quit-chewing-gum.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.GumRightLabel}>Style</h5>
            <h3 className={styles.GumRightQuestion}>I Quit Chewing Gum</h3>
            <p className={styles.GumRightAuthor}>
              By Alexandra Jacobs
              <br />
              <span className={styles.GumRightDate}>Jan. 20, 2020</span>
            </p>
          </a>
          <img className={styles.ChewingGunImg} src={ChewingGumGif} alt="Chewing Gum" />
        </div>
        <div className={styles.GumRight}>
         
        </div>
      </div>
    </div>
  );
}

export default HorizSec7;
