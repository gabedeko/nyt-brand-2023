import React from 'react';
import * as styles from './styled';
import SkullGif from '../../../../assets/10_NFA_LP_Video_Chewing.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide9">
      <h2 className={styles.SneakersIntroMsg}>
        which was shaped by <span className={styles.SneakersIntroWord}>Chewing.</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={SkullGif} alt="Placeholder" />
      <a href="https://www.nytimes.com/2022/08/17/science/chewing-human-evolution.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Science</h4>
        <h3 className={styles.SneakerSubtitle}>How Chewing Shaped Human Evolution</h3>
        <p className={styles.SneakersAuthor}>
          By Kate Golembiewski
          <br />
          <span className={styles.SneakersDate}>Published Aug. 17, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
