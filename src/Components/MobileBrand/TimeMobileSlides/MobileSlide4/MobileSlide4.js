import React from 'react';
import * as styles from './styled';
import TartImg1 from '../../../../assets/image-4.png';
import TartImg2 from '../../../../assets/image-39.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide4} id="MobileSlide4">
      <h2 className={styles.TimeIntroMsg}>
        And the holy history behind the <span className={styles.TimeIntroWord}>Tart.</span>
      </h2>
      <img className={styles.TartImg2} src={TartImg2} alt="Flaky Custard Tart" />

      <a href="#" target="_blank" className={styles.TimeInfo1}>
        <h4 className={styles.TimeLabel}>Food</h4>
        <h3 className={styles.Timeubtitle}>
          Flaky Custard Tarts With Holy Origins
        </h3>
        <p className={styles.TimeAuthor}>
          By Florence Fabricant
          <br />
          <span className={styles.TimeDate}>March 1, 2018</span>
        </p>
      </a>
        <img className={styles.TartImg1} src={TartImg1} alt="Plum Tart" />
        <a href="https://cooking.nytimes.com/recipes/1016817-plum-tart" target="_blank" className={styles.TimeInfo2}>
          <h4 className={styles.TimeLabel}>Cooking</h4>
          <h3 className={styles.Timeubtitle}>
            Plum Tart
          </h3>
          <p className={styles.TimeAuthor}>
            By Martha Rose Shulman
            <br />
            <span className={styles.TimeDate}>March 1, 2018</span>
          </p>
        </a>
    </div>
  );
}

export default MobileSlide1;
