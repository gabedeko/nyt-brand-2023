import React from 'react';
import * as styles from './styled';
import ConspiracyImg from '../../../../assets/image-15.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide7">
      <h2 className={styles.GravityIntroMsg}>
        Which leads you to <span className={styles.GravityIntroWord}>Conspiracy Theories,</span>  
      </h2>
      <img className={styles.ConspiracyImg} src={ConspiracyImg} alt="Clicks on White House" />
      <a href="https://www.nytimes.com/2020/09/28/health/psychology-conspiracy-theories.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Health</h4>
        <h3 className={styles.Gravityubtitle}>
          A Theory About Conspiracy Theories
        </h3>
        <p className={styles.GravityAuthor}>
        By Benedict Carey
          <br />
          <span className={styles.GravityDate}>Sept. 28, 2020</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
