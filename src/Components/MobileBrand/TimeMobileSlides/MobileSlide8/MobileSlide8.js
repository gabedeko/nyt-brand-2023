import React from 'react';
import * as styles from './styled';
import SymmetryImg1 from '../../../../assets/symmetry.gif';
import SymmetryImg2 from '../../../../assets/image-10.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide8">
      <h2 className={styles.TimeIntroMsg}>
        And the obsession over <span className={styles.TimeIntroWord}>Symmetry.</span>
      </h2>
      <img className={styles.SymmetryImg1} src={SymmetryImg1} alt="Symmetry throughout World" />
      {/* <img className={styles.SymmetryImg2} src={SymmetryImg2} alt="Symmetical Face Painting" /> */}
      <a href="https://www.nytimes.com/2022/08/23/style/is-your-face-symmetrical.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>Style</h4>
        <h3 className={styles.Timeubtitle}>When Did We Become So Obsessed With Being ‘Symmetrical’?</h3>
        <p className={styles.TimeAuthor}>
        By Rhonda Garelick
          <br />
          <span className={styles.TimeDate}>Aug. 23, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
