import React from 'react';
import * as styles from './styled';

import MeatImg from '../../../../assets/Gravity_Alternative_Meat_min.gif';


function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide10">
      <h2 className={styles.GravityIntroMsg}>
        and the plummeting stock prices of its <span className={styles.GravityIntroWord}>Alternative.</span>
      </h2>
      <img className={styles.MeatImg} src={MeatImg} alt="Meat on Conveyor belt" />
      <a href="https://www.nytimes.com/2022/11/21/business/beyond-meat-industry.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Business</h4>
        <h3 className={styles.Gravityubtitle}>Beyond Meat Is Struggling, and the Plant-Based Meat Industry Worries</h3>
        <p className={styles.GravityAuthor}>
        By Julie Creswell
          <br />
          <span className={styles.GravityDate}>Published Nov. 21, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
