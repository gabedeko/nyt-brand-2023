import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import ThirtySixImg from '../../../../assets/36_hours.gif';
import WordleImg from '../../../../assets/wordle.gif';

gsap.registerPlugin(ScrollTrigger);

function HorizSec2() {

  useLayoutEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec2',
        start: '+=1100',
        end: '+=1550',
        scrub: true,
        //markers: true,
      },
    });
    tl1.from(['#HorizSec2Content'], {
      opacity: '0',
      x: '-100px',
    });
    tl1.to(['#HorizSec2Content'], {
      opacity: '1',
      x: '-50px',
    });
    tl1.to(['#HorizSec2Content'], {
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
    tl1_1.from("#TimeIntroMsg", {
      x: '0',
    });
    tl1_1.to("#TimeIntroMsg", {
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
    tl1_2.from("#TimeIntroMsg", {
      opacity: '0',
    });
    tl1_2.to("#TimeIntroMsg", {
      opacity: '1',
    });
    return () => tl1_2.scrollTrigger.kill()
  }, []);
  

  return (
    <div className={styles.HorizSec2} id="HorizSec2">

      <h2 className={styles.TimeIntroMsg} id="TimeIntroMsg" >
        If you can make sense of <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2021/12/31/us/new-years-time-sense.html" target="_blank">Time</a><span className={styles.bold}>,</span> you start to understand <a className={styles.TimeIntroWord} href="https://www.nytimes.com/interactive/2022/05/08/arts/design/dutch-still-life.html" target="_blank">Seasons. Plums</a><span className={styles.bold}>.</span> And the holy history behind the <a className={styles.TimeIntroWord} href="https://cooking.nytimes.com/recipes/1016817-plum-tart" target="_blank">Tart</a><span className={styles.bold}>.</span> Which helps explain the <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2018/03/01/world/europe/vatican-catholic-church-nuns-work.html" target="_blank">Church</a><span className={styles.bold}>,</span> and Nuns on <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2022/05/16/style/tiktok-nuns-sisters.html" target="_blank">TikTok</a><span className={styles.bold}>.</span> Which leads you to the lure of other people’s <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2020/07/30/magazine/the-strange-lure-of-other-peoples-photos.html" target="_blank">Photos</a><span className={styles.bold}>.</span> And the obsession over <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2022/08/23/style/is-your-face-symmetrical.html" target="_blank">Symmetry</a><span className={styles.bold}>.</span> Its role in <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2020/09/29/movies/wes-anderson-design-buildings.html" target="_blank">Cinema</a><span className={styles.bold}>,</span> <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2022/10/18/us/anna-may-wong-quarter.html" target="_blank">Anna May Wong</a> and history on the face of a <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2022/10/18/us/anna-may-wong-quarter.html" target="_blank">Quarter</a><span className={styles.bold}>.</span> And since you realize time is 
        <a className={styles.WordleLink} href="https://www.nytimes.com/games/wordle/index.html" target="_blank"><img className={styles.WordleImg} src={WordleImg} alt="Wordle Game" id="Wordle" /></a><span className={styles.WordleSpacer}></span><span className={styles.bold}>,</span> you can start making sense of  <a className={styles.TimeIntroWord} href="https://www.nytimes.com/2016/09/11/opinion/sunday/what-should-you-choose-time-or-money.html" target="_blank">Time</a><span className={styles.bold}>.</span>
      </h2>
      
      <div className={styles.HorizSec2Content} id="HorizSec2Content">
        
        <a
            className={styles.TimeInfo2}
            href="https://www.nytimes.com/2022/11/14/science/time-leap-second.html"
            target="_blank"
            rel="noreferrer">
            <h4 className={styles.TimeLeftLabel}>Science</h4>
            <h3 className={styles.TimeLeftQuestion}>Time Has Run Out for the Leap Second</h3>
            <p className={styles.TimeLeftAuthor}>
              By Alanna Mitchell
              <br />
              <span className={styles.TimeLeftDate}>Nov. 14, 2022</span>
            </p>
        </a>
        
        <div className={styles.ThirtySixBox}>
          <a
              className={styles.TimeInfo1}
              href="https://www.nytimes.com/column/36-hours"
              target="_blank"
              rel="noreferrer">
              <h4 className={styles.TimeLeftLabel}>Travel</h4>
              <h3 className={styles.TimeLeftQuestion}>36 Hours</h3>
          </a>
          <img className={styles.ThirtySixImg} src={ThirtySixImg} alt="Thirty Six Hours" id="ThirtySixHours" /> 
        </div>
        <a
            className={styles.TimeInfo3}
            href="https://www.nytimes.com/2021/12/31/us/new-years-time-sense.html"
            target="_blank"
            rel="noreferrer">
            <h4 className={styles.TimeLeftLabel}>U.S.</h4>
            <h3 className={styles.TimeLeftQuestion}>How We Make Sense of Time</h3>
            <p className={styles.TimeLeftAuthor}>
              By Elizabeth Dias
              <br />
              <span className={styles.TimeLeftDate}>Jan. 1, 2022 </span>
            </p>
        </a>
      </div>
        
    </div>
  );
}

export default HorizSec2;
