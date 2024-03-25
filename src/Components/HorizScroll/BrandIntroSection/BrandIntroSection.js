import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as styles from './styled';
import tabValue from '../../../tabValue.json'

gsap.registerPlugin(ScrollTrigger);

/**
 * BrandIntroSection is a component used to present info at the top of the brand landing page
 *
 */

function BrandIntroSection(props) {

  // Setup useState Hook to determine which Tab is Active
  const [activeTab, setActiveTab] = useState(tabValue.value);
  // Handle tab switches
  const handleTab1 = () => {
    setActiveTab("tab1");
    props.sendData("tab1");

    const timeout = setTimeout(() => {
      window.scrollTo(0,1250)
    }, 1)
     window.experience_selection_sneakers();
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
    props.sendData("tab2");

    const timeout = setTimeout(() => {
      window.scrollTo(0,1250)
    }, 1)
    window.experience_selection_gravity();
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
    props.sendData("tab3");

    const timeout = setTimeout(() => {
      window.scrollTo(0,1250)
    }, 1)
    window.experience_selection_time();
  };

  //GSAP Fade-inn Into
  useLayoutEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#intro',
        start: '+600',
        end: '+=1500',
        scrub: true,
        //markers: true,
      },
    });
    tl1.from("#intro", {
      opacity: '1',
    });
    tl1.to("#intro", {
      opacity: '0',
    });

    return () => tl1.scrollTrigger.kill()
  }, []);


  return (
    <div className={styles.brandIntroContainer} id="intro">
      <div className={styles.introTextContainer}>
        <p className={styles.introText}>
        Following the threads of our interests and passions, wherever they take us, is exhilarating. That’s why Times journalism not only reports on the issues that matter but illuminates how they’re connected — so we can marvel at the complexity of our world as we come to understand it better.
        </p>
        <br></br>
        {/* <p className={styles.introTextEnd}>More of life brought to life.</p> */}
        <div className={`${styles.introTextEnd} introTextEnd-tabsContainer`}>More of life brought to life: 
          <ul className={styles.introTextTabs}>
            <li 
            onClick={handleTab1} 
            className={`${styles.introTextTab} ${activeTab === "tab1" ? "active" : ""}`}
            >Sneakers
            </li>
            <li 
            onClick={handleTab2} 
            className={`${styles.introTextTab} ${activeTab === "tab2" ? "active" : ""}`}
            >Gravity
            </li>
            <li 
            onClick={handleTab3} 
            className={`${styles.introTextTab} ${activeTab === "tab3" ? "active" : ""}`}
            >Time
            </li>
          </ul>
        </div>
        {/* {activeTab === "tab1" ? <Tab1 /> : <Tab2 />} */}
      </div>
    </div>
  );
}

export default BrandIntroSection;
