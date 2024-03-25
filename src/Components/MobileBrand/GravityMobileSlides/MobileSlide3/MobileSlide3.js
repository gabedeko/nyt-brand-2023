import React from 'react';
import * as styles from './styled';

import SkinImg from '../../../../assets/Gravity_Skin.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide3">
      <h2 className={styles.GravityIntroMsg}>
        you start to understand <span className={styles.GravityIntroWord}>Skin,</span>
      </h2>
      <img className={styles.SkinImg} src={SkinImg} alt="Skin Care" />
      <a href="https://www.nytimes.com/2004/10/26/science/in-case-of-the-falling-face-gravity-is-acquitted.html" target="_blank" className={styles.GravityInfo1}>
        <h4 className={styles.GravityLabel}>Health</h4>
        <h3 className={styles.Gravityubtitle}>In Case of the Falling Face, Gravity Is Acquitted</h3>
        <p className={styles.GravityAuthor}>
        By Anahad O’Connor
          <br />
          <span className={styles.GravityDate}>Oct. 26, 2004</span>
        </p>
      </a>
      <a href="https://www.nytimes.com/2018/01/10/well/move/facial-exercises-may-make-you-look-3-years-younger.html" target="_blank" className={styles.GravityInfo2}>
        <h4 className={styles.GravityLabel}>Wellness</h4>
        <h3 className={styles.Gravityubtitle}>Facial Exercises May Make You Look 3 Years Younger</h3>
        <p className={styles.GravityAuthor}>
          By Gretchen Reynolds
          <br />
          <span className={styles.GravityDate}>Jan. 10, 2018</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
