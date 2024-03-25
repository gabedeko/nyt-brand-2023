import React, { useLayoutEffect }  from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SkinImg1 from '../../../../assets/Gravity_Skin.gif';
import SkinImg2 from '../../../../assets/elderly_woman_min.jpg';

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
    tl3.from(['#SkinLeft', '#SkinRight'], {
      opacity: '0',
      x: '-50px',
    });
    tl3.to(['#SkinLeft', '#SkinRight'], {
      opacity: '1',
      x: '-25px',
    });
    tl3.to(['#SkinLeft', '#SkinRight'], {
      opacity: '0',
      x: '0px',
    });

    return () => tl3.scrollTrigger.kill()
  }, []);

  return (
    <>
      <div className={styles.HorizSec3} id="HorizSec3">
        <div className={styles.HorizSec3Content} id="HorizSec3Content">
          <div className={styles.SkinLeft} id="SkinLeft">
            <img className={styles.SkinImg1} src={SkinImg1} id="SkinImg1" alt="Facial Exercises" />
              <a
                className={styles.SkinInfo1}
                id="SkinInfo1"
                rel="noreferrer"
                href="https://www.nytimes.com/2018/01/10/well/move/facial-exercises-may-make-you-look-3-years-younger.html"
                target="_blank">
                <h5 className={styles.SkinLabel}>Wellness</h5>
                <h3 className={styles.SkinQuestion}>
                  Facial Exercises May Make You Look 3 Years Younger
                </h3>
                <p className={styles.SkinAuthor}>
                  By Gretchen Reynolds
                  <br />
                  <span className={styles.SkinDate}>Jan. 10, 2018</span>
                </p>
              </a>
          </div>

          <div className={styles.SkinRight} id="SkinRight">
            <a
              className={styles.SkinInfo2}
              id="SkinInfo2"
              rel="noreferrer"
              href="https://www.nytimes.com/2002/06/23/health/what-wrinkles-mean.html"
              target="_blank">
              <h5 className={styles.SkinLabel}>Health</h5>
              <h3 className={styles.SkinQuestion}>
                What Wrinkles Mean
              </h3>
              <p className={styles.SkinAuthor}>
                By Sara Ivry
                <br />
                <span className={styles.SkinDate}>June 23, 2002</span>
              </p>
            </a>
            <img className={styles.SkinImg2} src={SkinImg2} id="SkinImg2" alt="Elderly Woman with Mirror" />
          </div>
       
        </div>
      </div>
    </>
  );
}

export default HorizSec3;
