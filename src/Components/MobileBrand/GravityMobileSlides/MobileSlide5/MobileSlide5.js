import React from 'react';
import * as styles from './styled';

import SurgeryImg from '../../../../assets/image-9.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide5">
      <h2 className={styles.GravityIntroMsg}>
          and <span className={styles.GravityIntroWord}>Cosmetic Surgery.</span> So you get <span className={styles.GravityIntroWord}>Beverly Hills</span> 
        </h2>

      <img className={styles.SurgeryImg} src={SurgeryImg} alt="Silicon for Plastic Surgery" />
      <a href="https://www.nytimes.com/2020/05/01/us/coronavirus-beverly-hills-botox.html" target="_blank"  className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>U.S.</h4>
        <h3 className={styles.Gravityubtitle}>
        ‘No One Needs Botox in a Pandemic.’ But Some in Beverly Hills Are Now Getting It.
        </h3>
        <p className={styles.GravityAuthor}>
        By Shawn Hubler
          <br />
          <span className={styles.GravityDate}>May 1, 2020</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
