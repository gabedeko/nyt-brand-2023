import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import StockImg1 from '../../../../assets/image-13.png';
import StockImg2 from '../../../../assets/image-12.png';


gsap.registerPlugin(ScrollTrigger);

function HorizSec7() {

  useLayoutEffect(() => {
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=7500',
        end: '+=2000',
        scrub: true,
        //markers: true,
      },
    });
    tl7.from("#HorizSec7Content", {
      opacity: '0',
      x: '-50px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '1',
     x: '-25px',
    });
    tl7.to("#HorizSec7Content", {
      opacity: '0',
    });

    return () => tl7.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec7} id="HorizSec7">
      <div className={styles.HorizSec7Content} id="HorizSec7Content">
        <a
            className={styles.StockInfo1}
            href="https://www.nytimes.com/2022/05/09/business/dealbook/stock-market-drop-volatility.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.StockLabel}>Business</h5>
            <h3 className={styles.StockQuestion}>Why the Stock Market Keeps Plunging</h3>
            <p className={styles.StockAuthor}>
            By Andrew Ross Sorkin, Stephen Gandel, Lauren Hirsch, Ephrat Livni, Jenny Gross, Vivian Giang and Anna Schaverien
              <br />
              <span className={styles.StockDate}>May 9, 2022</span>
            </p>
        </a>
          <img className={styles.StockImg1} src={StockImg2} alt="Stock Market Gazing"/>
          <img className={styles.StockImg2} src={StockImg1} alt="Stock Market Black and White"  />
          <a
            className={styles.StockInfo2}
            href="https://www.nytimes.com/2020/03/13/upshot/stock-market-selloffs.html"
            target="_blank"
            rel="noreferrer">
            <h3 className={styles.StockQuestion}>How to Stop Worrying and Love a Falling Stock Market</h3>
            <p className={styles.StockAuthor}>
              By Neil Irwin
              <br />
              <span className={styles.StockDate}>March 13, 2020</span>
            </p>
        </a>
      </div>
    </div>
  );
}

export default HorizSec7;
