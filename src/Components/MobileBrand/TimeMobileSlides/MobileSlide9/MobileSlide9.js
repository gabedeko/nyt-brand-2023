import React from 'react';
import * as styles from './styled';
import SymmetryImg2 from '../../../../assets/149-klein-curacao-li_hthouse-jeffreyczum-min.jpg';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide9">
      <h2 className={styles.TimeIntroMsg}>
        Its role in <span className={styles.TimeIntroWord}>Cinema,</span>
      </h2>
      <img className={styles.SymmetryImg2} src={SymmetryImg2} alt="Symmetry in Cinema" />
      <a href="https://www.nytimes.com/2020/09/29/movies/wes-anderson-design-buildings.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>Movies</h4>
        <h3 className={styles.Timeubtitle}>When Life Looks Like a Wes Anderson Movie</h3>
        <p className={styles.TimeAuthor}>
        By Alexandra Lange
          <br />
          <span className={styles.TimeDate}>Sept. 29, 2020</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
