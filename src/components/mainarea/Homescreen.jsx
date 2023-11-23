import React from "react";
import styles from "./homescreen.module.css";
import img from '../../assets/one.png'

function Homescreen() {
  return (
    <div className={styles.div}>
      <img src={img} alt=""  className={styles.gap}/>
      <h1 className={styles.gap}>Pocket Notes</h1>
      <p className={styles.gap}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
  );
}

export default Homescreen;
