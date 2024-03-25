import React from 'react';
import * as styles from './styled';
import SqueakingImgOne from '../../../../assets/bball_layup.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide3">
      <h2 className={styles.SneakersIntroMsg}>
        you start to understand <span className={styles.SneakersIntroWord}>Squeaking,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={SqueakingImgOne} alt="Nike Dunks" />
      <a href="https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Styles</h4>
        <h3 className={styles.SneakerSubtitle}>The Fight for Sneakers</h3>
        <p className={styles.SneakersAuthor}>
          By Daisuke Wakabayashi
          <br />
          <span className={styles.SneakersDate}>Oct. 15, 2021</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
