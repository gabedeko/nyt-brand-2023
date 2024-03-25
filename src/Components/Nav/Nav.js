import React from "react";
import styles from "./Nav.module.scss";
// import { ReactComponent as Logo } from "../images/logo-nyt-white.svg";

var classB = styles.btn;

if (navigator.appVersion.indexOf("Win") != -1) {
  classB = styles.btnW;
}

export default function NavModule() {
  return (
    <>
      <section className={styles.section}>
        <nav className={styles.subscriberSection}>
          <div className={styles.logoContainer}>
            <a
              className={styles.logo}
              href="https://www.nytimes.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <Logo className={styles.logo} alt="New York Times Logo White" /> */}
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}
