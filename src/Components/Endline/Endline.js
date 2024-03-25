import React from "react";
import styles from "./Endline.module.scss";

export default function Endline() {
	function SubscribeBtnClick() {
		window.subscribe_bottom_click()
	}
	return (
		<>
			{/* {props.userType !== "sub" ? (
				// non-subscriber view
				<section className={styles.section1}>
					<div id="no-subs" className={styles.nonSubscriberSection}>
						<p className={styles.tagline} ref={props.forwardedRef}>
							Experience how Times journalism brings <br className={styles.break} />your interests to life.
						</p>
						<a
							className={styles.button}
							href="https://www.nytimes.com/subscription/all-access"
							onClick={SubscribeBtnClick}
							target="_blank"
							rel="noreferrer"
						>
							Subscribe
						</a>
					</div>{" "}
				</section>
			) : (
				// subscriber view
				<section className={styles.section2}>
					<div id="subs" className={styles.subscriberSection}>
						<p className={styles.tagline} ref={props.forwardedRef}>
							Thank you for supporting quality journalism.
						</p>
					</div>
				</section>
			)} */}
			<section className={styles.section2}>
					<div id="subs" className={styles.subscriberSection}>
						<p className={styles.tagline}>
							Thank you for supporting quality journalism.
						</p>
					</div>
				</section>
		</>
	);
}
