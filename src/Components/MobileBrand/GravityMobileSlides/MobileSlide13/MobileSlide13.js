import React from 'react';
import * as styles from './styled';

import JumpImg from '../../../../assets/Gravity_Red_Bull.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide12">
      <h2 className={styles.GravityIntroMsg}>
        and so, you understand how <span className={styles.GravityIntroWord}>Gravity</span> works.
      </h2>
      

      <img className={styles.JumpImg} src={JumpImg} alt="Red Bull Space Jump" />
      <a href="https://www.nytimes.com/2003/11/11/science/what-is-gravity-really.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Science</h4>
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

export default MobileSlide1;
