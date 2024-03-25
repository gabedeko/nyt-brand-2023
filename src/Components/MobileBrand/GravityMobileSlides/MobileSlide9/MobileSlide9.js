import React from 'react';
import * as styles from './styled';

import MeatGif from '../../../../assets/Gravity_Meat.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide9">
      <h2 className={styles.GravityIntroMsg}>
      the value of <span className={styles.GravityIntroWord}>Meat</span>
      </h2>
      <img className={styles.MeatGif} src={MeatGif} alt="Cooking Meat" />
      <a href="https://www.nytimes.com/2022/06/02/opinion/inflation-vegetarian-vegan.html" target="_blank" className={styles.GravityInfo}>
        <h4 className={styles.GravityLabel}>Opinion</h4>
        <h3 className={styles.Gravityubtitle}>You Want to Buy Meat? In This Economy?</h3>
        <p className={styles.GravityAuthor}>
        By Annaliese Griffin
          <br />
          <span className={styles.GravityDate}>June 2, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
