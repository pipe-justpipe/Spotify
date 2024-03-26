import React from "react";
import SpotifyLogo from "../Assets/Images/logo.png";
import InstaLogo from "../Assets/svgs/insta.svg";
import FacebookLogo from "../Assets/svgs/facebook.svg";
import TwitterLogo from "../Assets/svgs/twitter.svg";
import Map from "../Assets/svgs/map.svg";
import styles from "./footerstyle.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logolist}>
        <img src={SpotifyLogo} className={styles.logo} alt="logo" />
        <div className={styles.all_lists}>
          <ul className={styles.ful}>
            <li className={styles.about}>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
          <ul className={styles.ful}>
            <li className={styles.headlist}>COMMUNITIES</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
          <ul className={styles.ful}>
            <li className={styles.headlist}>USEFUL LINKS</li>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        </div>
        <div className={styles.images}>
          <img src={InstaLogo} className={styles.socialicon} alt="Instagram logo" />
          <img src={TwitterLogo} className={styles.socialicon}  alt="Twitter logo" />
          <img src={FacebookLogo} className={styles.socialicon}  alt="Facebook logo" />
        </div>
      </div>
    <div className={styles.indiawrap}>
    <div className={styles.india}>
        <img src={Map} alt="logo" />
        <span>India (English)</span>
      </div>
        </div>
    <div className={styles.lowerfooter}>
    <ul className={styles.lowerlist}>
        <li>Privacy Center</li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>About Ads</li>
      </ul>
      <span>© 2023 Spotify AB</span>
    </div>
    </div>
  );
}
