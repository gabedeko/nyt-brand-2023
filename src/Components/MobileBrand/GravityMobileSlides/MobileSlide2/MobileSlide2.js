import React from 'react';
import * as styles from './styled';

import EarthImg from '../../../../assets/Gravity_Planet_Opening.gif';

function MobileSlide2() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide2">
      <h2 className={styles.GravityIntroMsg}>
        When you understand how <span className={styles.GravityIntroWord}>Gravity</span> works,
      </h2>
      <img className={styles.EarthImg} src={EarthImg} alt="Earth Zoomed In" />
      <a href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html" target="_blank" className={styles.GravityInfo}>
        {/* <h4 className={styles.GravityLabel}>Styles</h4> */}
        <h3 className={styles.Gravityubtitle}>What Is Gravity, Really?</h3>
        <p className={styles.GravityAuthor}>
          By Dennis Overbye
          <br />
          <span className={styles.GravityDate}>Nov. 11, 2003</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide2;
