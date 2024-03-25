import React, { useLayoutEffect }  from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import SeasoningImg1 from '../../../../assets/Gaspar_Pieter_Verbruggen.gif';
import SeasoningImg2 from '../../../../assets/image-23.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec3() {

  useLayoutEffect(() => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec3',
        start: '+=2000',
        end: '+=1400',
        scrub: true,
        //markers: true,
      },
    });
    tl3.from(['#HorizSec3Content'], {
      opacity: '0',
      x: '0px',
    });
    tl3.to(['#HorizSec3Content'], {
      opacity: '1',
      x: '25px',
    });
    tl3.to(['#HorizSec3Content'], {
      opacity: '0',
    });

    return () => tl3.scrollTrigger.kill()
  }, []);

  return (
    <>
      <div className={styles.HorizSec3} id="HorizSec3">
        <div className={styles.HorizSec3Content} id="HorizSec3Content">
          <img className={styles.SeasoningImg1} src={SeasoningImg1} id="SeasoningImg1" alt="Gaspar Pieter Verbruggen the Younger" />
          <div className={styles.SeasonBtm} id="SeasonBtm">
          <img className={styles.SeasoningImg2} src={SeasoningImg2} id="SeasoningImg2" alt="Mideval Meat market Painting" />
            <a
                className={styles.SeasoningInfo}
                id="SeasoningInfo"
                rel="noreferrer"
                href="https://www.nytimes.com/interactive/2022/05/08/arts/design/dutch-still-life.html"
                target="_blank">
                <h5 className={styles.SeasoningLabel}>Art & Design</h5>
                <h3 className={styles.SeasoningQuestion}>
                  A Messy Table, a Map of the World
                </h3>
                <p className={styles.SeasoningAuthor}>
                  By Jason Farago
                  <br />
                  <span className={styles.SeasoningDate}>May 8, 2022</span>
                </p>
              </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizSec3;
