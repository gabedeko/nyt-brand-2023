import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import NikeImg from '../../../../assets/13_NFA_LP_Video_Cling_Wrap_Higher-Res.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec9() {

  useLayoutEffect(() => {
    let tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec8',
        start: '+=8300',
        end: '+=3500',
        scrub: true,
        toggleClass: 'show',
      },
    });
    tl9.from(['#NikeInfo', '#NikeImg'], {
      opacity: '0',
      x: '-200px',
    });
    tl9.to(['#NikeInfo', '#NikeImg'], {
      opacity: '.8',
      x: '-175px',
    });
    tl9.to(['#NikeInfo', '#NikeImg'], {
      opacity: '0',
    });

    return () => tl9.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec9} id="HorizSec9">
      {/* <h2 className={styles.NikeMsg}>
        You understand why some people never wear their{' '}
        <span className={styles.NikeWord}>Sneakers</span>.
      </h2> */}
      <a
        id="NikeInfo"
        className={styles.NikeInfo}
        href="https://www.nytimes.com/2019/06/26/technology/trading-sneakers-stockx.html"
        target="_blank"
        rel="noreferrer">
        <h5 className={styles.NikeLabel}>Technology</h5>
        <h3 className={styles.NikeQuestion}>Buy Low-Tops, Sell High-Tops: StockX Sneaker Exchange Is Worth $1 Billion</h3> 
        <p className={styles.NikeAuthor}>
          By Erin Griffith
          <br />
          <span className={styles.NikeDate}>June 26, 2019</span>
        </p>
      </a>
      <img id="NikeImg" className={styles.NikeImg} src={NikeImg} alt="Nike Air Forces" />
    </div>
  );
}

export default HorizSec9;
