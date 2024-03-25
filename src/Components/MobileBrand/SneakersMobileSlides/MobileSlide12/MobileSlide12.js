import React from 'react';
import * as styles from './styled';
import NikeImg from '../../../../assets/13_NFA_LP_Video_Cling_Wrap_Higher-Res.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide12">
      <h2 className={styles.SneakersIntroMsg}>
        you understand why some people never wear their{' '}
        <span className={styles.SneakersIntroWord}>Sneakers.</span>
      </h2>
      

      <img className={styles.MobileBrandSlide2Img} src={NikeImg} alt="Nike Shoe Wrap" />
      <a href="https://www.nytimes.com/2019/06/26/technology/trading-sneakers-stockx.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Technology</h4>
        <h3 className={styles.SneakerSubtitle}>Buy Low-Tops, Sell High-Tops: StockX Sneaker Exchange Is Worth $1 Billion</h3>
        <p className={styles.SneakersAuthor}>
        By Erin Griffith
        <br />
        <span className={styles.SneakersDate}>June 26, 2019</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
