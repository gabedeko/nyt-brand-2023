import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

gsap.registerPlugin(ScrollTrigger);

function HorizSec8() {

  useLayoutEffect(() => {
    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec7',
        start: '+=8200',
        end: '+=2500',
        scrub: true,
        //markers: true,
      },
    });
    tl8.from(['#WordleMid', '#WordleMidInfo'], {
      opacity: '0',
      x: '-15px',
    });
    tl8.to(['#WordleMid', '#WordleMidInfo'], {
      opacity: '1',
      x: '0px',
    });
    tl8.to(['#WordleMid', '#WordleMidInfo'], {
      opacity: '0',
    });

    return () => tl8.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec8} id="HorizSec8">
      <div className={styles.HorizSec8Content} id="HorizSec8Content">
        <a
          id="WordleMidInfo"
          className={styles.WordleMidInfo}
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.WordleMidLabel}>Games</h5>
          <h3 className={styles.WordleMidQuestion}>Wordle</h3>
        </a>
      </div>
    </div>
  );
}

export default HorizSec8;
