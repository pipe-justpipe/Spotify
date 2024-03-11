import React from "react";
import data from "./premiumData";
import styles from "./style.module.css";

import imageData from "./premiumData";
import image1 from "../Assets/Images/adfree.png";
import image2 from "../Assets/Images/online_playback.png";
import image3 from "../Assets/Images/playeverywhere.png";
import image4 from "../Assets/Images/pay-your-way.png";

const images = [image1, image2, image3, image4];
const width = ["192.47", "192.06", "231.28", "202.87"];

const Premium = () => {
  return (
    <section className={styles.premium}>
      <h1 className={styles.heading}>The power of Premium</h1>
      <div className={styles.container}>
        {imageData.map((item, index) => (
          <div key={item.id} className={styles.card}>
            <img
              src={images[index]}
              alt={item.heading}
              className={styles.img}
            />
            <div className={styles.text}>
            <h2 className={styles.subheading}>{item.heading}</h2>
            <p style={{ width: `${width[index]}px`, textAlign: "center" }} className={styles.description}>
              {item.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Premium;