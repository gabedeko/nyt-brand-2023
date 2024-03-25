import React from 'react';
import * as styles from './styled';

import SkiImg from '../../../../assets/Gravity_Ski_Jump.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide12">
      <h2 className={styles.GravityIntroMsg}>
        naturally, you understand <span className={styles.GravityIntroWord}>Falling,</span>
      </h2>
      

      <img className={styles.SkiImg} src={SkiImg} alt="Ski Jump" />
      <a href="https://www.nytimes.com/2007/10/19/nyregion/19fall.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>New York</h4>
        <h3 className={styles.Gravityubtitle}>Construction Means Debris; Gravity Means It Falls</h3>
        <p className={styles.GravityAuthor}>
        By John Eligon
        <br />
        <span className={styles.GravityDate}>Oct. 19, 2007</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
