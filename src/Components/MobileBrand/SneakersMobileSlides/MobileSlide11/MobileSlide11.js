import React from 'react';
import * as styles from './styled';
import GumStreetGif from '../../../../assets/12_NFA_LP_Video_Street.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide11">
      <h2 className={styles.SneakersIntroMsg}>
        and when you realize how much of it is on the{' '}
        <span className={styles.SneakersIntroWord}>Street,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={GumStreetGif} alt="Gum in Street" />
      <a href="https://www.nytimes.com/2003/01/26/nyregion/out-damned-spot.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>New York</h4>
        <h3 className={styles.SneakerSubtitle}>Out, Damned Spot</h3>
        <p className={styles.SneakersAuthor}>
          By Deborah Stead
          <br />
          <span className={styles.SneakersDate}>Jan. 26, 2003</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
