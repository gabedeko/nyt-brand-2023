import React, { useLayoutEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SurgeryImg1 from '../../../../assets/image-9.png';
import SurgeryImg2 from '../../../../assets/image-10.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec4() {

  useLayoutEffect(() => {
    let tl4_0 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=3200',
        end: '+=2000',
        scrub: true,
        //markers: true,
      },
    });
    tl4_0.from(['#SurgeryLeftInfo', '#SurgeryImg1', '#SurgeryImg2', '#SurgeryRightInfo'], {
      opacity: '0',
      x: '-50px',
    });
    tl4_0.to(['#SurgeryLeftInfo', '#SurgeryImg1', '#SurgeryImg2', '#SurgeryRightInfo'], {
      opacity: '1',
      x: '-25px',
    });
    tl4_0.to(['#SurgeryLeftInfo', '#SurgeryImg1', '#SurgeryImg2', '#SurgeryRightInfo'], {
      opacity: '0',
      x: '0px',
    });

    return () => tl4_0.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec4} id="HorizSec4">
      <div className={styles.HorizSec4Content} id="HorizSec4Content">
        <div className={styles.SurgeryLeft}>
          <img 
            id="SurgeryImg1" 
            className={styles.SurgeryImg1} 
            src={SurgeryImg1} 
            alt="Botox Plastic"
          />
          <a
            id="SurgeryLeftInfo"
            className={styles.SurgeryLeftInfo}
            href="https://www.nytimes.com/2020/05/01/us/coronavirus-beverly-hills-botox.html"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className={styles.SurgeryLeftLabel}>U.S</h5>
            <h3 className={styles.SurgeryLeftQuestion}>
              ‘No One Needs Botox in a Pandemic.’ But Some in Beverly Hills Are Now Getting It.
            </h3>
            <p className={styles.SurgeryLeftAuthor}>
              By Shawn Hubler
              <br />
              <span className={styles.SurgeryLeftDate}>May 1, 2020</span>
            </p>
          </a>
        </div>

        <div id="SurgeryRight" className={styles.SurgeryRight}>
          <div></div>
          <a
            id="SurgeryRightInfo"
            className={styles.SurgeryRightInfo}
            href="https://www.nytimes.com/2021/10/09/style/erika-girardi-real-housewives.html"
            target="_blank"
            rel="noreferrer">
            <h4 className={styles.SurgeryRightLabel}>Style</h4>
            <h3 className={styles.SurgeryRightQuestion}>The Real Trials of a ‘Real Housewife’</h3>
            <p className={styles.SurgeryRightAuthor}>
              By Matthew Goldstein and Katherine Rosman
              <br />
              <span className={styles.SurgeryLeftDate}>Oct. 9, 2021</span>
            </p>
          </a>
          <img 
            id="SurgeryImg2" 
            className={styles.SurgeryImg2} 
            src={SurgeryImg2} 
            alt="Real Housewife Color Spectrum"
          />
        </div>
      </div>
    </div>
  );
}

export default HorizSec4;
