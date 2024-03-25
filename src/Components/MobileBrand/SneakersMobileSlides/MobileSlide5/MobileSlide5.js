import React from 'react';
import * as styles from './styled';
import SkyImg2 from '../../../../assets/kareem_abdul_jabbar.png';
import SkyImg1 from '../../../../assets/kareem_hook.png';
import AthleticLogo from '../../../../assets/NYT-ATHLETIC-1-hor-rgb-w.svg';

function MobileSlide1() {

  return (
    <div className={styles.MobileSlide2} id="MobileSlide5">
      <div>
        <h2 className={styles.SneakersIntroMsg}>
          and the art of Kareem’s famous <span className={styles.SneakersIntroWord}>Sky Hook.</span>
        </h2>
        <a href="https://theathletic.com/4265115/2023/03/02/kareem-abdul-jabbar-sky-hook-shot-origin/" target="_blank" className={styles.SneakersInfoTop}>
        <img
            id="AthleticLogo"
            className={styles.AthleticLogo}
            src={AthleticLogo} alt="The Athletic Logo"
          />
          {/* <h4 className={styles.SneakersLabel}>The Athletic</h4> */}
          <h3 className={styles.SneakerSubtitle}>
            Who really taught Kareem Abdul-Jabbar his hook shot? The answer might depend on whose
            story you believe
          </h3>
          <p className={styles.SneakersAuthor}>
            By Joe Vardon
            <br />
            <span className={styles.SneakersDate}>March 2, 2023</span>
          </p>
        </a>
      </div>

      <img className={styles.SkyImg1} src={SkyImg1} alt="Kareem Sky Hook" />
      <img className={styles.SkyImg2} src={SkyImg2} alt="Kareem Abdul-Jabbar" />
      <a href="https://www.nytimes.com/2023/02/07/sports/basketball/kareem-abdul-jabbar-record-legacy.html" target="_blank"  className={styles.SneakersInfo}>
        <h4 className={styles.SneakersLabel}>Sports</h4>
        <h3 className={styles.SneakerSubtitle}>
          Kareem Abdul-Jabbar Is Greater Than Any Basketball Record
        </h3>
        <p className={styles.SneakersAuthor}>
          By Kurt Streeter
          <br />
          <span className={styles.SneakersDate}>Feb. 7, 2023</span>
        </p>
      </a>
    </div>
  );
}

export default MobileSlide1;
