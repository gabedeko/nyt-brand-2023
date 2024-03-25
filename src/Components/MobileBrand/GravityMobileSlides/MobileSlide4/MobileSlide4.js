import React from 'react';
import * as styles from './styled';

import AgingImg from '../../../../assets/elderly_woman_min.jpg';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide4">
      <h2 className={styles.GravityIntroMsg}>
        <span className={styles.GravityIntroWord}>Aging,</span>
      </h2>
      <img className={styles.AgingImg} src={AgingImg} alt="Older Person in Mirror" />
      <a href="https://www.nytimes.com/2002/06/23/health/what-wrinkles-mean.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Health</h4>
        <h3 className={styles.Gravityubtitle}>
        What Wrinkles Mean
        </h3>
        <p className={styles.GravityAuthor}>
        By Sara Ivry
          <br />
          <span className={styles.GravityDate}>June 23, 2002</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
