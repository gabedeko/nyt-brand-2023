import React from 'react';
import * as styles from './styled';
import SqueakingImgTwo from '../../../../assets/bball_squeaking.png';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide4">
      <h2 className={styles.SneakersIntroMsg}>
        <span className={styles.SneakersIntroWord}>Hardwood,</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={SqueakingImgTwo} alt="Nike Dunks" />
      <a href="https://www.nytimes.com/2017/03/17/sports/ncaabasketball/squeaky-shoes-hardwood.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Sports</h4>
        <h3 className={styles.SneakerSubtitle}>
          Why Are Basketball Games So Squeaky? Consider the Spiny Lobster
        </h3>
        <p className={styles.SneakersAuthor}>
          By John Branch
          <br />
          <span className={styles.SneakersDate}>March 17, 2017</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
