import React from 'react';
import * as styles from './styled';

import StockImg1 from '../../../../assets/image-13.png';
import StockImg2 from '../../../../assets/image-12.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide11">
      <h2 className={styles.GravityIntroMsg}>
        And so, if you understand why stocks <span className={styles.GravityIntroWord}>Fall,</span>
      </h2>
      <img className={styles.StockImg1} src={StockImg1} alt="Stock Traders" />
      <img className={styles.StockImg2} src={StockImg2} alt="Stock Market" />

      <a href="https://www.nytimes.com/2020/03/13/upshot/stock-market-selloffs.html" target="_blank" className={styles.GravityInfo1}>
        <h4 className={styles.GravityLabel}>Business</h4>
        <h3 className={styles.Gravityubtitle}>How to Stop Worrying and Love a Falling Stock Market</h3>
        <p className={styles.GravityAuthor}>
        By Neil Irwin
          <br />
          <span className={styles.GravityDate}>March 13, 2020</span>
        </p>
      </a>
      <a href="https://www.nytimes.com/2022/05/09/business/dealbook/stock-market-drop-volatility.html" target="_blank" className={styles.GravityInfo2}>
        <h4 className={styles.GravityLabel}>Business</h4>
        <h3 className={styles.Gravityubtitle}>Why the Stock Market Keeps Plunging</h3>
        <p className={styles.GravityAuthor}>
          By Andrew Ross Sorkin, Stephen Gandel, Lauren Hirsch, Ephrat Livni, Jenny Gross, Vivian Giang and Anna Schaverien
          <br />
          <span className={styles.GravityDate}>May 9, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
