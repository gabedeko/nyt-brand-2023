import React from 'react';
import * as styles from './styled';
import QuarterImg1 from '../../../../assets/image-18.png';
import QuarterImg2 from '../../../../assets/coin.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide10">
      <h2 className={styles.TimeIntroMsg}>
        <span className={styles.TimeIntroWord}>Anna May Wong</span> and history on the face of a <span className={styles.TimeIntroWord}>Quarter.</span>
      </h2>
      <img className={styles.QuarterImg1} src={QuarterImg1} alt="Anna Mae Wong" />
      <img className={styles.QuarterImg2} src={QuarterImg2} alt="Anna Mae Wong Coin" />
      <a href="https://www.nytimes.com/2022/10/18/us/anna-may-wong-quarter.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>U.S.</h4>
        <h3 className={styles.Timeubtitle}>Anna May Wong Will Be the First Asian American on U.S.</h3>
        <p className={styles.TimeAuthor}>
          By Soumya Karlamangla
          <br />
          <span className={styles.TimeDate}>Oct. 18, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
