import React, { useEffect, useLayoutEffect, useState } from "react";
import handleViewport from "react-in-viewport";
// import CPRA from "@standalone/components/build/CPRA";
import styles from "./Footer.module.scss";
import BlackLogo from '../../assets/logo-nyt.svg';

function BlockTest(props) {
  return (
    <>
    <div ref={props.forwardedRef} className={styles.end}></div>
    </>
  )
}

export default function Footer() {
  const [size, setSize] = useState(0);
  const [open, setOpen] = useState(true);

  const ViewportBlock = handleViewport(BlockTest);


  //handle scroll to bottom
  const handleScroll = (event) => {
    window.scrollBy(0, -20);
    //window.scroll_complete();
    //console.log("hitting ghost");
  };

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  useWindowSize();

  useEffect(() => {
    if (size < 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [size]);

  return (
    <footer
      className={`${styles.section} footer truth-footer`}
      data-element-label=""
      data-element-name=""
      data-element-url=""
      data-event-type=""
      data-module-label=""
      data-module-name=""
      data-module-region="footer"
      data-track-event-impression="true"
    >
      <nav className={styles.nav}>
        <aside className={styles.footerTop}>
          <a href="https://www.nytimes.com" target="_blank" rel="noreferrer">
            <img
              className={styles.logo} 
              src={BlackLogo}
              alt="The New York Times"
              data-extension="svg"
            ></img>
          </a>
          <p className={`${styles.copyright}`}>
            ©<span>{new Date().getFullYear()}</span>
          </p>




        </aside>
        <div id="about-heading" className={styles.navDiv}>
          <details
            id="open_1"
            className={styles.details}
            open={open ? true : false}
          >
            <summary className={styles.summary}>
              <h3 className={styles.category}>About</h3>
            </summary>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  className={styles.link}
                  href="https://www.nytco.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The New York Times Company
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.link}
                  href="https://www.nytimes.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.link}
                  href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Sale
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className={styles.navDiv}>
          <details
            id="open_2"
            className={styles.details}
            open={open ? true : false}
          >
            <summary className={styles.summary}>
              <h3 className={styles.category}>Help</h3>
            </summary>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  className={styles.link}
                  href="https://help.nytimes.com/hc/en-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.link}
                  href="https://www.nytimes.com/content/help/contact/directory.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </details>
        </div>
      </nav>
      <ViewportBlock />
    </footer>
  );
}
