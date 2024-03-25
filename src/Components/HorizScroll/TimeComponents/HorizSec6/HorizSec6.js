import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import SymmetryImg1 from '../../../../assets/symmetry.gif';
import SymmetryImg2 from '../../../../assets/symmetry_cinema.png';
import SymmetryImg3 from '../../../../assets/image-10_.png';

gsap.registerPlugin(ScrollTrigger);

function HorizSec6() {
  
  useLayoutEffect(() => {
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec6',
        start: '+=5500',
        end: '+=2000',
        scrub: true,
        //markers: true,
      },
    });
    tl6.from("#HorizSec6Content", {
      opacity: '0',
      x: '-25px',
    });
    tl6.to("#HorizSec6Content", {
      opacity: '1',
      x: '0px',
    });
    tl6.to("#HorizSec6Content", {
      opacity: '0',
      x: '0',
     });

    return () => tl6.scrollTrigger.kill()
  }, []);

  return (
    <div className={styles.HorizSec6} id="HorizSec6">
 
      <div className={styles.HorizSec6Content} id="HorizSec6Content">
        <div className={styles.SymmetryLeft}>
          <img className={styles.SymmetryImg1} src={SymmetryImg1} alt="Symmetrical World" />
          <div className={styles.SymmetryBtm}>
            {/* <img className={styles.SymmetryImg3} src={SymmetryImg3} alt="Symmetry in Face" /> */}
            <a
              className={styles.SymmetryLeftInfo}
              href="https://www.nytimes.com/2022/08/23/style/is-your-face-symmetrical.html"
              target="_blank"
              rel="noreferrer">
              <h5 className={styles.SymmetryLabel}>Style</h5>
              <h3 className={styles.SymmetryQuestion}>When Did We Become So Obsessed With Being ‘Symmetrical’?</h3>
              <p className={styles.SymmetryAuthor}>
                By Rhonda Garelick
                <br />
                <span className={styles.SymmetryDate}>Aug. 23, 2022</span>
              </p>
            </a>
          </div>
        </div>
        <div className={styles.SymmetryRight}>
          <img className={styles.SymmetryImg2} src={SymmetryImg2} alt="Symmetry in Cinema" />
          <a
            className={styles.SymmetryRightInfo}
            href="https://www.nytimes.com/2020/09/29/movies/wes-anderson-design-buildings.html"
            target="_blank"
            rel="noreferrer">
            <h5 className={styles.SymmetryLabel}>Movies</h5>
            <h3 className={styles.SymmetryQuestion}>When Life Looks Like a Wes Anderson Movie</h3>
            <p className={styles.SymmetryAuthor}>
            By Alexandra Lange
              <br />
              <span className={styles.SymmetryDate}>Sept. 29, 2020</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HorizSec6;
