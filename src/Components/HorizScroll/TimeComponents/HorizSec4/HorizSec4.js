import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import ChurchImg1 from '../../../../assets/image-4.png';
import ChurchImg2 from '../../../../assets/image-6.png';
import ChurchImg3 from '../../../../assets/nun.gif';
import ChurchImg4 from '../../../../assets/image-7.png';
import ChurchImg5 from '../../../../assets/image-39.png';


gsap.registerPlugin(ScrollTrigger);

function HorizSec4() {  

  useLayoutEffect(() => {
    let tl4_0 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=2700',
        end: '+=1800',
        scrub: true,
        //markers: true,
      },
    });
    tl4_0.from(['#ChurchLeft'], {
      opacity: '0',
      x: '-25px',
    });
    tl4_0.to(['#ChurchLeft'], {
      opacity: '1',
      x: '0px',
    });
    tl4_0.to(['#ChurchLeft'], {
      opacity: '0',
    });

    return () => tl4_0.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl4_1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=3500',
        end: '+=1500',
        scrub: true,
        //markers: true,
      },
    });
    tl4_1.from(['#ChurchMid'], {
      opacity: '0',
      x: '-25px',
    });
    tl4_1.to(['#ChurchMid'], {
      opacity: '1',
      x: '0px',
    });
    tl4_1.to(['#ChurchMid'], {
      opacity: '0',
    });

    return () => tl4_1.scrollTrigger.kill()
  }, []);

  useLayoutEffect(() => {
    let tl4_2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec4',
        start: '+=4400',
        end: '+=1200',
        scrub: true,
        //markers: true,
      },
    });
    tl4_2.from(['#ChurchRight'], {
      opacity: '0',
      x: '-25px',
    });
    tl4_2.to(['#ChurchRight'], {
      opacity: '1',
      x: '0px',
    });
    tl4_2.to(['#ChurchRight'], {
      opacity: '0',
    });

    return () => tl4_2.scrollTrigger.kill()
  }, []);


  return (
    <div className={styles.HorizSec4} id="HorizSec4">
      <div className={styles.HorizSec4Content} id="HorizSec4Content">
        <div id="ChurchLeft" className={styles.ChurchLeft}>
          <div className={styles.ChurchLeftTop}>
            <a
              id="ChurchLeftInfo"
              className={styles.ChurchLeftTopInfo}
              href="https://www.nytimes.com/2022/02/14/dining/pasteis-de-nata-veranda.html"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className={styles.ChurchLabel}>Food</h5>
              <h3 className={styles.ChurchQuestion}>
                Flaky Custard Tarts With Holy Origins
              </h3>
              <p className={styles.ChurchAuthor}>
                By Florence Fabricant
                <br />
                <span className={styles.ChurchDate}>Feb. 14, 2022</span>
              </p>
            </a>
            <img 
              className={styles.ChurchImg5} 
              src={ChurchImg5} 
              alt="Tart Pastry"
            />
          </div>
          <img 
            className={styles.ChurchImg1} 
            src={ChurchImg1} 
            alt="Plum Tart"
          />
          <a
            id="ChurchLeftInfo"
            className={styles.ChurchLeftInfo}
            href="https://cooking.nytimes.com/recipes/1016817-plum-tart"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className={styles.ChurchLabel}>Cooking</h5>
            <h3 className={styles.ChurchQuestion}>
            Plum Tart
            </h3>
            <p className={styles.ChurchAuthor}>
            By Martha Rose Shulman
            </p>
          </a>
        </div>
        <div id="ChurchMid" className={styles.ChurchMid}>
          <div className={styles.ChurchMidTop}>
            <img 
              className={styles.ChurchImg4} 
              src={ChurchImg4} 
              alt="Group of Nuns"
            />
            <a
              id="ChurchLeftInfo"
              className={styles.ChurchMidInfo}
              href="https://www.nytimes.com/2018/03/01/world/europe/vatican-catholic-church-nuns-work.html"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className={styles.ChurchLabel}>World</h4>
              <h3 className={styles.ChurchQuestion}>
              In Vatican Magazine Exposé, Nuns Reveal Their Economic Exploitation
              </h3>
              <p className={styles.ChurchAuthor}>
                By Elisabetta Povoledo
                <br />
                <span className={styles.ChurchDate}>March 1, 2018</span>
              </p>
            </a>
          </div>
          <img 
            className={styles.ChurchImg2} 
            src={ChurchImg2} 
            alt="Vatican Priests"
          />
        </div>
        <div id="ChurchRight" className={styles.ChurchRight}>
          <img 
            className={styles.ChurchImg3} 
            src={ChurchImg3} 
            alt="Tick Tock Nun"
          />
          <a
            id="ChurchLeftInfo"
            className={styles.ChurchRightInfo}
            href="https://www.nytimes.com/2022/05/16/style/tiktok-nuns-sisters.html"
            target="_blank"
            rel="noreferrer">
            <h4 className={styles.ChurchLabel}>World</h4>
            <h3 className={styles.ChurchQuestion}>Living the #ConventLife</h3>
            <p className={styles.ChurchAuthor}>
            By Anna Furman
              <br />
              <span className={styles.ChurchDate}>May 16, 2022</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HorizSec4;
