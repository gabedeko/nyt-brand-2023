import React from 'react';
import * as styles from './styled';
import NunImg from '../../../../assets/nun.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide6">
      <h2 className={styles.TimeIntroMsg}>
         and Nuns on <span className={styles.TimeIntroWord}>TikTok.</span>
      </h2>
      <img className={styles.NunImg} src={NunImg} alt="Nun on Tick Tock" />
      <a href="https://www.nytimes.com/2022/05/16/style/tiktok-nuns-sisters.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>World</h4>
        <h3 className={styles.Timeubtitle}>Living the #ConventLife</h3>
        <p className={styles.TimeAuthor}>
          By Anna Furman
          <br />
          <span className={styles.TimeDate}>May 16, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
