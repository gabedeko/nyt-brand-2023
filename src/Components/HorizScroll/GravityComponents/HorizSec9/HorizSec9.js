import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import JumpImg from '../../../../assets/Gravity_Red_Bull.gif';

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
    tl9.from(['#JumpInfo', '#JumpImg'], {
      opacity: '0',
      //x: '-200px',
    });
    tl9.to(['#JumpInfo', '#JumpImg'], {
      opacity: '.8',
      //x: '-175px',
    });
    tl9.to(['#JumpInfo', '#JumpImg'], {
      opacity: '0',
    });

    return () => tl9.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec9} id="HorizSec9">
      <div className={styles.HorizSec9Content} id="HorizSec9Content">
        <a
          id="JumpInfo"
          className={styles.JumpInfo}
          href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.JumpLabel}>Science</h5>
          <h3 className={styles.JumpQuestion}>What Is Gravity, Really?</h3> 
          <p className={styles.JumpAuthor}>
          By Dennis Overbye
            <br />
            <span className={styles.JumpDate}>Nov. 11, 2003</span>
          </p>
        </a>
        <img id="JumpImg" className={styles.JumpImg} src={JumpImg} alt="Jump from space" />
      </div>
    </div>
  );
}

export default HorizSec9;
