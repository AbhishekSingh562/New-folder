import React from "react";
import styles from "./homescreen.module.css";
import img from "../../assets/one.png";

function Homescreen() {
  return (
    <div className={styles.div}>
      <img src={img} alt="" className={styles.gap} />
      <h1 className={styles.gap}>Pocket Notes</h1>
      <p className={styles.gap}>
        Hey and welcome all in Abhishek's note application, where you can save
        your thoughts and note by giving it a name.
      </p>
    </div>
  );
}

export default Homescreen;
