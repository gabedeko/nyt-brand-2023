import React from 'react';
import * as styles from './styled';
import FlyImg from '../../../../assets/planefade-1920-LP_2_rd-min.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide6">
      <h2 className={styles.SneakersIntroMsg}>
        So you get <span className={styles.SneakersIntroWord}>Flying,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={FlyImg} alt="Plane Fading Animation" />
      <a href="https://www.nytimes.com/2003/12/09/news/staying-aloft-what-does-keep-them-up-there.html" target="_blank" className={styles.SneakersInfo}>
        <h3 className={styles.SneakerSubtitle}>STAYING ALOFT; What Does Keep Them Up There?</h3>
        <p className={styles.SneakersAuthor}>
          By Kenneth Chang
          <br />
          <span className={styles.SneakersDate}>Dec. 9, 2003</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
