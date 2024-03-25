import React from 'react';
import * as styles from './styled';

import HousewivesImg from '../../../../assets/image-10.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide6">
      <h2 className={styles.GravityIntroMsg}>
        and the trials of a <span className={styles.GravityIntroWord}>Real Housewife.</span>
      </h2>
      <img className={styles.HousewivesImg} src={HousewivesImg} alt="Real Housewife Color Spectrum" />
      <a href="https://www.nytimes.com/2021/10/09/style/erika-girardi-real-housewives.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Style</h4>
        <h3 className={styles.Gravityubtitle}>The Real Trials of a ‘Real Housewife’</h3>
        <p className={styles.GravityAuthor}>
          By Matthew Goldstein and Katherine Rosman
          <br />
          <span className={styles.GravityDate}>Oct. 9, 2021</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
