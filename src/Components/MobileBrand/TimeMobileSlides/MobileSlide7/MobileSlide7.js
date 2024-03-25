import React from 'react';
import * as styles from './styled';
import PhotoImg from '../../../../assets/image-24_.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide7">
      <h2 className={styles.TimeIntroMsg}>
       Which leads you to the lure of other people’s <span className={styles.TimeIntroWord}>Photos.</span>
      </h2>
      <img className={styles.PhotoImg} src={PhotoImg} alt="Other People's Photos" />
      <a href="https://www.nytimes.com/2020/07/30/magazine/the-strange-lure-of-other-peoples-photos.html" target="_blank" className={styles.TimeInfo1}>
        <h4 className={styles.TimeLabel}>Magazine</h4>
        <h3 className={styles.Timeubtitle}>
          The Strange Lure of Other People’s Photos
        </h3>
        <p className={styles.TimeAuthor}>
          By Bill Shapiro
          <br />
          <span className={styles.TimeDate}>July 30, 2020</span>
        </p>
      </a>
      <a href="https://www.nytimes.com/2022/10/25/style/perfectly-imperfect-party-newsletter.html" target="_blank" className={styles.TimeInfo2}>
        <h4 className={styles.TimeLabel}>Style</h4>
        <h3 className={styles.Timeubtitle}>
          What the ‘Cool Kids’ Are Super Into
        </h3>
        <p className={styles.TimeAuthor}>
          By Alex Hawgood
          <br />
          <span className={styles.TimeDate}>Oct. 25, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
