import React, { useLayoutEffect } from 'react';
// import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SkyImg2 from '../../../../assets/kareem_abdul_jabbar.png';
import ChangingWorld from '../../../../assets/Changing_World_nyt_min.gif';
import FlyImg from '../../../../assets/planefade-1920-LP_2_rd-min.gif';
import AthleticLogo from '../../../../assets/NYT-ATHLETIC-1-hor-rgb-w.svg';

gsap.registerPlugin(ScrollTrigger);

function HorizSec4() {

  useLayoutEffect(() => {
    let tl4_0 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=2700',
        end: '+=1800',
        scrub: true,
        toggleClass: 'show1',
        //markers: true,
      },
    });
    tl4_0.from(['#SkyLeftInfo', '#SkyImg1', '#SkyImg2', '#SkyRightInfo'], {
      opacity: '0',
      x: '-25px',
    });
    tl4_0.to(['#SkyLeftInfo', '#SkyImg1', '#SkyImg2', '#SkyRightInfo'], {
      opacity: '1',
      x: '0px',
    });
    tl4_0.to(['#SkyLeftInfo', '#SkyImg1', '#SkyImg2', '#SkyRightInfo'], {
      opacity: '0',
    });

    return () => tl4_0.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl4_1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=3500',
        end: '+=1150',
        scrub: true,
        toggleClass: 'show2',
        //markers: true,
      },
    });
    tl4_1.from(['#FlyLeftInfo', '#FlyImg'], {
      opacity: '0',
      x: '-25px',
    });
    tl4_1.to(['#FlyLeftInfo', '#FlyImg'], {
      opacity: '1',
      x: '0',
    });
    tl4_1.to(['#FlyLeftInfo', '#FlyImg'], {
      opacity: '0',
    });

    return () => tl4_1.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl4_2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=4400',
        end: '+=900',
        scrub: true,
        toggleClass: 'show3',
        //markers: true,
      },
    });
    tl4_2.from(['#ChangingWorld', '#OceanEat', '#CodeRed'], {
      opacity: '0',
      x: '-50px',
    });
    tl4_2.to(['#ChangingWorld', '#OceanEat', '#CodeRed'], {
      opacity: '1',
      x: '-25px',
    });
    tl4_2.to(['#ChangingWorld', '#OceanEat', '#CodeRed'], {
      opacity: '0',
      x: '0',
    });

    return () => tl4_2.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec4} id="HorizSec4">
      {/* <h2 className={styles.SkyLeftMsg}>
        And the art of Kareem’s famous <span className=
        {styles.SkyLeftWord}>Sky Hook</span>,
      </h2> */}
      <img
        id="ChangingWorld"
        className={styles.ChangingWorld}
        src={ChangingWorld} alt="Changing World"
      />
      <div  id="SkyImg1" className={styles.SkyImg1} />
      <img id="SkyImg2" className={styles.SkyImg2} src={SkyImg2} alt="Kareem Abdul-Jabbar" />
      <a
          id="OceanEat"
          //className={styles.WorldInfo}
          className={`${styles.WorldInfo} info`}
          href="https://www.nytimes.com/2022/11/08/world/climate-change-global-photos.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.WorldLabel}>World</h5>
          <h3 className={styles.WorldQuestion}>Ocean-Eaten Islands, Fire-Scarred Forests: Our Changing World in Pictures</h3>
          <p className={styles.WorldAuthor}>
          By The New York Times
          <br />
          <span className={styles.WorldDate}>Nov. 8, 2022</span>
          </p>
      </a>
      <a
          id="CodeRed"
          //className={styles.CodeRed}
          className={`${styles.CodeRed} info`}
          href="https://www.nytimes.com/2021/08/13/podcasts/the-daily/climate-change-IPCC.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.WorldLabel}>The Daily</h5>
          <h3 className={styles.WorldQuestion}>A ‘Code Red for Humanity’</h3>
          <p className={styles.WorldAuthor}>
          By The New York Times
          <br />
          <span className={styles.WorldDate}>Aug. 13, 2021</span>
          </p>
      </a>
      <a
          id="SkyRightInfo"
          //className={styles.SkyRightInfo}
          className={`${styles.SkyRightInfo} info`}
          href="https://www.nytimes.com/2023/02/07/sports/basketball/kareem-abdul-jabbar-record-legacy.html"
          target="_blank"
          rel="noreferrer">
          <h5 className={styles.SkyRightLabel}>Sports</h5>
          <h3 className={styles.SkyRightQuestion}>
            Kareem Abdul-Jabbar Is Greater Than Any Basketball Record
          </h3>
          <p className={styles.SkyRightAuthor}>
            By Kurt Streeter
            <br />
            <span className={styles.SkyRightDate}>Feb. 7, 2023</span>
          </p>
        </a>
      <div className={styles.HorizSec4Content} id="HorizSec4Content">
        <div className={styles.SkyLeft}>
          <a
            id="SkyLeftInfo"
            //className={styles.SkyLeftInfo}
            className={`${styles.SkyLeftInfo} info`}
            href="https://theathletic.com/4265115/2023/03/02/kareem-abdul-jabbar-sky-hook-shot-origin/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="AthleticLogo"
              className={styles.AthleticLogo}
              src={AthleticLogo} alt="The Athletic Logo"
            />
            {/* <h4 className={styles.SkyLeftLabel}>The Athletic</h4> */}
            <h3 className={styles.SkyLeftQuestion}>
              Who really taught Kareem Abdul-Jabbar his hook shot? The answer might depend on whose
              story you believe
            </h3>
            <p className={styles.SkyLeftAuthor}>
              By Joe Vardon
              <br />
              <span className={styles.SkyLeftDate}>March 2, 2023</span>
            </p>
          </a>
        </div>

        <div id="SkyRight" className={styles.SkyRight}>
          <div></div>
          <a
            id="FlyLeftInfo"
            //className={styles.FlyLeftInfo}
            className={`${styles.FlyLeftInfo} info`}
            href="https://www.nytimes.com/2003/12/09/news/staying-aloft-what-does-keep-them-up-there.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.FlyLeftLabel}>.</h5>
            <h3 className={styles.FlyLeftQuestion}>STAYING ALOFT; What Does Keep Them Up There?</h3>
            <p className={styles.FlyLeftAuthor}>
              By Kenneth Chang
              <br />
              <span className={styles.FlyLeftDate}>Dec. 9, 2003</span>
            </p>
          </a>
          <img 
            id="FlyImg" 
            className={styles.FlyImg} 
            src={FlyImg} 
            alt="Flying Aircraft"
          />
        </div>
      </div>
    </div>
  );
}

export default HorizSec4;
