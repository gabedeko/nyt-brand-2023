import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SkullImg from '../../../../assets/NYT_Understanding_LP_Still_Chewing-1.svg';
import SkullGif from '../../../../assets/10_NFA_LP_Video_Chewing.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec6() {
  
  useLayoutEffect(() => {
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=5500',
        end: '+=2000',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl6.from("#HorizSec6Content", {
      opacity: '0',
      x: '-50px',
    });
    tl6.to("#HorizSec6Content", {
      opacity: '1',
      x: '-25px',
    });
    tl6.to("#HorizSec6Content", {
      opacity: '0',
      x: '0px',
     });

    return () => tl6.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec6} id="HorizSec6">
 
      <div className={styles.HorizSec6Content} id="HorizSec6Content">
        <div className={styles.FlyLeft}>
        </div>
        <div className={styles.FlyRight}>
        
          <img className={styles.SkullImg} src={SkullGif} alt="Skull" />
          <a
            className={styles.FlyRightInfo}
            href="https://www.nytimes.com/2022/08/17/science/chewing-human-evolution.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.FlyRightLabel}>Science</h5>
            <h3 className={styles.FlyRightQuestion}>How Chewing Shaped Human Evolution</h3>
            <p className={styles.FlyRightAuthor}>
              By Kate Golembiewski
              <br />
              <span className={styles.FlyRightDate}>Published Aug. 17, 2022</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HorizSec6;
