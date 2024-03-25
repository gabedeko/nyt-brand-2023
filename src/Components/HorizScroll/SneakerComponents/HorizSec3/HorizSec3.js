import React, { useLayoutEffect }  from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';

import SqueakingImg1 from '../../../../assets/bball_layup.png';
import SqueakingImg2 from '../../../../assets/bball_squeaking.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec3() {

  useLayoutEffect(() => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec3',
        start: '+=2000',
        end: '+=1400',
        scrub: true,
        toggleClass: 'show',
        //markers: true,
      },
    });
    tl3.from(['#SqueakLeft', '#SqueakRight'], {
      opacity: '0',
      x: '-50px',
    });
    tl3.to(['#SqueakLeft', '#SqueakRight'], {
      opacity: '1',
      x: '-25px',
    });
    tl3.to(['#SqueakLeft', '#SqueakRight'], {
      opacity: '0',
      x: '0px',
    });

    return () => tl3.scrollTrigger.kill()
  }, []);

  return (
    <>
      {/* <div className={styles.HorizSecThree}> */}
      <div className={styles.HorizSec3} id="HorizSec3">
        <div className={styles.SqueakLeft} id="SqueakLeft">
          <img className={styles.SqueakingImg1} src={SqueakingImg1} id="SqueakingImg1" alt="Blurry Basketball Layup" />
          <a
                // className={styles.SqueakingInfo}
                className={`${styles.SqueakingInfo} info`}
                id="SqueakingInfo"
                rel="noreferrer"
                href="https://www.nytimes.com/2017/03/17/sports/ncaabasketball/squeaky-shoes-hardwood.html"
                target="_blank">
                <h5 className={styles.SqueakingLabel}>Sports</h5>
                <h3 className={styles.SqueakingQuestion}>
                  Why Are Basketball Games So Squeaky? Consider the Spiny Lobster
                </h3>
                <p className={styles.SqueakingAuthor}>
                  By John Branch
                  <br />
                  <span className={styles.SqueakingDate}>March 17, 2017</span>
                </p>
              </a>
        </div>
        {/* <h2 className={styles.SqueakingMsgOne}>
          You start to understand <span className={styles.SqueakingWordOne}>Squeaking</span>,
        </h2> */}
        <div className={styles.SqueakRight} id="SqueakRight">
          <img className={styles.SqueakingImg2} src={SqueakingImg2} id="SqueakingImg2" alt="Basketball Court Squeaking" />
        </div>
        {/* <h2 className={styles.SqueakingMsgTwo}>
          <span className={styles.SqueakingWordTwo}>Hardwood</span>,
        </h2> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default HorizSec3;
