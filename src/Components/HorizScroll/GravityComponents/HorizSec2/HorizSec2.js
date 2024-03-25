import React, { useLayoutEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import GravitySec2Bg from '../../../../assets/Gravity_Planet_Opening.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec2() {

  useLayoutEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec2',
        start: '+=1000',
        end: '+=1550',
        scrub: true,
        //markers: true,
      },
    });
    tl1.from(['#EarthZoom', '#GravityInfo1', '#GravityInfo2'], {
      opacity: '0',
      x: '-50px',
    });
    tl1.to(['#EarthZoom', '#GravityInfo1', '#GravityInfo2'], {
      opacity: '1',
     x: '0px',
    });
    tl1.to(['#EarthZoom', '#GravityInfo1', '#GravityInfo2'], {
      opacity: '0',
    });

    return () => tl1.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl1_1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec9',
        start: '+=5100',
        end: '+=5100',
        scrub: true,
        //markers: true,
      },
    });
    tl1_1.from("#GravityIntroMsg", {
      x: '0',
    });
    tl1_1.to("#GravityIntroMsg", {
     x: '-11vw',
    });
    return () => tl1_1.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl1_2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec9',
        start: '+=400',
        end: '+=600',
        scrub: true,
        //markers: true,
      },
    });
    tl1_2.from("#GravityIntroMsg", {
      opacity: '0',
    });
    tl1_2.to("#GravityIntroMsg", {
      opacity: '1',
    });
    return () => tl1_2.scrollTrigger.kill()
  }, []);
  https://www.nytimes.com/2022/06/02/opinion/inflation-vegetarian-vegan.html
  
  return (
    <div className={styles.HorizSec2} id="HorizSec2">
      {/* <h2 className={styles.GravityIntroMsg}>
        If you understand <span className={styles.GravityIntroWord}>Gravity</span>,
      </h2> */}
      <h2 className={styles.GravityIntroMsg} id="GravityIntroMsg" >
        When you understand how <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html" target="_blank">Gravity</a> works, you start to understand <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2018/01/10/well/move/facial-exercises-may-make-you-look-3-years-younger.html" target="_blank">Skin</a>, <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2002/06/23/health/what-wrinkles-mean.html" target="_blank">Aging</a> and <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2020/05/01/us/coronavirus-beverly-hills-botox.html" target="_blank">Cosmetic Surgery</a><span className={styles.bold}>.</span> So you get <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2020/05/01/us/coronavirus-beverly-hills-botox.html" target="_blank">Beverly Hills</a> and the trials of a <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2021/10/09/style/erika-girardi-real-housewives.html" target="_blank">Real Housewife</a><span className={styles.bold}>.</span> Which leads you to <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2020/09/28/health/psychology-conspiracy-theories.html" target="_blank">Conspiracy Theories</a><span className={styles.bold}>,</span> <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2017/04/06/science/cannibalism-human-body-calories.html" target="_blank">Cannibals</a><span className={styles.bold}>,</span> the value of <a className={styles.GravityIntroWord} 
        href="https://www.nytimes.com/2022/06/02/opinion/inflation-vegetarian-vegan.html" target="_blank">Meat</a> and the plummeting stock prices of its <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2022/11/21/business/beyond-meat-industry.html" target="_blank">Alternative</a><span className={styles.bold}>.</span> And so, if you understand why stocks <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2020/03/13/upshot/stock-market-selloffs.html" target="_blank">Fall</a><span className={styles.bold}>,</span> naturally, you understand <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2007/10/19/nyregion/19fall.html" target="_blank">Falling</a><span className={styles.bold}>,</span> and so, you understand how <a className={styles.GravityIntroWord} href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html" target="_blank">Gravity</a> works.
      </h2>
      <div className={styles.HorizSec2Content} id="HorizSec2Content">
        <img className={styles.GravityImg} src={GravitySec2Bg} alt="Earth Zoomed In" id="EarthZoom" />
          <a
                className={styles.GravityInfo2}
                id="GravityInfo2"
                href="https://www.nytimes.com/2004/10/26/science/in-case-of-the-falling-face-gravity-is-acquitted.html"
                target="_blank"
                rel="noreferrer">
                <h4 className={styles.GravityLabel}>Health</h4>
                <h3 className={styles.GravityHeadline}>In Case of the Falling Face, Gravity Is Acquitted</h3>
                <p className={styles.GravityAuthor}>
                  By Anahad O'Connor
                  <br />
                  <span className={styles.GravityDate}>Oct. 26, 2004</span>
                </p>
          </a>
          <a
                className={styles.GravityInfo1}
                id="GravityInfo1"
                href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html"
                target="_blank"
                rel="noreferrer">
                <h4 className={styles.GravityLabel}>Science</h4>
                <h3 className={styles.GravityHeadline}>What is Gravity, Really?</h3>
                <p className={styles.GravityAuthor}>
                  By Dennis Overbye
                  <br />
                  <span className={styles.GravityDate}>Nov. 11, 2003</span>
                </p>
          </a>
      </div>
      
    </div>
  );
}

export default HorizSec2;
