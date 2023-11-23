import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import ListItem from "./ListItem";
import DialogBox from "../DialogBox";

function Sidebar({ setlistUid = () => {} }) {
  const [showDialog, setshowDialog] = useState(false);
  const [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // useEffect(() => {
  //   console.log("use effect called");
  //   function handleStorageChange () {
  //     setnotes(JSON.parse(localStorage.getItem("notes")));
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  useEffect(() => {
    // console.log(notes);
    setnotes(JSON.parse(localStorage.getItem("notes")));
    
  }, [showDialog]);

  return (
    <div className={styles.div}>
      <h2>Pocket Notes</h2>

      <button className={styles.btn} onClick={() => setshowDialog(true)}>
        Create Notes Group
      </button>

      {showDialog && <DialogBox setShowDialog={setshowDialog} />}

      {/* <ListItem /> */}

      {notes.map((item) => {
        return (
          <ListItem
            itemName={item.notename}
            itemColor={item.noteColor}
            key={item.id}
            uid = {item.id}
            setlistUid = {setlistUid}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
