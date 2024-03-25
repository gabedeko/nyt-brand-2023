import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import QuarterImg1 from '../../../../assets/image-18.png';
import QuarterImg2 from '../../../../assets/coin.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec7() {

  useLayoutEffect(() => {
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=6800',
        end: '+=2100',
        scrub: true,
        //markers: true,
      },
    });
    tl7.from("#HorizSec7Content", {
      opacity: '0',
      x: '-25px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '1',
     x: '0px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '0',
    });

    return () => tl7.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec7} id="HorizSec7">

      <div className={styles.HorizSec7Content} id="HorizSec7Content">
        <div className={styles.QuarterTop}>
          <img className={styles.QuarterImg1} src={QuarterImg1} alt="Anna Mae Wong" />
        </div>
        <div className={styles.QuarterBtm}>
          <a
            className={styles.QuarterInfo}
            href="https://www.nytimes.com/2022/10/18/us/anna-may-wong-quarter.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.QuarterLabel}>U.S.</h5>
            <h3 className={styles.QuarterQuestion}>Anna May Wong Will Be the First Asian American on U.S. Currency</h3>
            <p className={styles.QuarterAuthor}>
            By Soumya Karlamangla
              <br />
              <span className={styles.QuarterDate}>Oct. 18, 2022</span>
            </p>
          </a>
          <img className={styles.QuarterImg2} src={QuarterImg2} alt="Anna Mae Wong Coin" />
        </div>
      </div>
    </div>
  );
}

export default HorizSec7;
