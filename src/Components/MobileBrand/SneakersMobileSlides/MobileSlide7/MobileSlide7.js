import React from 'react';
import * as styles from './styled';
import ChangingWorldImg from '../../../../assets/Changing_World_nyt_min.gif';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide7">
      <h2 className={styles.SneakersIntroMsg}>
        our <span className={styles.SneakersIntroWord}>Changing World</span>
      </h2>
      <img className={styles.MobileBrandSlide2Img} src={ChangingWorldImg} alt="Placeholder" />
      <a href="https://www.nytimes.com/2022/11/08/world/climate-change-global-photos.html" target="_blank" className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>World</h4>
        <h3 className={styles.SneakerSubtitle}>
          Ocean-Eaten Islands, Fire-Scarred Forests: Our Changing World in Pictures
        </h3>
        <p className={styles.SneakersAuthor}>
          By The New York Times
          <br />
          <span className={styles.SneakersDate}>Nov. 8, 2022</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
