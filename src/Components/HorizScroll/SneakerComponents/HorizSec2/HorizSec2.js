import React, { useLayoutEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import brandLpSec2Bg from '../../../../assets/air_jordan_1_og.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec2() {

  useLayoutEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec2',
        start: '+=1100',
        end: '+=1550',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl1.from(['#JordanOne', '#SneakersInfo'], {
      opacity: '0',
      x: '-50px',
    });
    tl1.to(['#JordanOne', '#SneakersInfo'], {
      opacity: '1',
     x: '0px',
    });
    tl1.to(['#JordanOne', '#SneakersInfo'], {
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
    tl1_1.from("#SneakersIntroMsg", {
      x: '0',
    });
    tl1_1.to("#SneakersIntroMsg", {
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
    tl1_2.from("#SneakersIntroMsg", {
      opacity: '0',
    });
    tl1_2.to("#SneakersIntroMsg", {
      opacity: '1',
    });
    return () => tl1_2.scrollTrigger.kill()
  }, []);
  

  return (
    <div className={styles.HorizSec2} id="HorizSec2">
      {/* <h2 className={styles.SneakersIntroMsg}>
        If you understand <span className={styles.SneakersIntroWord}>Sneakers</span>,
      </h2> */}
      <h2 className={styles.SneakersIntroMsg} id="SneakersIntroMsg" >
        If you understand <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html" target="_blank">Sneakers</a><span className={styles.bold}>,</span> you start to
        understand <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2017/03/17/sports/ncaabasketball/squeaky-shoes-hardwood.html" target="_blank">Squeaking, Hardwood</a><span className={styles.bold}>,</span> and the
        art of Kareem’s famous <a className={styles.SneakersIntroWord} href="https://theathletic.com/4265115/2023/03/02/kareem-abdul-jabbar-sky-hook-shot-origin/" target="_blank">Sky Hook</a><span className={styles.bold}>.</span> So you
        get <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2003/12/09/news/staying-aloft-what-does-keep-them-up-there.html" target="_blank">Flying</a><span className={styles.bold}>,</span> our{' '}
        <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2022/11/08/world/climate-change-global-photos.html" target="_blank">Changing World</a> and{' '}
        <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2021/02/10/well/move/running-body-evolution.html" target="_blank">Human Evolution</a><span className={styles.bold}>,</span> which was shaped by{' '}
        <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2022/08/17/science/chewing-human-evolution.html" target="_blank">Chewing</a><span className={styles.bold}>.</span> So you can understand{' '}
        <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2020/01/20/style/quit-chewing-gum.html" target="_blank">Gum</a><span className={styles.bold}>,</span> and when you realize how much of it
        is on the <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2003/01/26/nyregion/out-damned-spot.html" target="_blank">Street</a><span className={styles.bold}>,</span> you understand why some
        people never wear their <a className={styles.SneakersIntroWord} href="https://www.nytimes.com/2019/06/26/technology/trading-sneakers-stockx.html" target="_blank">Sneakers</a>.
      </h2>
      
      <img className={styles.SneakerImg} src={brandLpSec2Bg} alt="Air Jordan One" id="JordanOne" />
      <a
            //className={styles.SneakersInfo}
            className={`${styles.SneakersInfo} info`}
            id="SneakersInfo"
            href="https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.SneakersLabel}>Styles</h5>
            <h3 className={styles.SneakerHeadline}>The Fight for Sneakers</h3>
            <p className={styles.SneakersAuthor}>
              By Daisuke Wakabayashi
              <br />
              <span className={styles.SneakersDate}>Oct. 15, 2021</span>
            </p>
            {/* <p className={styles.SneakersConcept}>
            For many of us, Sneakers is a concept we recognize due in part to Isaac Newton’s law
            helping us to understand the force that pulls us down. But what is it really?
          </p> */}
          </a>
    </div>
  );
}

export default HorizSec2;
