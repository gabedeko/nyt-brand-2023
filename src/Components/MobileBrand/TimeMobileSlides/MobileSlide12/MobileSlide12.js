import React from 'react';
import * as styles from './styled';
import TimeImg from '../../../../assets/image-3.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide12">
      <h2 className={styles.TimeIntroMsg}>
        You can start making sense of  <span className={styles.TimeIntroWord}>Time.</span>
      </h2>
      

      <img className={styles.TimeImg} src={TimeImg} alt="Clock Gears" />
      <a href="https://www.nytimes.com/2016/09/11/opinion/sunday/what-should-you-choose-time-or-money.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>Opinion</h4>
        <h3 className={styles.Timeubtitle}>What Should You Choose: Time or Money?</h3>
        <p className={styles.TimeAuthor}>
        By Hal E. Hershfield and Cassie Mogilner Holmes
        <br />
        <span className={styles.TimeDate}>Sept. 9, 2016</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
