import React from "react";
import styles from "./listitem.module.css";

function ListItem({
  itemName = "Sample Item",
  uid = "",
  itemColor = "#F34A23",
  setlistUid = () => {},
}) {
  return (
    <div className={styles.div} onClick={() => setlistUid(uid)}>
      <div className={styles.innerdiv}>
        <div className={styles.profile} style={{ backgroundColor: itemColor }}>
          {itemName.substring(0, 2).toUpperCase()}
        </div>
        <p className={styles.item}>{itemName}</p>
      </div>
    </div>
  );
}

export default ListItem;
