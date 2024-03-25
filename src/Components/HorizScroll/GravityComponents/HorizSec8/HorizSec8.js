import React, { useLayoutEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SkiImg from '../../../../assets/Gravity_Ski_Jump.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec8() {

  useLayoutEffect(() => {
    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec7',
        start: '+=7500',
        end: '+=2900',
        scrub: true,
        //markers: true,
      },
    });
    tl8.from(['#SkiInfo', '#SkiImg'], {
      opacity: '0',
      x: '-50px',
    });
    tl8.to(['#SkiInfo', '#SkiImg'], {
      opacity: '1',
      x: '-25px',
    });
    tl8.to(['#SkiInfo', '#SkiImg'], {
      opacity: '0',
    });

    return () => tl8.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec8} id="HorizSec8">
      <div className={styles.HorizSec8Content} id="HorizSec8Content">
        <a
            id="SkiInfo"
            className={styles.SkiInfo}
            href="https://www.nytimes.com/2007/10/19/nyregion/19fall.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.SkiLabel}>New York</h5>
            <h3 className={styles.SkiQuestion}>Construction Means Debris; Gravity Means It Falls</h3>
            <p className={styles.SkiAuthor}>
            By John Eligon
              <br />
              <span className={styles.SkiDate}>Oct. 19, 2007</span>
            </p>
          </a>
          <img id="SkiImg" className={styles.SkiImg} src={SkiImg} alt="Ski Jump" />
      </div>
    </div>
  );
}

export default HorizSec8;
