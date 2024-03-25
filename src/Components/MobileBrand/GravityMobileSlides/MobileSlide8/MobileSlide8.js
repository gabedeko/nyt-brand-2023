import React from 'react';
import * as styles from './styled';
import CannibalImg from '../../../../assets/image-14.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide8">
      <h2 className={styles.GravityIntroMsg}>
        <span className={styles.GravityIntroWord}>Cannibals,</span>
      </h2>
      <img className={styles.CannibalImg} src={CannibalImg} alt="Ancient Cannibals" />
      <a href="https://www.nytimes.com/2017/04/06/science/cannibalism-human-body-calories.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Science</h4>
        <h3 className={styles.Gravityubtitle}>Ancient Cannibals Didn’t Eat Just for the Calories, Study Suggests</h3>
        <p className={styles.GravityAuthor}>
        By Nicholas St. Fleur
          <br />
          <span className={styles.GravityDate}>April 6, 2017</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
