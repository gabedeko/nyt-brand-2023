import React from 'react';
import * as styles from './styled';
import ChurchImg1 from '../../../../assets/image-6.png';
import ChurchImg2 from '../../../../assets/image-6.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide5">

        <h2 className={styles.TimeIntroMsg}>
          Which helps explain the <span className={styles.TimeIntroWord}>Church,</span>
        </h2>

        <img className={styles.ChurchImg1} src={ChurchImg1} alt="Group of Nuns" />
      <img className={styles.ChurchImg2} src={ChurchImg2} alt="Vatican Priests" />
      <a href="https://www.nytimes.com/2018/03/01/world/europe/vatican-catholic-church-nuns-work.html" target="_blank"  className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>World</h4>
        <h3 className={styles.Timeubtitle}>
          In Vatican Magazine Exposé, Nuns Reveal Their Economic Exploitation
        </h3>
        <p className={styles.TimeAuthor}>
          By Elisabetta Povoledo
          <br />
          <span className={styles.TimeDate}>March 1, 2018</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
