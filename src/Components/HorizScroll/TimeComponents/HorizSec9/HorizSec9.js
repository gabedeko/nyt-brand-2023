import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import TimeImg from '../../../../assets/image-3.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec9() {

  useLayoutEffect(() => {
    let tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec8',
        start: '+=8300',
        end: '+=3500',
        scrub: true,
        //markers: true,
      },
    });
    tl9.from(['#TimeInfo', '#TimeImg'], {
      opacity: '0',
      x: '-190px',
    });
    tl9.to(['#TimeInfo', '#TimeImg'], {
      opacity: '.8',
      x: '-165px',
    });
    tl9.to(['#TimeInfo', '#TimeImg'], {
      opacity: '0',
    });

    return () => tl9.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec9} id="HorizSec9">
      <div className={styles.HorizSec9Content} id="HorizSec9Content">
        <a
          id="TimeInfo"
          className={styles.TimeInfo}
          href="https://www.nytimes.com/2016/09/11/opinion/sunday/what-should-you-choose-time-or-money.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.TimeLabel}>Opinion</h5>
          <h3 className={styles.TimeQuestion}>What Should You Choose: Time or Money?</h3> 
          <p className={styles.TimeAuthor}>
          By Hal E. Hershfield and Cassie Mogilner Holmes
            <br />
            <span className={styles.TimeDate}>Sept. 9, 2016</span>
          </p>
        </a>

        <img id="TimeImg" className={styles.TimeImg} src={TimeImg} alt="Clock Gears" />
      </div>
    </div>
  );
}

export default HorizSec9;
