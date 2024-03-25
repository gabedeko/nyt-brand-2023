import React from 'react';
import * as styles from './styled';
import WordleImg from '../../../../assets/wordle.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide11">
      <h2 className={styles.TimeIntroMsg}>
        And since you realize time is
      </h2>
      <img className={styles.WordleImg} src={WordleImg} alt="Wordle" />
      <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>Games</h4>
        <h3 className={styles.Timeubtitle}>Wordle</h3>
      </a>
    </div>
  );
}

export default MobileSlide1;
