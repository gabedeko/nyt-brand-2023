import React from 'react';
import * as styles from './styled';
import SeasoningImg1 from '../../../../assets/Gaspar_Pieter_Verbruggen.gif';
import SeasoningImg2 from '../../../../assets/image-23.png';


function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide3">
      <h2 className={styles.TimeIntroMsg}>
        you start to understand <span className={styles.TimeIntroWord}>Seasons. Plums.</span>
      </h2>
      <img className={styles.SeasoningImg1} src={SeasoningImg1} alt="Gaspar Pieter Verbruggen the Younger" />
      <img className={styles.SeasoningImg2} src={SeasoningImg2} alt="Mideval Meat market Painting" />
      <a href="https://www.nytimes.com/interactive/2022/05/08/arts/design/dutch-still-life.html" target="_blank" className={styles.TimeInfo}>
        <h4 className={styles.TimeLabel}>Arts & Design</h4>
        <h3 className={styles.Timeubtitle}>A Messy Table, a Map of the World</h3>
        <p className={styles.TimeAuthor}>
        By Jason Farago
          <br />
          <span className={styles.TimeDate}>May 8, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
