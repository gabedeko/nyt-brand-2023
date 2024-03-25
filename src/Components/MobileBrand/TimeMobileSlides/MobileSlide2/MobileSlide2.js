import React from 'react';
import * as styles from './styled';
import ThirtySixImg from '../../../../assets/36_hours.gif';

function MobileSlide2() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide2">
      <h2 className={styles.TimeIntroMsg}>
        If you can make sense of <span className={styles.TimeIntroWord}>Time,</span>
      </h2>
      <img className={styles.ThirtySixImg} src={ThirtySixImg} alt="Thirty Six Hours" />
      <a href="https://www.nytimes.com/column/36-hours" target="_blank" className={styles.TimeInfo1}>
        <h4 className={styles.TimeLabel}>Travel</h4>
        <h3 className={styles.Timeubtitle}>36 Hours</h3>
      </a>
      <a href="https://www.nytimes.com/2022/11/14/science/time-leap-second.html" target="_blank" className={styles.TimeInfo2}>
        <h4 className={styles.TimeLabel}>Science</h4>
        <h3 className={styles.Timeubtitle}>Time Has Run Out for the Leap Second</h3>
        <p className={styles.TimeAuthor}>
        By Alanna Mitchell
          <br />
          <span className={styles.TimeDate}>Nov. 14, 2022</span>
        </p>
      </a>
      <a href="https://www.nytimes.com/2021/12/31/us/new-years-time-sense.html" target="_blank" className={styles.TimeInfo3}>
        <h4 className={styles.TimeLabel}>U.S.</h4>
        <h3 className={styles.Timeubtitle}>How We Make Sense of Time</h3>
        <p className={styles.TimeAuthor}>
          By Elizabeth Dias
          <br />
          <span className={styles.TimeDate}>Jan. 1, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide2;
