import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import PlaceholderImg from '../../../../assets/Group_11511.jpg';
import RunningImg from '../../../../assets/NYT_Understanding_LP_Still_Running.svg';
import RunningImg2 from '../../../../assets/NYT_Understanding_LP_Still_Human-Evolution.svg';
import RunningGif from '../../../../assets/08_NFA_LP_Video_Running.gif';
import RunningGif2 from '../../../../assets/09_NFA_LP_Video_Human_Evolution.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec5() {
  
  useLayoutEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec5',
        start: '+=4700',
        end: '+=3800',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl5.from("#HorizSec5Content", {
      opacity: '0',
      x: '-50px',
    });
    tl5.to("#HorizSec5Content", {
      opacity: '1',
      x: '-25px',
    });
    tl5.to("#HorizSec5Content", {
      opacity: '0',
      x: '0px',
    });

    return () => tl5.scrollTrigger.kill()
  }, []);


  return (
    <div className={styles.HorizSec5} id="HorizSec5">
      {/* <h2 className={styles.FlyLeftMsg}>
        So you get <span className={styles.FlyLeftWord}>Flying</span>,
      </h2> */}
      {/* <h2 className={styles.FlyRightMsg}>
        And our <span className={styles.FlyRightWord}>Changing World</span>,
      </h2> */}
      <div className={styles.HorizSec5Content} id="HorizSec5Content">
        <div className={styles.FlyRight}>
       
        </div>
        <div className={styles.FlyLeft}>
          <div className={styles.FlyLeftTop}>
            <img className={styles.RunningImg} src={RunningGif} alt="Wellness One" />
            <a
                className={styles.WellnessLeftInfo}
                href="https://www.nytimes.com/2021/02/10/well/move/running-body-evolution.html"
                target="_blank"
                rel="noreferrer">
                <h5 className={styles.WellnessLeftLabel}>Wellness</h5>
                <h3 className={styles.WellnessLeftQuestion}>Running Is a Total Body Affair</h3>
                <p className={styles.WellnessLeftAuthor}>
                  By Gretchen Reynolds
                  <br />
                  <span className={styles.WellnessLeftDate}>Published Feb. 10, 2021</span>
                </p>
            </a>
          </div>
        
          <div className={styles.FlyLeftBtm}>
          
            <img className={styles.RunningImg2} src={RunningGif2} alt="Ancient Runner" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HorizSec5;
