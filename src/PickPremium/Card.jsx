// Card.jsx
import React from "react";
import { cardData } from "./cardData";
import mark from "../Assets/Images/mark.png";
import styles from "./style.module.css";

const Card = () => {
  return (
    <div className={styles.cardcontainer}>
      {cardData.map(
        (
          {
            button1,
            button2,
            title,
            description1,
            description2,
            listItems,
            buttonLabel,
            termsAndConditions,
            text,
          },
          index
        ) => (
          <span className={styles.card} key={title}>
            <div className={styles.head}>
            <div className={styles.btns}>
              {button1 && <button className={styles.btn1}>{button1}</button>}
              <button className={styles.btn2}>{button2}</button>
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description1}</p>
              <p className={styles.description}>{description2}</p>
            </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.list}>
              {listItems.map((item, listItemIndex) => (
                <div key={listItemIndex} className={styles.listgroup}>
                    <span className={styles.markCtn}>
                        <img src={mark} alt="Mark" className={styles.markImage} />
                    </span>
                    <p className={styles.description}> {item}</p>
                </div>
              ))}
            </div>
            {/* <span className={styles.shadow}></span> */}
       <div className={styles.view}>
       <button className={styles.viewButton}>{buttonLabel}</button>
       </div>
        <div className={styles.termss}>
        <span className={styles.allterms}> <span className={styles.terms}>{termsAndConditions}</span>
            {text &&<span>{text}</span>}</span>
        </div>
          </span>
        )
      )}
    </div>
  );
};

export default Card;
