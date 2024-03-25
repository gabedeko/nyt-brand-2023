import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import MeatImg from '../../../../assets/Gravity_Alternative_Meat_min.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec6() {

  useLayoutEffect(() => {
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=5900',
        end: '+=2400',
        scrub: true,
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
      x: '0',
     });

    return () => tl6.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec6} id="HorizSec6">
 
      <div className={styles.HorizSec6Content} id="HorizSec6Content">
        <a
            className={styles.MeatRightInfo}
            href="https://www.nytimes.com/2022/11/21/business/beyond-meat-industry.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.MeatRightLabel}>Business</h5>
            <h3 className={styles.MeatRightQuestion}>Beyond Meat Is Struggling, and the Plant-Based Meat Industry Worries</h3>
            <p className={styles.MeatRightAuthor}>
              By Julie Creswell
              <br />
              <span className={styles.MeatRightDate}>Published Nov. 21, 2022<br/></span>
            </p>
          </a>
          <img className={styles.MeatImg} src={MeatImg} alt="Meat on Conveyor belt" />
      </div>
    </div>
  );
}

export default HorizSec6;
