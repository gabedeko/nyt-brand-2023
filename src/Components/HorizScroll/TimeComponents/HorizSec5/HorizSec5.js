import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import PhotoImg2 from '../../../../assets/image-24.png';
import PhotoImg1 from '../../../../assets/image-25.png';


gsap.registerPlugin(ScrollTrigger);

function HorizSec5() {

  useLayoutEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#HorizSec5',
        start: '+=4250',
        end: '+=3350',
        // start: '+=4700',
        // end: '+=3800',
        scrub: true,
        //markers: true,
      },
    });
    tl5.from("#HorizSec5Content", {
      opacity: '0',
      x: '-25px',
    });
    tl5.to("#HorizSec5Content", {
      opacity: '1',
      x: '0px',
    });
    tl5.to("#HorizSec5Content", {
      opacity: '0',
    });

    return () => tl5.scrollTrigger.kill()
  }, []);


  return (
    <div className={styles.HorizSec5} id="HorizSec5">
      <div className={styles.HorizSec5Content} id="HorizSec5Content">
        
          <a
              className={styles.PhotosTopInfo}
              href="https://www.nytimes.com/2022/10/25/style/perfectly-imperfect-party-newsletter.html"
              target="_blank"
              rel="noreferrer">
              <h5 className={styles.PhotosLeftLabel}>Style</h5>
              <h3 className={styles.PhotosLeftQuestion}>What the ‘Cool Kids’ Are Super Into</h3>
              <p className={styles.PhotosLeftAuthor}>
              By Alex Hawgood
                <br />
                <span className={styles.PhotosLeftDate}>Oct. 25, 2022</span>
              </p>
          </a>
          <img className={styles.PhotosImg1} src={PhotoImg1} alt="Other People's Photos" />
          <img className={styles.PhotosImg2} src={PhotoImg2} alt="Cool Kids Photo" />
          <a
              className={styles.PhotosBtmInfo}
              href="https://www.nytimes.com/2020/07/30/magazine/the-strange-lure-of-other-peoples-photos.html"
              target="_blank"
              rel="noreferrer">
              <h5 className={styles.PhotosLeftLabel}>Magazine</h5>
              <h3 className={styles.PhotosLeftQuestion}>The Strange Lure of Other People’s Photos</h3>
              <p className={styles.PhotosLeftAuthor}>
                By Bill Shapiro
                <br />
                <span className={styles.PhotosLeftDate}>July 30, 2020</span>
              </p>
          </a>
          
      </div>
    </div>
  );
}

export default HorizSec5;
