import React from 'react';
import * as styles from './styled';
import RunningGif from '../../../../assets/08_NFA_LP_Video_Running.gif';
import RunningGif2 from '../../../../assets/09_NFA_LP_Video_Human_Evolution.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide8">
      <h2 className={styles.SneakersIntroMsg}>
        and <span className={styles.SneakersIntroWord}>Human Evolution,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img1} src={RunningGif} alt="Placeholder" />
      <img className={styles.MobileBrandSlide2Img2} src={RunningGif2} alt="Placeholder" />
      <a href="https://www.nytimes.com/2021/02/10/well/move/running-body-evolution.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Wellness</h4>
        <h3 className={styles.SneakerSubtitle}>Running Is a Total Body Affair</h3>
        <p className={styles.SneakersAuthor}>
          By Gretchen Reynolds
          <br />
          <span className={styles.SneakersDate}>Published Feb. 10, 2021</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
