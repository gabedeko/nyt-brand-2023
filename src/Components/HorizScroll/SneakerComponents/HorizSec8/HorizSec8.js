import React, { useLayoutEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

gsap.registerPlugin(ScrollTrigger);

function HorizSec8() {

  useLayoutEffect(() => {
    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec7',
        start: '+=7000',
        end: '+=2500',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl8.from(['#StreetMid', '#StreetMidInfo'], {
      opacity: '0',
      x: '-50px',
    });
    tl8.to(['#StreetMid', '#StreetMidInfo'], {
      opacity: '1',
      x: '-25px',
    });
    tl8.to(['#StreetMid', '#StreetMidInfo'], {
      opacity: '0',
      x: '0px',
    });

    return () => tl8.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec8} id="HorizSec8">
      <div className={styles.StreetMid}  id="StreetMid">
        {/* <h2 className={styles.StreetMidMsg}>
          And when you realize how much of it is on the{' '}
          <span className={styles.StreetMidWord}>Street</span>,
        </h2> */}
      </div>
      <a
        id="StreetMidInfo"
        className={styles.StreetMidInfo}
        href="https://www.nytimes.com/2003/01/26/nyregion/out-damned-spot.html"
        target="_blank"
        rel="noreferrer">
        <h5 className={styles.StreetMidLabel}>New York</h5>
        <h3 className={styles.StreetMidQuestion}>Out, Damned Spot</h3>
        <p className={styles.StreetMidAuthor}>
          By Deborah Stead
          <br />
          <span className={styles.StreetMidDate}>Jan. 26, 2003</span>
        </p>
      </a>
    </div>
  );
}

export default HorizSec8;
