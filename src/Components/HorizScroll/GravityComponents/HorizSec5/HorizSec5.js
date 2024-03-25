import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import ConspiracyImg from '../../../../assets/image-15.png';
import ConspiracyImg2 from '../../../../assets/image-14.png';
import ConspiracyImg3 from '../../../../assets/Gravity_Meat.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec5() {
  
  useLayoutEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec5',
        start: '+=4000',
        end: '+=3800',
        scrub: true,
        //markers: true,
      },
    });
    tl5.from("#ConspiracyLeft", {
      opacity: '0',
      x: '-50px',
    });
    tl5.to("#ConspiracyLeft", {
      opacity: '1',
      x: '-25px',
    });
    tl5.to("#ConspiracyLeft", {
      opacity: '0',
    });

    return () => tl5.scrollTrigger.kill()
  }, []);
  useLayoutEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec5',
        start: '+=4100',
        end: '+=3900',
        scrub: true,
        //markers: true,
      },
    });
    tl5.from("#ConspiracyMid", {
      opacity: '0',
      x: '-50px',
    });
    tl5.to("#ConspiracyMid", {
      opacity: '1',
      x: '-25px',
    });
    tl5.to("#ConspiracyMid", {
      opacity: '0',
      x: '0px',
    });

    return () => tl5.scrollTrigger.kill()
  }, []);
  useLayoutEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec5',
        start: '+=4200',
        end: '+=4000',
        scrub: true,
        //markers: true,
      },
    });
    tl5.from("#ConspiracyRight", {
      opacity: '0',
      x: '-50px',
    });
    tl5.to("#ConspiracyRight", {
      opacity: '1',
      x: '-25px',
    });
    tl5.to("#ConspiracyRight", {
      opacity: '0',
      x: '0px',
    });

    return () => tl5.scrollTrigger.kill()
  }, []);


  return (
    <div className={styles.HorizSec5} id="HorizSec5">
 
      <div className={styles.HorizSec5Content} id="HorizSec5Content">
        <div className={styles.ConspiracyLeft} id="ConspiracyLeft">
          <img className={styles.ConspiracyImg} src={ConspiracyImg} alt="Click on White House" />
            <a
                className={styles.ConspiracyLeftInfo}
                href="https://www.nytimes.com/2020/09/28/health/psychology-conspiracy-theories.html"
                target="_blank"
                rel="noreferrer">
                <h5 className={styles.ConspiracyLabel}>Health</h5>
                <h3 className={styles.ConspiracyQuestion}>A Theory About Conspiracy Theories</h3>
                <p className={styles.ConspiracyAuthor}>
                  By Benedict Carey
                  <br />
                  <span className={styles.ConspiracyDate}>Published Sept. 28, 2020</span>
                </p> 
            </a>
        </div>
        <div className={styles.ConspiracyMid} id="ConspiracyMid">
          <a
                className={styles.ConspiracyMidInfo}
                href="https://www.nytimes.com/2017/04/06/science/cannibalism-human-body-calories.html"
                target="_blank"
                rel="noreferrer">
                <h5 className={styles.ConspiracyLabel}>Science</h5>
                <h3 className={styles.ConspiracyQuestion}>Ancient Cannibals Didn’t Eat Just for the Calories, Study Suggests</h3>
                <p className={styles.ConspiracyAuthor}>
                  By Nicholas St. Fleur
                  <br />
                  <span className={styles.ConspiracyDate}>April 6, 2017</span>
                </p>
            </a>
            <img className={styles.ConspiracyImg2} src={ConspiracyImg2} alt="Cannibal Art" />
        </div>
        <div className={styles.ConspiracyRight} id="ConspiracyRight">
          <img className={styles.ConspiracyImg3} src={ConspiracyImg3} alt="Cooking Meat" />
            <a
              className={styles.ConspiracyRightInfo}
              href="https://www.nytimes.com/2022/06/02/opinion/inflation-vegetarian-vegan.html"
              target="_blank"
              rel="noreferrer">
                <h5 className={styles.ConspiracyLabel}>Opinion</h5>
                <h3 className={styles.ConspiracyQuestion}>You Want to Buy Meat? In this Economy?</h3>
                <p className={styles.ConspiracyAuthor}>
                  By Annaliese Griffin
                  <br />
                  <span className={styles.ConspiracyDate}>June 2, 2022</span>
                </p>
            </a>
        </div>
      </div>
    </div>
  );
}

export default HorizSec5;
