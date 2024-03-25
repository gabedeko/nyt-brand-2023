import React from 'react';
import * as styles from './styled';
import ChewingGumGif from '../../../../assets/11_NFA_LP_Video_Gum.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide10">
      <h2 className={styles.SneakersIntroMsg}>
        So you can understand <span className={styles.SneakersIntroWord}>Gum,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={ChewingGumGif} alt="Placeholder" />
      <a href="https://www.nytimes.com/2020/01/20/style/quit-chewing-gum.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Styles</h4>
        <h3 className={styles.SneakerSubtitle}>I Quit Chewing Gum</h3>
        <p className={styles.SneakersAuthor}>
          By Alexandra Jacobs
          <br />
          <span className={styles.SneakersDate}>Jan. 20, 2020</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
