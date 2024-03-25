import React, { useState } from 'react';
import tabValue from '../../../tabValue.json'
import * as styles from './styled';

/**
 * BrandIntroSection is a component used to present info at the top of the brand landing page
 *
 */
function MobileSlide1(props) {

  const [activeTab, setActiveTab] = useState(tabValue.value);

  const handleTab1 = () => {
    setActiveTab("tab1");
    props.sendData("tab1");
    window.experience_selection_sneakers();
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
    props.sendData("tab2");
    window.experience_selection_gravity();
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
    props.sendData("tab3");
    window.experience_selection_time();
  };

  return (
    <div className={styles.MobileSlide1} id="MobileSlide1">
      <div className={styles.introTextContainer}>
        {/* <p>Testing a paragraph tag</p> */}
        <h2 className={styles.introText}>
          Following the threads of our interests and passions, wherever they take us, is
          exhilarating. That’s why Times journalism not only reports on the issues that matter but
          illuminates how they’re connected — so we can marvel at the complexity of our world as we
          come to understand it better.
        </h2>
        <h2 className={styles.introTextBtm}>
          {/* Go where understanding <span className={styles.noWidow}>takes you.</span> */}
          More of life brought to life.
        </h2>
        <ul className={styles.introTextTabs}>
            <li 
            onClick={handleTab1} 
            className={`${styles.introTextTab} ${activeTab === "tab1" ? "active" : ""}`}
            >Sneakers</li>
            <li 
            onClick={handleTab2} 
            className={`${styles.introTextTab} ${activeTab === "tab2" ? "active" : ""}`}
            >Gravity</li>
            <li 
            onClick={handleTab3} 
            className={`${styles.introTextTab} ${activeTab === "tab3" ? "active" : ""}`}
            >Time</li>
          </ul>
      </div>
    </div>
  );
}

export default MobileSlide1;
